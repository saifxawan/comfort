"use client";

import React from "react";
import Image from "next/image";

export default function ProjectsGallery() {
  const projects = [
    {
      title: "Kensington Luxury Residence",
      category: "HYDRONIC UNDERFLOOR & HEATING",
      image: "/hero_uk_heating_interior.png",
      location: "Kensington, London",
      desc: "Complete building services overhaul featuring concealed thermostatic valves and hydronic underfloor heating.",
    },
    {
      title: "Mayfair Plant Room Commissioning",
      category: "BOILER & GAS ENGINEERING",
      image: "/modern_boiler_installation.png",
      location: "Mayfair, London",
      desc: "A-rated commercial gas safety testing, high-efficiency boiler manifold, and acoustic isolation.",
    },
    {
      title: "Surrey Residential Build",
      category: "UNDERFLOOR HEATING PIPING",
      image: "/underfloor_heating_installation.png",
      location: "Surrey, UK",
      desc: "Precision multi-zone underfloor heating pipe laying across 4,500 sq ft residential development.",
    },
    {
      title: "Chelsea Townhouse Wet Room",
      category: "BESPOKE ARCHITECTURAL PLUMBING",
      image: "/luxury_bathroom_plumbing.png",
      location: "Chelsea, London",
      desc: "Luxury linear strip drainage, concealed thermostatic brassware, and unvented cylinder installation.",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-24 relative bg-brand-warmWhite border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-copper uppercase px-3.5 py-1.5 rounded-full bg-brand-ivory border border-slate-200 font-semibold shadow-xs">
            PORTFOLIO OF EXCELLENCE
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deepNavy mt-4 font-display break-words-safe">
            RECENT ENGINEERING <span className="text-brand-copper">PROJECTS</span>
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-brand-slate mt-4">
            Examine our recently completed UK residential and commercial building services projects.
          </p>
        </div>

        {/* Responsive Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((proj, idx) => (
            <div
              key={idx}
              className="group relative rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 flex flex-col"
            >
              <div className="relative h-52 sm:h-72 w-full overflow-hidden bg-slate-100">
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 600px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deepNavy/70 via-transparent to-transparent" />
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded border border-slate-200 text-[10px] font-mono font-bold text-brand-copper uppercase tracking-wider max-w-[85%] truncate">
                  {proj.category}
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <div className="text-[11px] sm:text-xs font-mono text-slate-500 uppercase tracking-wider mb-1">{proj.location}</div>
                <h3 className="text-lg sm:text-xl font-bold text-brand-deepNavy font-display mb-2">{proj.title}</h3>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">{proj.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
