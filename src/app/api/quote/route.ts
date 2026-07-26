import { NextResponse } from "next/server";
import { z } from "zod";

// Zod Schema Validation
const quoteSchema = z.object({
  fullName: z.string().min(2, "Full name is required").max(100),
  phone: z.string().min(7, "Valid phone number is required").max(20),
  email: z.string().email("Valid email address is required"),
  postcode: z.string().min(3, "Postcode is required").max(10),
  serviceRequired: z.string().min(1, "Service selection is required"),
  propertyType: z.string().min(1, "Property type is required"),
  preferredDate: z.string().optional(),
  message: z.string().max(2000).optional(),
  honeypot: z.string().optional(),
  consent: z.boolean().refine((val) => val === true, "Consent is required"),
});

// Simple in-memory rate limiting store (production environment could use Redis/Upstash)
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    const now = Date.now();
    const windowMs = 15 * 60 * 1000; // 15 minutes
    const maxRequests = 5; // max 5 quote submissions per 15 minutes per IP

    const record = rateLimitMap.get(ip) || { count: 0, lastReset: now };

    if (now - record.lastReset > windowMs) {
      record.count = 1;
      record.lastReset = now;
    } else {
      record.count += 1;
    }

    rateLimitMap.set(ip, record);

    if (record.count > maxRequests) {
      return NextResponse.json(
        { success: false, message: "Too many quote requests. Please try again later or call our team." },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Honeypot check for bots
    if (body.honeypot) {
      return NextResponse.json({ success: true, message: "Quote request received." }, { status: 200 });
    }

    // Validate payload against schema
    const parseResult = quoteSchema.safeParse(body);
    if (!parseResult.success) {
      const errorMsg = parseResult.error.errors[0]?.message || "Invalid input parameters.";
      return NextResponse.json({ success: false, message: errorMsg }, { status: 400 });
    }

    const data = parseResult.data;

    // Log processed quote request securely (ready for email/CRM integration)
    console.log("[QUOTE ENQUIRY PROCESSED]:", {
      name: data.fullName,
      email: data.email,
      phone: data.phone,
      service: data.serviceRequired,
      postcode: data.postcode,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your quote request has been received. Our team will contact you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Quote submit error:", error);
    return NextResponse.json(
      { success: false, message: "An unexpected server error occurred. Please try again." },
      { status: 500 }
    );
  }
}
