"use client";

import React from "react";
import dynamic from "next/dynamic";
import { CheckCircle2, Shield, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";

// Dynamic import for 3D Building Cross Section with responsive fallback
const BuildingCrossSection3D = dynamic(
  () => import("./3d/BuildingCrossSection3D"),
  { ssr: false }
);

export default function About() {
  const highlights = [
    "Certified British Engineering Standards",
    "Comprehensive Domestic & Commercial Coverage",
    "Transparent Pricing & Upfront Quotations",
    "End-to-End Heating, Gas & Hydro Integration",
  ];

  return (
    <section id="about" className="py-16 sm:py-24 relative bg-brand-warmWhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Column: Text & Highlights */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-ivory border border-slate-200 text-brand-copper text-[11px] sm:text-xs font-mono tracking-wider uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              <span>WHO WE ARE</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deepNavy font-display leading-tight break-words-safe">
              COMFORT YOU CAN <span className="text-brand-copper">RELY ON.</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-brand-slate leading-relaxed font-normal">
              At <strong className="text-brand-deepNavy font-semibold">{siteConfig.legalName}</strong>, we provide dependable heating, gas and plumbing solutions designed around the needs of modern homes and businesses.
            </p>

            <p className="text-xs sm:text-sm lg:text-base text-brand-slate leading-relaxed">
              From high-efficiency heating systems and hot water installations to urgent plumbing repairs and commercial maintenance, our focus is simple: professional workmanship, reliable service and solutions engineered to deliver lasting comfort.
            </p>

            {/* Responsive Bullet Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs min-h-[52px]">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-copper flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-brand-deepNavy font-semibold leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Corporate Assurance Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-soft">
              <div className="flex items-start sm:items-center gap-3.5 sm:gap-4">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-copper flex-shrink-0">
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-deepNavy font-display uppercase tracking-wider">UNCOMPROMISING PRECISION</h4>
                  <p className="text-xs text-brand-slate mt-1 leading-relaxed">
                    Every installation is executed with technical accuracy, safety compliance, and long-term durability in mind.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Interactive Building Preview */}
          <div className="lg:col-span-6 mt-6 lg:mt-0">
            <BuildingCrossSection3D />
          </div>
        </div>
      </div>
    </section>
  );
}
