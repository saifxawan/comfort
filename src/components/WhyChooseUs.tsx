"use client";

import React from "react";
import { ShieldCheck, Clock, Award, Building2, HeartHandshake, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <Clock className="w-6 h-6 text-brand-copper" />,
      title: "Reliable Service",
    },
    {
      icon: <Award className="w-6 h-6 text-brand-copper" />,
      title: "Quality Workmanship",
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-copper" />,
      title: "Honest Pricing",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-copper" />,
      title: "Friendly Team",
    },
    {
      icon: <Building2 className="w-6 h-6 text-brand-copper" />,
      title: "Domestic & Commercial",
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-copper" />,
      title: "Fast Response",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 relative bg-brand-warmWhite border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-copper uppercase px-3.5 py-1.5 rounded-full bg-brand-ivory border border-slate-200 font-semibold shadow-xs">
            Why Choose Us
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deepNavy mt-4 font-display break-words-safe">
            Why Choose <span className="text-brand-copper">Comfort Heating & Plumbing</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-elevated transition-all duration-300 relative group overflow-hidden flex items-center gap-4"
            >
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 w-fit flex-shrink-0 shadow-xs">
                {pillar.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-brand-deepNavy font-display group-hover:text-brand-copper transition-colors">
                {pillar.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
