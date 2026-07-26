"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import About from "@/components/About";
import Services from "@/components/Services";
import Engineering3DSection from "@/components/Engineering3DSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import ProjectsGallery from "@/components/ProjectsGallery";
import Testimonials from "@/components/Testimonials";
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
      {/* 1. Sticky Corporate Navigation Bar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 2. Full-Width Editorial Hero */}
      <Hero onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* 3. Corporate Trust Bar */}
      <TrustBar />

      {/* 4. About Us Section */}
      <About />

      {/* 5. Editorial Services Section */}
      <Services onOpenQuoteModal={(name) => handleOpenQuoteModal(name)} />

      {/* 6. Interactive 3D Building Services Cutaway Experience */}
      <Engineering3DSection />

      {/* 7. Why Choose Us (Precision. Reliability. Professionalism.) */}
      <WhyChooseUs />

      {/* 8. Our Process (6-Step Workflow Timeline) */}
      <ProcessTimeline />

      {/* 9. Portfolio of Recent Projects */}
      <ProjectsGallery />

      {/* 10. Customer Testimonials */}
      <Testimonials />

      {/* 11. Contact & Fast Quote Section */}
      <ContactSection initialService={modalService} />

      {/* 12. Corporate Deep Navy Footer */}
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
