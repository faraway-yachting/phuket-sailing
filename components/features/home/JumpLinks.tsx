"use client";

import { links } from "@/data/home";

export function JumpLinks() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-sky-900 to-blue-900 border-b-4 border-amber-500 py-5 sticky top-0 z-50 shadow-lg backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8">
        <h2 className="text-sm font-bold text-sky-100 mb-4 text-center md:text-left tracking-wide uppercase">
          Quick Jump Links
        </h2>
        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="text-sm px-4 py-2 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-all hover:scale-105 font-medium backdrop-blur-sm border border-white/10"
            >
              {link.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
