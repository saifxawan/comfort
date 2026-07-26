"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, ShieldCheck, Upload, Lock } from "lucide-react";
import Link from "next/link";

interface QuoteFormProps {
  initialService?: string;
  onSuccess?: () => void;
}

export default function QuoteForm({ initialService = "", onSuccess }: QuoteFormProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    postcode: "",
    serviceRequired: initialService || "Heating & Central Heating",
    propertyType: "Domestic",
    preferredDate: "",
    message: "",
    honeypot: "", // Spam prevention field
    consent: false,
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    // Honeypot bot protection
    if (formData.honeypot) {
      setStatus("success");
      return;
    }

    if (!formData.consent) {
      setStatus("error");
      setErrorMessage("Please accept the privacy consent to submit your request.");
      return;
    }

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        if (onSuccess) onSuccess();
      } else {
        setStatus("error");
        setErrorMessage(data.message || "Failed to submit quote request. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("Network connection error. Please call our team directly.");
    }
  };

  return (
    <div className="w-full rounded-2xl sm:rounded-3xl bg-white p-5 sm:p-8 lg:p-10 border border-slate-200 shadow-elevated relative overflow-hidden">
      
      {/* Header */}
      <div className="mb-6 sm:mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-brand-copper font-semibold uppercase tracking-widest mb-2">
          <ShieldCheck className="w-4 h-4 text-brand-copper flex-shrink-0" />
          <span>FREE NO-OBLIGATION ESTIMATE</span>
        </div>
        <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-brand-deepNavy font-display">
          REQUEST A <span className="text-brand-copper">FAST QUOTE</span>
        </h3>
        <p className="text-xs sm:text-sm text-brand-slate mt-1.5">
          Complete the form below. Our engineering team will review your specifications and respond promptly.
        </p>
      </div>

      {status === "success" ? (
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4 animate-fadeIn">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <h4 className="text-lg sm:text-xl font-bold text-brand-deepNavy font-display">QUOTE REQUEST RECEIVED</h4>
          <p className="text-xs sm:text-sm text-slate-700 max-w-md mx-auto leading-relaxed">
            Thank you for contacting Comfort Heating and Plumbing Ltd. A member of our team will call or email you shortly.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-700 shadow-md min-h-[44px]"
          >
            Submit Another Enquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
          {/* Honeypot */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Full Name */}
            <div>
              <label htmlFor="fullName" className="block text-[11px] sm:text-xs font-semibold text-brand-slate uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                required
                value={formData.fullName}
                onChange={handleChange}
                placeholder="e.g. David Miller"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-brand-deepNavy placeholder-slate-400 text-base sm:text-sm focus:border-brand-copper focus:ring-1 focus:ring-brand-copper focus:outline-none min-h-[48px]"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phone" className="block text-[11px] sm:text-xs font-semibold text-brand-slate uppercase tracking-wider mb-1.5">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                placeholder="e.g. 07700 900000"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-brand-deepNavy placeholder-slate-400 text-base sm:text-sm focus:border-brand-copper focus:ring-1 focus:ring-brand-copper focus:outline-none min-h-[48px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Email Address */}
            <div>
              <label htmlFor="email" className="block text-[11px] sm:text-xs font-semibold text-brand-slate uppercase tracking-wider mb-1.5">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="e.g. david@example.co.uk"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-brand-deepNavy placeholder-slate-400 text-base sm:text-sm focus:border-brand-copper focus:ring-1 focus:ring-brand-copper focus:outline-none min-h-[48px]"
              />
            </div>

            {/* UK Postcode */}
            <div>
              <label htmlFor="postcode" className="block text-[11px] sm:text-xs font-semibold text-brand-slate uppercase tracking-wider mb-1.5">
                UK Postcode *
              </label>
              <input
                type="text"
                id="postcode"
                name="postcode"
                required
                value={formData.postcode}
                onChange={handleChange}
                placeholder="e.g. SW1A 1AA"
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-brand-deepNavy placeholder-slate-400 text-base sm:text-sm focus:border-brand-copper focus:ring-1 focus:ring-brand-copper focus:outline-none uppercase min-h-[48px]"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Service Required */}
            <div>
              <label htmlFor="serviceRequired" className="block text-[11px] sm:text-xs font-semibold text-brand-slate uppercase tracking-wider mb-1.5">
                Service Required *
              </label>
              <select
                id="serviceRequired"
                name="serviceRequired"
                value={formData.serviceRequired}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-brand-deepNavy text-base sm:text-sm focus:border-brand-copper focus:ring-1 focus:ring-brand-copper focus:outline-none min-h-[48px]"
              >
                <option value="Heating & Central Heating">Heating & Central Heating</option>
                <option value="Boiler Replacement / Upgrade">Boiler Replacement / Upgrade</option>
                <option value="Gas Services & Safety">Gas Services & Safety</option>
                <option value="Plumbing Installation / Repair">Plumbing Installation / Repair</option>
                <option value="Hot Water Systems">Hot Water Systems</option>
                <option value="Underfloor Heating">Underfloor Heating</option>
                <option value="Bathroom Plumbing">Bathroom Plumbing</option>
                <option value="Kitchen & Utility Plumbing">Kitchen & Utility Plumbing</option>
                <option value="Leak Detection & Repair">Leak Detection & Repair</option>
                <option value="Other Service">Other Custom Enquiry</option>
              </select>
            </div>

            {/* Property Category */}
            <div>
              <label htmlFor="propertyType" className="block text-[11px] sm:text-xs font-semibold text-brand-slate uppercase tracking-wider mb-1.5">
                Property Category *
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-brand-deepNavy text-base sm:text-sm focus:border-brand-copper focus:ring-1 focus:ring-brand-copper focus:outline-none min-h-[48px]"
              >
                <option value="Domestic">Domestic Residential</option>
                <option value="Commercial">Commercial / Office</option>
                <option value="Landlord / Letting">Landlord / Letting Property</option>
              </select>
            </div>
          </div>

          {/* Preferred Date */}
          <div>
            <label htmlFor="preferredDate" className="block text-[11px] sm:text-xs font-semibold text-brand-slate uppercase tracking-wider mb-1.5">
              Preferred Date (Optional)
            </label>
            <input
              type="date"
              id="preferredDate"
              name="preferredDate"
              value={formData.preferredDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-brand-deepNavy text-base sm:text-sm focus:border-brand-copper focus:ring-1 focus:ring-brand-copper focus:outline-none min-h-[48px]"
            />
          </div>

          {/* Job Specifications */}
          <div>
            <label htmlFor="message" className="block text-[11px] sm:text-xs font-semibold text-brand-slate uppercase tracking-wider mb-1.5">
              Job Specifications & Details
            </label>
            <textarea
              id="message"
              name="message"
              rows={3}
              value={formData.message}
              onChange={handleChange}
              placeholder="Describe your heating, gas, or plumbing requirements..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-300 text-brand-deepNavy placeholder-slate-400 text-base sm:text-sm focus:border-brand-copper focus:ring-1 focus:ring-brand-copper focus:outline-none"
            />
          </div>

          {/* Upload Placeholder Bar */}
          <div className="p-3 rounded-xl bg-slate-50 border border-dashed border-slate-300 flex items-center justify-between text-xs text-brand-slate">
            <span className="flex items-center gap-2">
              <Upload className="w-4 h-4 text-brand-copper flex-shrink-0" />
              <span>Attach Photos / Plans (Optional)</span>
            </span>
            <span className="text-[10px] text-slate-400 font-mono">Max 10MB</span>
          </div>

          {/* Error Message */}
          {status === "error" && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Consent Checkbox */}
          <div className="flex items-start gap-3 text-xs text-brand-slate">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-0.5 rounded border-slate-300 text-brand-copper focus:ring-brand-copper w-4 h-4 flex-shrink-0"
            />
            <label htmlFor="consent" className="leading-snug">
              Your information is used strictly to respond to your enquiry. By submitting, you agree to our{" "}
              <Link href="/privacy-policy" className="text-brand-copper font-semibold underline hover:text-brand-deepNavy">
                Privacy Policy
              </Link>.
            </label>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="w-full py-4 rounded-xl text-xs sm:text-sm font-bold tracking-wider uppercase text-white bg-brand-copper hover:bg-brand-copperDark shadow-lg transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-50 min-h-[48px]"
          >
            {status === "submitting" ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                <Send className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
                <span>REQUEST A QUOTE</span>
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-1.5 text-[10px] sm:text-[11px] text-slate-400 font-mono pt-1">
            <Lock className="w-3 h-3 text-slate-400 flex-shrink-0" />
            <span>256-BIT ENCRYPTED & SECURE SPAM PROTECTION</span>
          </div>
        </form>
      )}
    </div>
  );
}
