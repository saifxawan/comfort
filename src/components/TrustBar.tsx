"use client";

import React from "react";
import { ShieldCheck, Clock, Building2, Flame, MapPin } from "lucide-react";

export default function TrustBar() {
  const trustIndicators = [
    {
      icon: <Flame className="w-4 h-4 sm:w-5 sm:h-5 text-brand-copper" />,
      title: "Heating",
      subtitle: "Boilers & Radiators",
    },
    {
      icon: <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-brand-copper" />,
      title: "Plumbing",
      subtitle: "Repairs & Installations",
    },
    {
      icon: <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-brand-copper" />,
      title: "Gas",
      subtitle: "Safe Gas Services",
    },
    {
      icon: <Building2 className="w-4 h-4 sm:w-5 sm:h-5 text-brand-copper" />,
      title: "Domestic & Commercial",
      subtitle: "Homes & Businesses",
    },
    {
      icon: <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-brand-copper" />,
      title: "Reliable & Professional",
      subtitle: "Friendly Local Service",
    },
  ];

  return (
    <section className="relative z-30 bg-white border-y border-slate-200/90 py-4 sm:py-8 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2.5 sm:gap-4">
          {trustIndicators.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-2.5 sm:gap-3.5 p-2.5 sm:p-4 rounded-xl bg-brand-warmWhite border border-slate-200/90 hover:border-brand-copper/40 transition-all duration-300 group shadow-xs min-h-[50px] ${
                index === 4 ? "col-span-2 md:col-span-1" : ""
              }`}
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-white border border-slate-200 group-hover:scale-105 transition-transform flex-shrink-0">
                {item.icon}
              </div>
              <div className="min-w-0">
                <h4 className="text-[11px] sm:text-xs font-bold text-brand-deepNavy tracking-wide uppercase font-display truncate">
                  {item.title}
                </h4>
                <p className="text-[10px] sm:text-[11px] text-brand-slate mt-0.5 font-medium truncate">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
