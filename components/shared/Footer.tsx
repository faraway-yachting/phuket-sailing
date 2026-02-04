"use client";

import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#0a2a35] via-[#0f3a47] to-[#164e63] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Phuket Sailing
            </h3>
            <div className="space-y-3 text-white/80">
              <a href="tel:+66612345623" className="flex items-start gap-3 hover:text-[#14b8a6] transition-colors">
                <Phone className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>+66 61 234 5623</span>
              </a>
              <a href="mailto:info@phuket-sailing.com" className="flex items-start gap-3 hover:text-[#14b8a6] transition-colors">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>info@phuket-sailing.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>40/1 Chaofa Road, Moo 9 Tambon Chalong, Amphoe Mueang Phuket, Chang Wat Phuket 83130</span>
              </div>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-[#14b8a6] hover:text-[#14b8a6] transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-[#14b8a6] hover:text-[#14b8a6] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-[#14b8a6] hover:text-[#14b8a6] transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Quick Links
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Useful Links
            </h3>
            <ul className="space-y-2 text-white/80">
              <li>
                <Link href="#" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                </Link>
              </li>
              <li>
                <Link href="/terms-and-conditions" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#14b8a6] transition-colors flex items-center gap-2">
                  <span className="text-[#14b8a6]">›</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-playfair)" }}>
              Subscribe
            </h3>
            <p className="text-white/80 text-sm mb-4">
              Subscribe to our newsletter to stay up-to-date with the latest news, promotions, and insider tips on Phuket yacht charters!
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Email*"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-[#14b8a6] focus:ring-2 focus:ring-[#14b8a6]/20 transition-all"
              />
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-lg bg-white text-[#164e63] font-semibold hover:bg-[#14b8a6] hover:text-white transition-all"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
            <p>© 2025 Copyright Phuket Sailing</p>
            <div className="flex gap-6">
              <Link href="#" className="hover:text-[#14b8a6] transition-colors">
                Impressum
              </Link>
              <Link href="#" className="hover:text-[#14b8a6] transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
