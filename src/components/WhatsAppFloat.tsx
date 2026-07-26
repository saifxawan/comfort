"use client";

import React from "react";
import { MessageSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

export default function WhatsAppFloat() {
  return (
    <div className="fixed bottom-[max(1.25rem,env(safe-area-inset-bottom))] right-4 sm:right-6 z-40">
      <a
        href={siteConfig.whatsapp.url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-3.5 sm:px-4.5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2.5 group min-h-[44px]"
        aria-label="Chat with Comfort Heating & Plumbing Ltd on WhatsApp"
      >
        <MessageSquare className="w-5 h-5 fill-white text-white flex-shrink-0" />
        <span className="group-hover:hidden">Chat with us</span>
        <span className="hidden group-hover:inline">Chat with Comfort Heating & Plumbing</span>
      </a>
    </div>
  );
}
