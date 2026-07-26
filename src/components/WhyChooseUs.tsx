"use client";

import React from "react";
import { ShieldCheck, Clock, Award, Building2, HeartHandshake, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const pillars = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-copper" />,
      title: "Professional Approach",
      desc: "Every heating, gas and plumbing project is handled with precision care, rigorous planning, and transparent standards.",
    },
    {
      icon: <Clock className="w-6 h-6 text-brand-copper" />,
      title: "Reliable Service",
      desc: "Clear communication, punctual arrival times, and dependable engineering execution from initial call to final sign-off.",
    },
    {
      icon: <Award className="w-6 h-6 text-brand-copper" />,
      title: "Quality Workmanship",
      desc: "High-specification materials, certified installation techniques, and solutions built for long-term endurance.",
    },
    {
      icon: <Building2 className="w-6 h-6 text-brand-copper" />,
      title: "Domestic & Commercial",
      desc: "Full operational capability handling luxury residential homes, multi-unit developments, and commercial facilities.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6 text-brand-copper" />,
      title: "Customer First",
      desc: "We prioritize listening to your building requirements before recommending tailored, cost-effective engineering solutions.",
    },
    {
      icon: <MapPin className="w-6 h-6 text-brand-copper" />,
      title: "Local UK Service",
      desc: "Deep knowledge of British heating networks, UK building regulations, and water pressure dynamics across London and Home Counties.",
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 relative bg-brand-warmWhite border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-copper uppercase px-3.5 py-1.5 rounded-full bg-brand-ivory border border-slate-200 font-semibold shadow-xs">
            OUR COMMITMENT TO EXCELLENCE
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deepNavy mt-4 font-display break-words-safe">
            PRECISION. RELIABILITY. <span className="text-brand-copper">PROFESSIONALISM.</span>
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-brand-slate mt-4">
            Built on a foundation of British engineering integrity, technical mastery, and long-term customer trust.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-elevated transition-all duration-300 relative group overflow-hidden"
            >
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 w-fit mb-5 sm:mb-6 shadow-xs">
                {pillar.icon}
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-brand-deepNavy font-display mb-2.5 sm:mb-3 group-hover:text-brand-copper transition-colors">
                {pillar.title}
              </h3>

              <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
