import React from "react";
import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";
import { siteConfig } from "@/config/site";

export const metadata = {
  title: "Cookie Policy | Comfort Heating and Plumbing Ltd",
  description: "Detailed cookie policy explaining technical and performance cookies used on Comfort Heating and Plumbing Ltd.",
};

export default function CookiePolicy() {
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
          <Cookie className="w-8 h-8 text-copper" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            COOKIE POLICY
          </h1>
        </div>

        <p className="text-xs font-mono text-slate-500 mb-8 font-medium">
          LAST UPDATED: 2026 • REGULATED UNDER UK PECR & GDPR
        </p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">1. WHAT ARE COOKIES?</h2>
            <p>
              Cookies are small text files placed on your device when you visit our website. They enable core site functionality, enhance security, and remember your site preferences.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">2. CATEGORIES OF COOKIES WE USE</h2>
            <div className="space-y-4 mt-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Strictly Necessary Cookies</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Essential for technical site navigation, security headers, form rate limiting, and CSRF protection.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Analytics & Performance Cookies</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Allow us to analyze traffic volume and ensure fast WebGL 3D rendering speeds.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">3. MANAGING YOUR PREFERENCES</h2>
            <p>
              You can change your consent settings at any time using the cookie preference banner on our home page or by clearing your browser cookies.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
