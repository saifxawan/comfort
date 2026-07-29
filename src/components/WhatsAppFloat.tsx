"use client";

import React from "react";
import { MessageSquare, Phone } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 sm:right-6 z-40 flex items-center gap-2.5">
      {/* Quick Phone Call Button (Mobile & Tablet) */}
      <a
        href={siteConfig.phone.href}
        className="p-3 sm:px-4 sm:py-3 rounded-full bg-brand-deepNavy hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 border border-slate-700 min-h-[48px] min-w-[48px]"
        aria-label="Call Comfort Heating & Plumbing Ltd"
      >
        <Phone className="w-4 h-4 text-brand-copper flex-shrink-0" />
        <span className="hidden sm:inline">Call Now</span>
      </a>

      {/* Quick WhatsApp Button */}
      <a
        href={siteConfig.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 min-h-[48px]"
        aria-label="Chat with Comfort Heating & Plumbing Ltd on WhatsApp"
      >
        <MessageSquare className="w-4 h-4 fill-white text-white flex-shrink-0" />
        <span>WhatsApp</span>
      </a>
    </div>
  );
}
