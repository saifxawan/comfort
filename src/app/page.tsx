"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProjectsGallery from "@/components/ProjectsGallery";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import QuoteForm from "@/components/QuoteForm";
import { X } from "lucide-react";

export default function Home() {
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [modalService, setModalService] = useState("");

  const handleOpenQuoteModal = (serviceName?: string) => {
    if (serviceName) setModalService(serviceName);
    setQuoteModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-brand-warmWhite text-brand-deepNavy selection:bg-brand-copper selection:text-white">
      {/* 1. Sticky Navigation Bar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 2. Hero Section */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 3. Trust Bar */}
      <TrustBar />

      {/* 4. About Us Section */}
      <About />

      {/* 5. Services Section */}
      <Services onOpenQuoteModal={(name) => handleOpenQuoteModal(name)} />

      {/* 6. Why Choose Us */}
      <WhyChooseUs />

      {/* 8. Our Process */}
      <ProcessTimeline />

      {/* 9. Portfolio of Recent Projects */}
      <ProjectsGallery />

      {/* 10. Customer Testimonials */}
      <Testimonials />

      {/* 11. Frequently Asked Questions */}
      <FAQ />

      {/* 12. Contact & Quote Section */}
      <ContactSection initialService={modalService} />

      {/* 13. Footer */}
      <Footer />

      {/* Global Quote Request Modal Overlay */}
      {quoteModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-brand-deepNavy/70 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-2xl my-8">
            <button
              onClick={() => setQuoteModalOpen(false)}
              className="absolute -top-4 -right-4 z-20 p-2.5 rounded-full bg-white border border-slate-200 text-slate-700 hover:text-slate-900 shadow-xl"
              aria-label="Close quote modal"
            >
              <X className="w-5 h-5" />
            </button>
            <QuoteForm
              initialService={modalService}
              onSuccess={() => {
                setTimeout(() => setQuoteModalOpen(false), 3000);
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
}
