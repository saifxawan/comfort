import React from "react";
import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Privacy Policy | Comfort Heating and Plumbing Ltd",
  description: "Privacy policy and data protection notice for Comfort Heating and Plumbing Ltd.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-brand-copper hover:underline mb-8 font-semibold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Home</span>
        </Link>

        <div className="flex items-center gap-3 mb-6">
          <Shield className="w-8 h-8 text-brand-copper" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Privacy Policy
          </h1>
        </div>

        <p className="text-xs font-mono text-slate-500 mb-8 font-medium">
          Last Updated: 2026 • Compliant with UK Data Protection Standards
        </p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">1. Introduction</h2>
            <p>
              Comfort Heating and Plumbing Ltd is committed to protecting your privacy. This page explains how we collect and look after your information when you contact us or request our services.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">2. Information We Collect</h2>
            <p>We may collect details when you fill in a form or contact us:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
              <li>Name, email address and phone number</li>
              <li>Postcode and property address</li>
              <li>Details about your heating or plumbing enquiry</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">3. How We Use Your Details</h2>
            <p>We only use your information to:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1 text-slate-600">
              <li>Provide you with a quote or carry out requested work</li>
              <li>Arrange visits for our engineers</li>
              <li>Keep records for accounting and safety standards</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">4. Keeping Your Data Safe</h2>
            <p>
              We store your data securely and never sell your information to third parties.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">5. Your Rights</h2>
            <p>
              You can ask us to update or delete your information at any time. Email us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-brand-copper font-semibold underline">
                {siteConfig.email}
              </a>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
