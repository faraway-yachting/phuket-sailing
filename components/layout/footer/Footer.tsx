import Image from "next/image";
import { Phone, MessageCircle, Mail, MessageSquare, Anchor } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-sky-900 to-blue-900 text-white py-16 border-t-4 border-amber-500">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8">
        <div className="grid md:grid-cols-4 gap-10 mb-10">
          <div>
            <div className="mb-5">
              <Image
                src="/assets/images/home/sail-away-charter-2.png"
                alt="Sail Away Charters"
                width={220}
                height={60}
                className="brightness-0 invert opacity-90"
              />
            </div>
            <p className="text-gray-400 text-base leading-relaxed">
              Your specialist for sailing and catamaran charters in Phuket. Discover the best islands of Thailand.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <Anchor className="w-5 h-5 text-sky-400" />
              <span className="text-sky-400 font-semibold">Since 2010</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5 text-sky-400">Quick Links</h3>
            <ul className="space-y-3 text-base text-gray-400">
              <li><a href="#charter-style" className="hover:text-white transition-colors hover:underline">Charter Styles</a></li>
              <li><a href="#sailing-phuket" className="hover:text-white transition-colors hover:underline">Sailing Phuket</a></li>
              <li><a href="#overnight-sailing" className="hover:text-white transition-colors hover:underline">Overnight Sailing</a></li>
              <li><a href="#popular-routes" className="hover:text-white transition-colors hover:underline">Popular Routes</a></li>
              <li><a href="#faqs" className="hover:text-white transition-colors hover:underline">FAQs</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5 text-sky-400">Charter Types</h3>
            <ul className="space-y-3 text-base text-gray-400">
              <li className="hover:text-white transition-colors cursor-pointer hover:underline">Sailing Yachts</li>
              <li className="hover:text-white transition-colors cursor-pointer hover:underline">Catamaran Charters</li>
              <li className="hover:text-white transition-colors cursor-pointer hover:underline">Cabin Cruises</li>
              <li className="hover:text-white transition-colors cursor-pointer hover:underline">Bareboat Charter</li>
              <li className="hover:text-white transition-colors cursor-pointer hover:underline">Sunset Sailing</li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl mb-5 text-sky-400">Contact Us</h3>
            <div className="space-y-4">
              <a href="tel:+66612345623" className="flex items-center text-base text-gray-400 hover:text-white transition-colors group">
                <Phone className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                +66 61 234 5623
              </a>
              <a href="https://wa.me/66612345623" target="_blank" rel="noopener noreferrer" className="flex items-center text-base text-gray-400 hover:text-white transition-colors group">
                <MessageCircle className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                WhatsApp
              </a>
              <a href="mailto:bookings@faraway-yachting.com" className="flex items-center text-base text-gray-400 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                bookings@faraway-yachting.com
              </a>
              <a href="https://line.me/ti/p/IF91DcUiYa" target="_blank" rel="noopener noreferrer" className="flex items-center text-base text-gray-400 hover:text-white transition-colors group">
                <MessageSquare className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                Line App
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400 text-center md:text-left">
              &copy; {new Date().getFullYear()} Phuket Sailing. All rights reserved.
            </p>
            <p className="text-sm text-gray-400 text-center md:text-right">
              Sailing Charters & Catamaran Charters in Phuket, Thailand
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
