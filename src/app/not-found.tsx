import React from "react";
import Link from "next/link";
import { Wrench, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-50 flex items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-slate-200 shadow-2xl space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-electric/10 border border-electric/20 text-electric flex items-center justify-center mx-auto">
          <Wrench className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-electric font-semibold uppercase tracking-widest">404 — PAGE NOT FOUND</span>
          <h1 className="text-3xl font-extrabold text-slate-900 font-display">SYSTEM ROUTE UNRESOLVED</h1>
          <p className="text-xs sm:text-sm text-slate-600">
            The page or engineering asset you requested could not be located.
          </p>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-electric to-electric-dark shadow-lg shadow-electric/25"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO HOMEPAGE</span>
        </Link>
      </div>
    </main>
  );
}
