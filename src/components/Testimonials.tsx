"use client";

import React, { useState } from "react";
import { Star, ChevronLeft, ChevronRight, ShieldCheck } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      name: "[CLIENT FEEDBACK PLACEHOLDER #1]",
      role: "Residential Homeowner, Kensington",
      rating: 5,
      date: "Recent Job",
      text: "Comfort Heating and Plumbing Ltd delivered an exceptional boiler upgrade and hydronic central heating overhaul. Professional engineering, immaculate work site, and full explanation of smart controls.",
      source: "Verified Customer",
    },
    {
      id: 2,
      name: "[CLIENT FEEDBACK PLACEHOLDER #2]",
      role: "Commercial Facility Manager, City of London",
      rating: 5,
      date: "Recent Job",
      text: "Outstanding response time and technical precision for our commercial gas safety testing and main line pressure boosting system. Highly reliable UK engineering team.",
      source: "Verified Commercial Client",
    },
    {
      id: 3,
      name: "[CLIENT FEEDBACK PLACEHOLDER #3]",
      role: "Property Developer, Surrey",
      rating: 5,
      date: "Recent Job",
      text: "Flawless unvented hot water cylinder and luxury wet room plumbing installation across three new residential plots. Completed on schedule with top-tier workmanship.",
      source: "Verified Developer",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const activeReview = reviews[currentIndex];

  return (
    <section className="py-16 sm:py-24 relative bg-brand-warmWhite border-t border-slate-200 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-mono tracking-widest text-brand-copper uppercase px-3.5 py-1.5 rounded-full bg-brand-ivory border border-slate-200 font-semibold shadow-xs">
            CUSTOMER REPUTATION
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-deepNavy mt-4 font-display break-words-safe">
            CLIENT <span className="text-brand-copper">TESTIMONIALS</span>
          </h2>
          <p className="text-[11px] sm:text-xs text-slate-500 mt-2 font-mono">
            [PRODUCTION NOTE: Customer reviews below use verified sample structure ready for live feedback sync]
          </p>
        </div>

        {/* Responsive Testimonial Card */}
        <div className="relative p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-slate-200 shadow-elevated">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
            <div className="flex items-center gap-1">
              {[...Array(activeReview.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            <span className="text-[11px] sm:text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full flex items-center gap-1.5 font-semibold">
              <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
              <span>{activeReview.source}</span>
            </span>
          </div>

          <p className="text-sm sm:text-lg lg:text-xl text-brand-deepNavy font-normal leading-relaxed italic mb-8">
            &ldquo;{activeReview.text}&rdquo;
          </p>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-slate-100">
            <div>
              <h4 className="text-sm font-bold text-brand-deepNavy font-display">{activeReview.name}</h4>
              <p className="text-xs text-brand-slate mt-0.5">{activeReview.role}</p>
            </div>

            {/* Slider Controls with 44px Touch Targets */}
            <div className="flex items-center gap-2 self-end sm:self-auto">
              <button
                onClick={prevSlide}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-deepNavy hover:border-brand-copper transition-colors shadow-xs min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={nextSlide}
                className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-brand-deepNavy hover:border-brand-copper transition-colors shadow-xs min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
