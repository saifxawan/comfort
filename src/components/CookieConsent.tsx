"use client";

import React, { useState, useEffect } from "react";
import { Cookie, Shield, X, Check } from "lucide-react";
import Link from "next/link";

interface CookieSettings {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [settings, setSettings] = useState<CookieSettings>({
    necessary: true,
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const saved = localStorage.getItem("comfort_cookie_consent");
    if (!saved) {
      setShowBanner(true);
    }
  }, []);

  const acceptAll = () => {
    const allOn: CookieSettings = { necessary: true, analytics: true, marketing: true };
    localStorage.setItem("comfort_cookie_consent", JSON.stringify(allOn));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const rejectNonEssential = () => {
    const onlyNecessary: CookieSettings = { necessary: true, analytics: false, marketing: false };
    localStorage.setItem("comfort_cookie_consent", JSON.stringify(onlyNecessary));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const saveCustom = () => {
    localStorage.setItem("comfort_cookie_consent", JSON.stringify(settings));
    setShowBanner(false);
    setShowPreferences(false);
  };

  if (!showBanner) return null;

  return (
    <>
      {/* Bottom Sticky Cookie Banner with Safe Area Inset Support */}
      <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6 pb-[max(1rem,env(safe-area-inset-bottom))] bg-white/95 backdrop-blur-2xl border-t border-slate-200 shadow-elevated animate-fadeIn">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-start gap-3 text-left">
            <div className="p-2 sm:p-2.5 rounded-xl bg-slate-50 border border-slate-200 text-brand-copper flex-shrink-0 mt-0.5 sm:mt-0">
              <Cookie className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-brand-deepNavy font-display">Cookie & Privacy Settings</h4>
              <p className="text-[11px] sm:text-xs text-brand-slate mt-0.5 max-w-2xl leading-relaxed">
                We use cookies to help our website work properly and improve your browsing experience. Read our{" "}
                <Link href="/privacy-policy" className="text-brand-copper font-semibold underline hover:text-brand-deepNavy">
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link href="/cookie-policy" className="text-brand-copper font-semibold underline hover:text-brand-deepNavy">
                  Cookie Policy
                </Link>.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            <button
              onClick={() => setShowPreferences(true)}
              className="px-3.5 py-2.5 rounded-lg text-xs font-semibold text-brand-slate bg-slate-100 border border-slate-200 hover:text-brand-deepNavy transition-colors flex-1 md:flex-initial text-center min-h-[44px]"
            >
              Preferences
            </button>
            <button
              onClick={rejectNonEssential}
              className="px-3.5 py-2.5 rounded-lg text-xs font-semibold text-brand-slate bg-slate-100 border border-slate-200 hover:text-brand-deepNavy transition-colors flex-1 md:flex-initial text-center min-h-[44px]"
            >
              Reject Optional
            </button>
            <button
              onClick={acceptAll}
              className="px-4 py-2.5 rounded-lg text-xs font-bold uppercase tracking-wider text-white bg-brand-copper hover:bg-brand-copperDark shadow-sm flex-1 md:flex-initial text-center min-h-[44px]"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>

      {/* Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-deepNavy/60 backdrop-blur-md animate-fadeIn overflow-y-auto">
          <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 p-6 sm:p-8 shadow-elevated max-h-[90vh] overflow-y-auto my-8">
            <button
              onClick={() => setShowPreferences(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 border border-slate-200 text-slate-500 hover:text-slate-900 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Close preferences"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-6 pr-8">
              <Shield className="w-6 h-6 text-brand-copper flex-shrink-0" />
              <h3 className="text-lg sm:text-xl font-bold text-brand-deepNavy font-display">Cookie Preferences</h3>
            </div>

            <div className="space-y-4 mb-6 sm:mb-8">
              {/* Necessary */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-start justify-between gap-3">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-brand-deepNavy font-display">Essential Cookies</div>
                  <div className="text-[11px] sm:text-xs text-brand-slate mt-0.5">Required for the website to function properly and securely.</div>
                </div>
                <span className="text-[10px] font-mono text-emerald-800 bg-emerald-50 px-2 py-1 rounded border border-emerald-200 font-semibold flex-shrink-0">
                  ALWAYS ACTIVE
                </span>
              </div>

              {/* Analytics */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-brand-deepNavy font-display">Analytics Cookies</div>
                  <div className="text-[11px] sm:text-xs text-brand-slate mt-0.5">Helps us understand how visitors use our website.</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.analytics}
                  onChange={(e) => setSettings({ ...settings, analytics: e.target.checked })}
                  className="rounded border-slate-300 bg-white text-brand-copper focus:ring-brand-copper w-5 h-5 flex-shrink-0"
                />
              </div>

              {/* Marketing */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-between gap-3">
                <div>
                  <div className="text-xs sm:text-sm font-bold text-brand-deepNavy font-display">Marketing Cookies</div>
                  <div className="text-[11px] sm:text-xs text-brand-slate mt-0.5">Used to help us reach customers interested in our services.</div>
                </div>
                <input
                  type="checkbox"
                  checked={settings.marketing}
                  onChange={(e) => setSettings({ ...settings, marketing: e.target.checked })}
                  className="rounded border-slate-300 bg-white text-brand-copper focus:ring-brand-copper w-5 h-5 flex-shrink-0"
                />
              </div>
            </div>

            <button
              onClick={saveCustom}
              className="w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-brand-copper hover:bg-brand-copperDark flex items-center justify-center gap-2 min-h-[48px]"
            >
              <Check className="w-4 h-4" />
              Save Preferences
            </button>
          </div>
        </div>
      )}
    </>
  );
}
