"use client";

import React from "react";
import { ShieldCheck, Clock, Building2, Flame, MapPin } from "lucide-react";

export default function TrustBar() {
  const trustIndicators = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-brand-copper" />,
      title: "Professional Workmanship",
      subtitle: "Highest UK Standards",
    },
    {
      icon: <Clock className="w-5 h-5 text-brand-copper" />,
      title: "Reliable Service",
      subtitle: "Punctual & Transparent",
    },
    {
      icon: <Building2 className="w-5 h-5 text-brand-copper" />,
      title: "Domestic & Commercial",
      subtitle: "Homes & Enterprises",
    },
    {
      icon: <Flame className="w-5 h-5 text-brand-copper" />,
      title: "Gas & Heating Expertise",
      subtitle: "Qualified Specialists",
    },
    {
      icon: <MapPin className="w-5 h-5 text-brand-copper" />,
      title: "Local UK Service",
      subtitle: "Greater London & Home Counties",
    },
  ];

  return (
    <section className="relative z-30 bg-white border-y border-slate-200/90 py-6 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {trustIndicators.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3.5 p-3.5 sm:p-4 rounded-xl bg-brand-warmWhite border border-slate-200/90 hover:border-brand-copper/40 transition-all duration-300 group shadow-xs min-h-[56px]"
            >
              <div className="p-2.5 rounded-lg bg-white border border-slate-200 group-hover:scale-105 transition-transform flex-shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <h4 className="text-xs font-bold text-brand-deepNavy tracking-wide uppercase font-display truncate">
                  {item.title}
                </h4>
                <p className="text-[11px] text-brand-slate mt-0.5 font-medium truncate">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
