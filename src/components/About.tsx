"use client";

import React from "react";
import Image from "next/image";
import { CheckCircle2, Shield, Sparkles } from "lucide-react";

export default function About() {
  const highlights = [
    "Domestic & Commercial Services",
    "Quality Local Workmanship",
    "Honest Upfront Pricing",
    "Reliable Heating & Plumbing",
  ];

  return (
    <section id="about" className="py-10 sm:py-24 relative bg-brand-warmWhite overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* Left Column: Text & Highlights */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-brand-ivory border border-slate-200 text-brand-copper text-[11px] sm:text-xs font-mono tracking-wider uppercase font-semibold">
              <Sparkles className="w-3.5 h-3.5 flex-shrink-0" />
              <span>About Us</span>
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deepNavy font-display leading-tight break-words-safe">
              Reliable Local <span className="text-brand-copper">Heating & Plumbing</span>
            </h2>

            <p className="text-xs sm:text-base lg:text-lg text-brand-slate leading-relaxed font-normal">
              We help homeowners and businesses with heating, plumbing and gas services across the local area. Whether it&apos;s a new boiler, a leaking pipe or a complete heating installation, we&apos;re here to get the job done properly.
            </p>

            {/* Responsive Bullet Cards Grid (2-cols on mobile) */}
            <div className="grid grid-cols-2 gap-2.5 sm:gap-4 pt-1 sm:pt-2">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2 sm:gap-3 p-3 sm:p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs min-h-[48px]">
                  <CheckCircle2 className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-brand-copper flex-shrink-0 mt-0.5" />
                  <span className="text-[11px] sm:text-sm text-brand-deepNavy font-semibold leading-snug">{item}</span>
                </div>
              ))}
            </div>

            {/* Assurance Card */}
            <div className="p-4 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-soft">
              <div className="flex items-start sm:items-center gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-copper flex-shrink-0">
                  <Shield className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-brand-deepNavy font-display uppercase tracking-wider">Quality Guaranteed</h4>
                  <p className="text-[11px] sm:text-xs text-brand-slate mt-0.5 sm:mt-1 leading-relaxed">
                    Every job is carried out safely, cleanly and professionally to keep your home warm.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High Quality Image Frame */}
          <div className="lg:col-span-6 mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 sm:p-3 shadow-elevated">
              <div className="relative h-[200px] sm:h-[380px] lg:h-[440px] w-full rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/modern_boiler_installation.png"
                  alt="Quality Boiler Installation"
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deepNavy/40 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-4 rounded-lg border border-slate-200 shadow-md">
                  <div className="text-[10px] sm:text-xs font-mono font-bold text-brand-copper uppercase">LOCAL EXPERTISE</div>
                  <div className="text-[11px] sm:text-xs text-brand-deepNavy font-medium mt-0.5 leading-snug">
                    Professional boiler installations, heating repairs and plumbing for your peace of mind
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
