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
    <section id="home" className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden bg-brand-warmWhite">
      {/* Background Architectural Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* LEFT SIDE: Headline & CTAs */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-6 text-left">
            
            {/* Small Premium Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 rounded-md bg-brand-ivory border border-slate-200 text-brand-copper text-[11px] sm:text-xs font-mono tracking-wider uppercase font-semibold shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-brand-copper flex-shrink-0" />
              <span className="truncate">Comfort Heating & Plumbing Ltd</span>
            </div>

            {/* Main Editorial Headline with Fluid Typography */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-brand-deepNavy tracking-tight leading-[1.15] font-display break-words-safe">
              Heating, Plumbing & Gas Services <span className="text-brand-copper">You Can Trust</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base lg:text-lg text-brand-slate leading-relaxed font-normal max-w-xl">
              Reliable heating, plumbing and gas services for homes and businesses. Quality workmanship, honest advice and friendly local service.
            </p>

            {/* Responsive CTA Buttons (Stacks vertically on narrow mobile, flex row on sm screens) */}
            <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4">
              <button
                onClick={onOpenQuoteModal}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-brand-copper hover:bg-brand-copperDark shadow-elevated transition-all duration-300 flex items-center justify-center gap-2 group min-h-[48px]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <a
                href={siteConfig.phone.href}
                className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-lg text-xs sm:text-sm font-bold tracking-wider uppercase text-brand-deepNavy bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 shadow-soft transition-all duration-300 flex items-center justify-center gap-2.5 min-h-[48px]"
              >
                <Phone className="w-4 h-4 text-brand-copper flex-shrink-0" />
                <span>Call Now</span>
              </a>

              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 sm:px-6 py-3.5 sm:py-4 rounded-lg text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 hover:bg-emerald-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-xs min-h-[48px]"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700 flex-shrink-0" />
                <span>WhatsApp Us</span>
              </a>
            </div>

            {/* Responsive Verification Indicators */}
            <div className="pt-5 sm:pt-6 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-brand-slate font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-copper flex-shrink-0" />
                <span>Reliable Local Service</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-copper flex-shrink-0" />
                <span>Domestic & Commercial</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-copper flex-shrink-0" />
                <span>London & Local Area</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Responsive High-Quality Architectural Image Frame */}
          <div className="lg:col-span-6 relative mt-4 lg:mt-0">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 bg-white p-2.5 sm:p-3 shadow-elevated">
              <div className="relative h-[260px] sm:h-[400px] lg:h-[480px] w-full rounded-xl overflow-hidden bg-slate-100">
                <Image
                  src="/hero_uk_heating_interior.png"
                  alt="Quality heating and plumbing installations"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deepNavy/40 via-transparent to-transparent" />

                {/* Bottom Architectural Caption Overlay */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-white/95 backdrop-blur-md p-3 sm:p-4 rounded-lg border border-slate-200 shadow-md">
                  <div className="text-[10px] sm:text-xs font-mono font-bold text-brand-copper uppercase">QUALITY WORKMANSHIP</div>
                  <div className="text-[11px] sm:text-xs text-brand-deepNavy font-medium mt-0.5 leading-snug">
                    Heating, plumbing and gas installations for homes and businesses
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
