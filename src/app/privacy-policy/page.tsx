import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Privacy Policy | Comfort Heating and Plumbing Ltd",
  description: "Privacy policy and UK GDPR data protection notice for Comfort Heating and Plumbing Ltd.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-electric hover:underline mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO HOME</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-electric" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            PRIVACY POLICY
          </h1>
        </div>

        <p className="text-xs font-mono text-slate-500 mb-8 font-medium">
          LAST UPDATED: 2026 • COMPLIANT WITH UK GDPR & DATA PROTECTION ACT 2018
        </p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">1. INTRODUCTION</h2>
            <p>
              Comfort Heating and Plumbing Ltd (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to protecting the privacy and security of your personal data. This privacy notice explains how we collect, use, store, and safeguard your personal information when you visit our website or engage our heating, gas, and plumbing services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">2. INFORMATION WE COLLECT</h2>
            <p>We may collect personal details when you request a quote, submit an enquiry form, or call our team:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
              <li>Contact Details: Full Name, Email Address, Telephone Number</li>
              <li>Service Location: Property Postcode and Address</li>
              <li>Technical Details: Property type, heating system specifications, and enquiry notes</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">3. HOW WE USE YOUR INFORMATION</h2>
            <p>Your information is processed strictly for the following purposes:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
              <li>Fulfilling your requested quote or heating/plumbing service enquiry</li>
              <li>Dispatching certified engineers to your property</li>
              <li>Complying with British safety regulations and invoice accounting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">4. DATA SECURITY & PROTECTION</h2>
            <p>
              We implement robust technical and organizational measures, including 256-bit SSL encryption, CSRF protection, and restricted administrative access to prevent unauthorized disclosure of your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">5. YOUR RIGHTS</h2>
            <p>
              Under UK GDPR, you have the right to access, rectify, erase, or restrict processing of your personal data. To exercise any of these rights, please contact our data compliance office at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-electric font-semibold underline">
                {siteConfig.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
