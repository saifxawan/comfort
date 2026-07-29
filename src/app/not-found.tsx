import React from "react";
import Link from "next/link";
import { Wrench, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-brand-warmWhite flex items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-elevated space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-brand-ivory border border-slate-200 text-brand-copper flex items-center justify-center mx-auto shadow-xs">
          <Wrench className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-brand-copper font-semibold uppercase tracking-widest">404 — Page Not Found</span>
          <h1 className="text-3xl font-extrabold text-brand-deepNavy font-display">Page Not Found</h1>
          <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
            Sorry, the page you are looking for does not exist or has been moved.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-copper hover:bg-brand-copperDark shadow-md transition-all min-h-[44px]"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
      </div>
    </main>
  );
}
