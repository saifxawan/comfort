"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { primaryServices } from "@/config/site";
import { ArrowRight, X, CheckCircle2 } from "lucide-react";

interface ServicesProps {
  onOpenQuoteModal: (serviceName?: string) => void;
}

export default function Services({ onOpenQuoteModal }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<(typeof primaryServices)[0] | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedService]);

  const getServiceImage = (id: string) => {
    switch (id) {
      case "heating":
        return "/hero_uk_heating_interior.png";
      case "gas":
      case "boiler":
        return "/modern_boiler_installation.png";
      case "underfloor-heating":
        return "/underfloor_heating_installation.png";
      case "bathroom":
        return "/luxury_bathroom_plumbing.png";
      default:
        return "/hero_uk_heating_interior.png";
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 relative bg-brand-warmWhite border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs font-mono tracking-widest text-brand-copper uppercase px-3.5 py-1.5 rounded-full bg-brand-ivory border border-slate-200 font-semibold shadow-xs">
            What We Do
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-brand-deepNavy mt-4 font-display break-words-safe">
            Heating, Plumbing & <span className="text-brand-copper">Gas Services</span>
          </h2>
          <p className="text-xs sm:text-base lg:text-lg text-brand-slate mt-4">
            Reliable heating, plumbing and gas solutions for homes and businesses across the local area.
          </p>
        </div>

        {/* Responsive Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {primaryServices.map((service) => (
            <div
              key={service.id}
              onClick={() => setSelectedService(service)}
              className="group relative rounded-2xl bg-white border border-slate-200 overflow-hidden shadow-soft hover:shadow-elevated transition-all duration-300 cursor-pointer flex flex-col justify-between"
            >
              {/* Top Image Frame */}
              <div className="relative h-44 sm:h-52 w-full overflow-hidden bg-slate-100">
                <Image
                  src={getServiceImage(service.id)}
                  alt={service.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 300px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-deepNavy/60 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-brand-deepNavy text-[10px] font-mono font-bold px-2.5 py-1 rounded border border-slate-200 uppercase tracking-widest">
                  Professional
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-brand-deepNavy font-display group-hover:text-brand-copper transition-colors mb-2">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-brand-copper group-hover:text-brand-copperDark min-h-[44px]">
                  <span>Learn More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Detail Modal Dialog */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-deepNavy/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-2xl my-8 rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-elevated overflow-hidden max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 sm:top-5 sm:right-5 p-2.5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="mb-4 pr-8">
              <span className="text-xs font-mono text-brand-copper font-bold uppercase tracking-widest">Service Overview</span>
              <h3 className="text-xl sm:text-2xl font-bold text-brand-deepNavy font-display mt-1">{selectedService.title}</h3>
            </div>

            <p className="text-xs sm:text-sm text-brand-slate leading-relaxed mb-6">
              {selectedService.fullDesc}
            </p>

            <div className="space-y-2 mb-6 sm:mb-8">
              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">Key Features:</h4>
              {selectedService.features.map((feature, i) => (
                <div key={i} className="flex items-center gap-2.5 p-2.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-brand-deepNavy font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-brand-copper flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onOpenQuoteModal(serviceName);
                }}
                className="w-full sm:w-auto px-6 py-3.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-brand-copper hover:bg-brand-copperDark shadow-md flex items-center justify-center gap-2 min-h-[48px]"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto px-5 py-3.5 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 border border-slate-200 hover:text-slate-900 min-h-[48px]"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
