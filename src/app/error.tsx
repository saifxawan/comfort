"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("App Error Boundary caught:", error);
  }, [error]);

  return (
    <main className="min-h-screen bg-brand-warmWhite flex items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-elevated space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto shadow-xs">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-amber-600 font-semibold uppercase tracking-widest">Something went wrong</span>
          <h1 className="text-2xl font-extrabold text-brand-deepNavy font-display">An Error Occurred</h1>
          <p className="text-xs sm:text-sm text-brand-slate leading-relaxed">
            We apologize for the inconvenience. You can try refreshing the page or returning home.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-copper hover:bg-brand-copperDark shadow-md transition-all flex items-center justify-center gap-2 min-h-[44px]"
          >
            <RefreshCw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto px-5 py-3 rounded-xl text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 hover:text-slate-900 transition-all flex items-center justify-center gap-2 min-h-[44px]"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
        </div>
      </div>
    </main>
  );
}
