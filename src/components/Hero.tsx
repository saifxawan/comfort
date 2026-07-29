"use client";

import React from "react";
import Image from "next/image";
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

interface HeroProps {
  onOpenQuoteModal: () => void;
}

export default function Hero({ onOpenQuoteModal }: HeroProps) {
  return (
    <section id="home" className="relative flex items-center pt-20 sm:pt-32 pb-10 sm:pb-20 overflow-hidden bg-brand-warmWhite">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Headline & CTAs */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6 text-left">
            
            {/* Small Premium Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-md bg-brand-ivory border border-slate-200 text-brand-copper text-[11px] sm:text-xs font-mono tracking-wider uppercase font-semibold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-copper flex-shrink-0" />
              <span className="truncate">Comfort Heating & Plumbing Ltd</span>
            </div>

            {/* Main Editorial Headline with Fluid Typography */}
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deepNavy tracking-tight leading-[1.18] sm:leading-[1.15] font-display break-words-safe">
              Heating, Plumbing & Gas Services <span className="text-brand-copper">You Can Trust</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-xs sm:text-base lg:text-lg text-brand-slate leading-relaxed font-normal max-w-xl">
              Reliable heating, plumbing and gas services for homes and businesses. Quality workmanship, honest advice and friendly local service.
            </p>

            {/* Responsive CTA Buttons */}
            <div className="pt-1 sm:pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 sm:gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-brand-copper hover:bg-brand-copperDark shadow-elevated transition-all duration-300 flex items-center justify-center gap-2 group min-h-[48px]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="grid grid-cols-2 sm:flex items-center gap-2.5">
                <a
                  href={siteConfig.phone.href}
                  className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-deepNavy bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-soft transition-all duration-300 flex items-center justify-center gap-2 min-h-[48px]"
                >
                  <Phone className="w-4 h-4 text-brand-copper flex-shrink-0" />
                  <span>Call Now</span>
                </a>

                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-xs min-h-[48px]"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Responsive Verification Indicators (2-column on mobile) */}
            <div className="pt-4 sm:pt-6 border-t border-slate-200/80 grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-[11px] sm:text-xs text-brand-slate font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-copper flex-shrink-0" />
                <span>Reliable Service</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-copper flex-shrink-0" />
                <span>Home & Business</span>
              </div>
              <div className="flex items-center gap-1.5 col-span-2 sm:col-span-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-copper flex-shrink-0" />
                <span>Local UK Team</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Compact Image Frame on Mobile */}
          <div className="lg:col-span-6 relative mt-2 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-2 sm:p-3 shadow-elevated">
              <div className="relative h-[200px] sm:h-[360px] lg:h-[460px] w-full rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/hero_uk_heating_interior.png"
                  alt="Quality heating and plumbing installations"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deepNavy/40 via-transparent to-transparent" />

                <div className="absolute bottom-2.5 left-2.5 right-2.5 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-2.5 sm:p-4 rounded-lg border border-slate-200 shadow-md">
                  <div className="text-[10px] sm:text-xs font-mono font-bold text-brand-copper uppercase">QUALITY WORKMANSHIP</div>
                  <div className="text-[11px] sm:text-xs text-brand-deepNavy font-medium mt-0.5 leading-snug">
                    Heating, plumbing and gas services for local homes & businesses
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
