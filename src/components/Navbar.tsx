"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Menu, X, ChevronRight } from "lucide-react";
import { siteConfig } from "@/config/site";

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export default function Navbar({ onOpenQuoteModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle ESC key to close mobile menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Active section scroll detection
      const sections = ["home", "about", "services", "engineering-3d", "why-us", "process", "projects", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Services", href: "#services", id: "services" },
    { name: "3D Engineering", href: "#engineering-3d", id: "engineering-3d" },
    { name: "Why Us", href: "#why-us", id: "why-us" },
    { name: "Our Process", href: "#process", id: "process" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-slate-200/90 py-2.5 sm:py-3 shadow-sm"
          : "bg-brand-warmWhite/90 backdrop-blur-sm py-3 sm:py-4 border-b border-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Responsive Brand Logo */}
        <Link href="#home" className="flex items-center group py-1" aria-label="Comfort Heating and Plumbing Ltd Home">
          <div className="relative flex items-center">
            <Image
              src="/company_logo.png"
              alt="Comfort Heating and Plumbing Ltd Logo"
              width={220}
              height={65}
              className="w-auto h-9 sm:h-11 md:h-12 object-contain group-hover:opacity-90 transition-opacity"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Main Desktop Navigation">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`text-xs xl:text-sm font-medium transition-colors relative py-1 px-1 touch-target flex items-center ${
                  isActive
                    ? "text-brand-copper font-semibold"
                    : "text-brand-slate hover:text-brand-deepNavy"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-copper rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Desktop Right CTAs */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={siteConfig.phone.href}
            className="flex items-center gap-2 text-xs font-semibold text-brand-deepNavy hover:text-brand-copper transition-colors px-3.5 py-2.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 min-h-[44px]"
          >
            <Phone className="w-3.5 h-3.5 text-brand-copper" />
            <span className="hidden xl:inline">CALL US:</span>
            <span>{siteConfig.phone.display}</span>
          </a>

          <button
            onClick={onOpenQuoteModal}
            className="px-4 xl:px-5 py-2.5 rounded-lg text-xs font-bold tracking-wider uppercase text-white bg-brand-copper hover:bg-brand-copperDark shadow-sm transition-all min-h-[44px]"
          >
            GET A QUOTE
          </button>
        </div>

        {/* Mobile Actions & Menu Trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <a
            href={siteConfig.phone.href}
            className="p-2.5 rounded-lg bg-white border border-slate-200 text-brand-deepNavy flex items-center justify-center min-w-[44px] min-h-[44px]"
            aria-label="Call Our Team"
          >
            <Phone className="w-4.5 h-4.5 text-brand-copper" />
          </a>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2.5 rounded-lg bg-white border border-slate-200 text-brand-deepNavy flex items-center justify-center min-w-[44px] min-h-[44px] focus:outline-none"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Slide-Over Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] z-40 bg-brand-deepNavy/40 backdrop-blur-sm flex flex-col justify-start">
          <div className="w-full bg-white border-b border-slate-200 py-6 px-5 sm:px-8 shadow-2xl max-h-[85vh] overflow-y-auto">
            <nav className="flex flex-col space-y-2" aria-label="Mobile Navigation Drawer">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3.5 rounded-xl text-base font-semibold text-brand-deepNavy hover:bg-slate-50 border border-transparent hover:border-slate-200 min-h-[48px]"
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </a>
              ))}

              <div className="pt-5 mt-2 border-t border-slate-200 flex flex-col gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenQuoteModal();
                  }}
                  className="w-full py-3.5 rounded-xl text-center text-sm font-bold tracking-wider uppercase text-white bg-brand-copper shadow-md min-h-[48px] flex items-center justify-center"
                >
                  GET A FREE QUOTE
                </button>

                <a
                  href={siteConfig.whatsapp.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3.5 rounded-xl text-center text-sm font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 flex items-center justify-center gap-2 min-h-[48px]"
                >
                  CHAT ON WHATSAPP
                </a>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
