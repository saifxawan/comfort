"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Do you provide free quotes?",
      answer: "Yes, we provide free, no-obligation quotes for all heating, plumbing and gas work.",
    },
    {
      question: "What areas do you cover?",
      answer: "We cover London and surrounding local areas for both domestic and commercial clients.",
    },
    {
      question: "Do you work on commercial properties?",
      answer: "Yes, we work on both domestic homes and commercial properties.",
    },
    {
      question: "Can I contact you on WhatsApp?",
      answer: "Yes, you can message us on WhatsApp for quick advice, photos and fast quotations.",
    },
    {
      question: "How quickly can you attend?",
      answer: "We offer quick response times and fast attendance for urgent heating and plumbing issues.",
    },
    {
      question: "Are your services fully insured?",
      answer: "Yes, all our work is completed safely, professionally and fully insured for your peace of mind.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-24 relative bg-brand-warmWhite border-t border-slate-200 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-copper uppercase px-3.5 py-1.5 rounded-full bg-brand-ivory border border-slate-200 font-semibold shadow-xs">
            Frequently Asked Questions
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deepNavy mt-4 font-display break-words-safe">
            Common <span className="text-brand-copper">Questions</span>
          </h2>
          <p className="text-xs sm:text-base text-brand-slate mt-4">
            Quick answers to help you get started with your heating and plumbing needs.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="rounded-2xl bg-white border border-slate-200 shadow-soft overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 font-bold text-brand-deepNavy text-sm sm:text-base font-display hover:text-brand-copper transition-colors min-h-[52px]"
                  aria-expanded={isOpen}
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-brand-copper flex-shrink-0" />
                    <span>{faq.question}</span>
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? "rotate-180 text-brand-copper" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-brand-slate leading-relaxed border-t border-slate-100">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
