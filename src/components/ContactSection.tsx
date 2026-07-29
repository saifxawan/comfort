"use client";

import React from "react";
import { Phone, Mail, MessageSquare, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import QuoteForm from "./QuoteForm";

interface ContactSectionProps {
  initialService?: string;
}

export default function ContactSection({ initialService }: ContactSectionProps) {
  return (
    <section id="contact" className="py-16 sm:py-24 relative bg-brand-warmWhite border-t border-slate-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-5 sm:space-y-6">
            <div>
              <span className="text-xs font-mono tracking-widest text-brand-copper uppercase px-3.5 py-1.5 rounded-full bg-brand-ivory border border-slate-200 font-semibold shadow-xs">
                Contact Us
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-brand-deepNavy mt-4 font-display leading-tight break-words-safe">
                Need Help?
              </h2>
              <p className="text-xs sm:text-base text-brand-slate mt-3 leading-relaxed">
                Contact us today for a free quotation or friendly advice.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-3.5 sm:space-y-4">
              {/* Phone Link */}
              <a
                href={siteConfig.phone.href}
                className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-soft hover:shadow-elevated hover:border-brand-copper block group transition-all duration-300 min-h-[52px]"
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 border border-slate-200 text-brand-copper group-hover:scale-105 transition-transform flex-shrink-0">
                    <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Call Now</div>
                    <div className="text-sm sm:text-base font-bold text-brand-deepNavy font-display group-hover:text-brand-copper transition-colors truncate">
                      {siteConfig.phone.display}
                    </div>
                  </div>
                </div>
              </a>

              {/* Email Link */}
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-soft hover:shadow-elevated hover:border-brand-copper block group transition-all duration-300 min-h-[52px]"
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 border border-slate-200 text-brand-copper group-hover:scale-105 transition-transform flex-shrink-0">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Email Us</div>
                    <div className="text-xs sm:text-sm font-bold text-brand-deepNavy font-display group-hover:text-brand-copper transition-colors truncate">
                      {siteConfig.email}
                    </div>
                  </div>
                </div>
              </a>

              {/* WhatsApp Link */}
              <a
                href={siteConfig.whatsapp.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-soft hover:shadow-elevated hover:border-emerald-500 block group transition-all duration-300 min-h-[52px]"
              >
                <div className="flex items-center gap-3.5 sm:gap-4">
                  <div className="p-2.5 sm:p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-700 group-hover:scale-105 transition-transform flex-shrink-0">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">WhatsApp Us</div>
                    <div className="text-xs sm:text-sm font-bold text-emerald-800 font-display group-hover:text-emerald-700 transition-colors truncate">
                      {siteConfig.whatsapp.display}
                    </div>
                  </div>
                </div>
              </a>

              {/* Operating Hours */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Opening Hours</div>
                  <div className="text-xs text-brand-deepNavy mt-1 font-semibold">{siteConfig.openingHours.days}: {siteConfig.openingHours.hours}</div>
                  <div className="text-xs text-brand-copper font-semibold mt-0.5">{siteConfig.openingHours.emergency}</div>
                </div>
              </div>

              {/* Service Region */}
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex items-start gap-3.5 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-wider font-semibold">Area Covered</div>
                  <div className="text-xs text-brand-deepNavy mt-1 font-bold">{siteConfig.address.display}</div>
                  <div className="flex flex-wrap gap-1.5 mt-2.5">
                    {siteConfig.serviceAreas.map((area, i) => (
                      <span key={i} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200 font-semibold">
                        {area}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Quote Form */}
          <div className="lg:col-span-7 mt-6 lg:mt-0">
            <QuoteForm initialService={initialService} />
          </div>
        </div>
      </div>
    </section>
  );
}
