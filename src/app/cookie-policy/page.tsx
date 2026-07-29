import React from "react";
import Link from "next/link";
import { ArrowLeft, Cookie } from "lucide-react";

export const metadata = {
  title: "Cookie Policy | Comfort Heating and Plumbing Ltd",
  description: "Cookie policy explaining how cookies are used on Comfort Heating and Plumbing Ltd.",
};

export default function CookiePolicy() {
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
          <Cookie className="w-8 h-8 text-brand-copper" />
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-display">
            Cookie Policy
          </h1>
        </div>

        <p className="text-xs font-mono text-slate-500 mb-8 font-medium">
          Last Updated: 2026
        </p>

        <div className="space-y-6 text-sm leading-relaxed text-slate-700">
          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files stored on your device when you visit websites. They help the website work properly and enable core site features.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">2. Types of Cookies We Use</h2>
            <div className="space-y-4 mt-3">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Essential Cookies</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Required for core site navigation and security.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                <h3 className="font-bold text-slate-900 text-sm">Analytics Cookies</h3>
                <p className="text-xs text-slate-600 mt-1">
                  Helps us measure site visits so we can improve our services.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-lg font-bold text-slate-900 font-display mb-2">3. Managing Your Preferences</h2>
            <p>
              You can update your cookie preferences at any time using the cookie banner on our home page or through your browser settings.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
