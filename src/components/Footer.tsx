"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageSquare, ShieldCheck } from "lucide-react";
import { siteConfig, primaryServices } from "@/config/site";

export default function Footer() {
  return (
    <footer className="bg-brand-deepNavy border-t border-slate-800 text-slate-300 text-xs pt-12 sm:pt-16 pb-[max(3rem,env(safe-area-inset-bottom))]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-10 sm:pb-12 border-b border-slate-800/80">
          
          {/* Column 1: Brand & Logo */}
          <div className="sm:col-span-2 space-y-4">
            <Link href="#home" className="inline-block py-1" aria-label="Comfort Heating and Plumbing Ltd Logo">
              <Image
                src="/company_logo.png"
                alt="Comfort Heating and Plumbing Ltd Logo"
                width={220}
                height={70}
                className="w-auto h-11 sm:h-14 object-contain filter drop-shadow-md"
              />
            </Link>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-md">
              Comfort Heating and Plumbing Ltd delivers premier British heating, gas and plumbing engineering. Built on technical accuracy, safety compliance, and enduring customer relationships across Greater London and Home Counties.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <span className="px-3 py-1.5 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-brand-copper flex items-center gap-1.5 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 flex-shrink-0" />
                <span>REGISTERED UK COMPANY</span>
              </span>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white font-display uppercase tracking-wider mb-3 sm:mb-4">
              NAVIGATION
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#home" className="hover:text-brand-copper transition-colors py-1 block">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-brand-copper transition-colors py-1 block">About Us</a>
              </li>
              <li>
                <a href="#services" className="hover:text-brand-copper transition-colors py-1 block">Services</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-brand-copper transition-colors py-1 block">Why Choose Us</a>
              </li>
              <li>
                <a href="#process" className="hover:text-brand-copper transition-colors py-1 block">Our Process</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-brand-copper transition-colors py-1 block">Recent Projects</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-brand-copper transition-colors py-1 block">Contact & Quote</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Primary Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white font-display uppercase tracking-wider mb-3 sm:mb-4">
              SERVICES
            </h4>
            <ul className="space-y-2.5">
              {primaryServices.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-brand-copper transition-colors py-1 block truncate">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Region */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-white font-display uppercase tracking-wider mb-3 sm:mb-4">
              CONTACT & REGION
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-copper flex-shrink-0" />
                <a href={siteConfig.phone.href} className="text-white hover:text-brand-copper font-semibold py-1">
                  {siteConfig.phone.display}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-copper flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="hover:text-brand-copper truncate py-1">
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <a href={siteConfig.whatsapp.url} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 py-1">
                  WhatsApp Direct
                </a>
              </li>
              <li className="flex items-start gap-2.5 pt-1">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" />
                <span>{siteConfig.address.display}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Copyright Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-[11px] text-center sm:text-left">
          <div>
            © 2026 Comfort Heating and Plumbing Ltd. All Rights Reserved.
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors py-1">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link href="/cookie-policy" className="hover:text-white transition-colors py-1">
              Cookie Policy
            </Link>
            <span>•</span>
            <span className="text-slate-500">Registered in England & Wales [CRN Placeholder]</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
