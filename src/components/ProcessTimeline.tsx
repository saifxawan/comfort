"use client";

import React from "react";
import { MessageSquare, PhoneCall, ClipboardCheck, FileText, Wrench, ThumbsUp } from "lucide-react";

export default function ProcessTimeline() {
  const steps = [
    {
      num: "01",
      title: "GET IN TOUCH",
      desc: "Contact our expert engineering team by phone, online quote form, or direct WhatsApp.",
      icon: <PhoneCall className="w-5 h-5 text-brand-copper" />,
    },
    {
      num: "02",
      title: "DISCUSS REQUIREMENTS",
      desc: "We review your heating, gas or plumbing requirements in detail to understand your project scope.",
      icon: <MessageSquare className="w-5 h-5 text-brand-copper" />,
    },
    {
      num: "03",
      title: "TECHNICAL ASSESSMENT",
      desc: "On-site diagnostic inspection or technical evaluation to determine the optimal solution.",
      icon: <ClipboardCheck className="w-5 h-5 text-brand-copper" />,
    },
    {
      num: "04",
      title: "CLEAR QUOTATION",
      desc: "Receive a transparent, fixed quotation with zero hidden fees or surprise charges.",
      icon: <FileText className="w-5 h-5 text-brand-copper" />,
    },
    {
      num: "05",
      title: "PROFESSIONAL SERVICE",
      desc: "Our qualified engineers carry out the works strictly to British safety standards.",
      icon: <Wrench className="w-5 h-5 text-brand-copper" />,
    },
    {
      num: "06",
      title: "CUSTOMER SATISFACTION",
      desc: "Final testing, system hand-over, safety documentation, and guaranteed aftercare support.",
      icon: <ThumbsUp className="w-5 h-5 text-brand-copper" />,
    },
  ];

  return (
    <section id="process" className="py-16 sm:py-24 relative bg-brand-warmWhite border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-copper uppercase px-3.5 py-1.5 rounded-full bg-brand-ivory border border-slate-200 font-semibold shadow-xs">
            TRANSPARENT WORKFLOW
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deepNavy mt-4 font-display break-words-safe">
            OUR <span className="text-brand-copper">ENGINEERING PROCESS</span>
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-brand-slate mt-4">
            A structured 6-step customer workflow ensuring absolute clarity, safety, and seamless project execution.
          </p>
        </div>

        {/* Process Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-soft hover:shadow-elevated transition-all duration-300 group flex flex-col justify-between"
            >
              {/* Step Number & Icon */}
              <div className="flex items-center justify-between mb-5 sm:mb-6">
                <span className="text-2xl sm:text-3xl font-extrabold font-mono text-brand-copper/50 group-hover:text-brand-copper transition-colors">
                  {step.num}
                </span>
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 group-hover:scale-105 transition-transform shadow-xs">
                  {step.icon}
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-bold text-brand-deepNavy font-display mb-2 group-hover:text-brand-copper transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-slate leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>

              <div className="mt-5 sm:mt-6 pt-4 border-t border-slate-100 flex items-center text-[10px] font-mono text-slate-400 uppercase tracking-wider font-semibold">
                <span>STEP {idx + 1} OF 6</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
