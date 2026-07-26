"use client";

import React from "react";
import BuildingCrossSection3D from "./3d/BuildingCrossSection3D";

export default function Engineering3DSection() {
  return (
    <section id="engineering-3d" className="py-16 sm:py-24 relative bg-brand-warmWhite border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-copper uppercase px-3.5 py-1.5 rounded-full bg-brand-ivory border border-slate-200 font-semibold shadow-xs">
            3D ARCHITECTURAL VISUALISATION
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deepNavy mt-4 font-display break-words-safe">
            THE ENGINEERING BEHIND <span className="text-brand-copper">YOUR COMFORT</span>
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-brand-slate mt-4">
            Explore our interactive building cutaway below to see how our engineered heating, hot water, and plumbing systems integrate seamlessly across modern UK homes and commercial properties.
          </p>
        </div>

        {/* 3D Cutaway Component */}
        <BuildingCrossSection3D />
      </div>
    </section>
  );
}
