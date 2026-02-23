"use client";

import { LocaleLink } from "@/components/shared/LocaleLink";
import { useLanguage } from "@/components/providers/LanguageProvider";
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-gradient-to-br from-[#0a2a35] via-[#0f3a47] to-[#164e63] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Phuket Sailing
            </h3>
            <div className="space-y-3 text-white/80">
              <a href="tel:+66612345623" className="flex items-start gap-3 hover:text-[#14b8a6] transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+66 61 2345623</span>
              </a>
              <a href="mailto:info@phuket-sailing.com" className="flex items-start gap-3 hover:text-[#14b8a6] transition-colors break-all">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@phuket-sailing.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>40/1 Chaofa Road, Moo 9 Tambon Chalong, Amphoe Mueang Phuket, Chang Wat Phuket 83130</span>
              </div>
            </div>

          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('footer.quickLinks')}
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <LocaleLink href="/" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                  {t('footer.home')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/contact" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                  {t('footer.contactUs')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/terms-and-conditions" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                  {t('footer.termsAndConditions')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/privacy-policy" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                  {t('footer.privacyPolicy')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/impressum" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                  Impressum
                </LocaleLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('footer.charterTypes')}
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <LocaleLink href="/catamaran-charter-phuket" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                  {t('footer.catamaranCharter')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/luxury-yacht-charter" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                  {t('footer.luxuryYachtCharter')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/cabin-cruise-phuket" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                  {t('footer.cabinCruise')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/overnight-sailing-charter" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                  {t('footer.overnightSailing')}
                </LocaleLink>
              </li>
              <li>
                <LocaleLink href="/bareboat-sailing-phuket" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                  {t('footer.bareboatSailing') || 'Bareboat Sailing'}
                </LocaleLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('footer.subscribe')}
            </h3>
            <p className="text-white/80 text-sm mb-4">
              {t('footer.subscribeText')}
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/20 transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-white text-[#164e63] font-semibold hover:bg-[#14b8a6] hover:text-white transition-all"
              >
                {t('footer.subscribeButton')}
              </button>
            </form>
          </div>
        </div>
      </div>

    </footer>
  );
}
