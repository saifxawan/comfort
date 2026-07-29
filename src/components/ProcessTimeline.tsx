"use client";

import React from "react";
import { MessageSquare, PhoneCall, ClipboardCheck, FileText, Wrench, ThumbsUp } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "Contact Us",
      desc: "Call, WhatsApp or complete the quote form.",
      icon: <PhoneCall className="w-5 h-5 text-brand-copper" />,
    },
    {
      num: "02",
      title: "Free Quote",
      desc: "We'll discuss your requirements and provide a quotation.",
      icon: <FileText className="w-5 h-5 text-brand-copper" />,
    },
    {
      num: "03",
      title: "We Complete the Work",
      desc: "Our team carries out the work professionally.",
      icon: <Wrench className="w-5 h-5 text-brand-copper" />,
    },
    {
      num: "04",
      title: "You're Happy",
      desc: "We make sure everything is completed properly.",
      icon: <ThumbsUp className="w-5 h-5 text-brand-copper" />,
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 relative bg-brand-warmWhite border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-copper uppercase px-3.5 py-1.5 rounded-full bg-brand-ivory border border-slate-200 font-semibold shadow-xs">
            How We Work
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deepNavy mt-4 font-display break-words-safe">
            Our <span className="text-brand-copper">Simple Process</span>
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-brand-slate mt-4">
            Four easy steps to get your heating, plumbing or gas work completed.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-elevated transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <span className="text-xl sm:text-2xl font-extrabold font-mono text-brand-copper/50 group-hover:text-brand-copper transition-colors">
                  {step.num}
                </span>
                <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 group-hover:scale-105 transition-transform shadow-xs">
                  {step.icon}
                </div>
              </div>

              <div>
                <h3 className="text-base font-bold text-brand-deepNavy font-display mb-1.5 group-hover:text-brand-copper transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs text-brand-slate leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                <span>STEP {idx + 1} OF 4</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
