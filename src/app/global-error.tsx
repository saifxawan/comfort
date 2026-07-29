"use client";

import React from "react";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-50 flex items-center justify-center p-4 text-center font-sans">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
          <h1 className="text-2xl font-bold text-slate-900">Something went wrong</h1>
          <p className="text-sm text-slate-600">A critical error occurred. Please try refreshing.</p>
          <button
            onClick={() => reset()}
            className="px-6 py-3 rounded-xl text-xs font-bold text-white bg-slate-900 hover:bg-slate-800"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
