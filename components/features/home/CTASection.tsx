import { Button } from "@/components/shared/ui/button";
import { Phone, MessageCircle, Mail, MessageSquare } from "lucide-react";

export function CTASection() {
  return (
    <section className="section-padding gradient-ocean-dark mx-4 md:mx-4 lg:mx-4 xl:mx-8 rounded-3xl shadow-2xl border-2 border-amber-400/60 my-16">
      <div className="container mx-auto container-padding">
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a
              href="tel:+66612345623"
              className="group flex flex-col items-center p-5 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-white text-sm">Call Us</span>
              <span className="text-xs text-sky-100">+66 61 234 5623</span>
            </a>

            <a
              href="https://wa.me/66612345623"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-5 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <MessageCircle className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-white text-sm">WhatsApp</span>
              <span className="text-xs text-sky-100">Message</span>
            </a>

            <a
              href="mailto:bookings@faraway-yachting.com"
              className="group flex flex-col items-center p-5 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-white text-sm">Email</span>
              <span className="text-xs text-sky-100 break-all px-2">bookings@</span>
            </a>

            <a
              href="https://line.me/ti/p/IF91DcUiYa"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center p-5 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-white/20 transition-all duration-300 border border-white/20 hover:border-white/30 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <span className="font-bold text-white text-sm">Line App</span>
              <span className="text-xs text-sky-100">Connect</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
