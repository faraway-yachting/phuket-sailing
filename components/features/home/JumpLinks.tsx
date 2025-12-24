"use client";

import { useState, useEffect, useRef } from "react";
import { links } from "@/data/home";
import { ChevronRight } from "lucide-react";

export function JumpLinks() {
  const [isScrolled, setIsScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const initialBottomRef = useRef<number | null>(null);

  useEffect(() => {
    const calculateInitialBottom = () => {
      if (navRef.current && initialBottomRef.current === null) {
        const rect = navRef.current.getBoundingClientRect();
        initialBottomRef.current = window.scrollY + rect.bottom;
      }
    };

    const handleScroll = () => {
      calculateInitialBottom();
      if (initialBottomRef.current !== null) {
        setIsScrolled(window.scrollY > initialBottomRef.current);
      }
    };

    calculateInitialBottom();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", calculateInitialBottom);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", calculateInitialBottom);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav ref={navRef} className={`bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-6'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-center transition-all duration-300 ${isScrolled ? 'mb-2' : 'mb-6'}`}>
          <h2 className={`font-bold text-sky-900 tracking-[0.2em] uppercase flex items-center gap-2 transition-all duration-300 ${isScrolled ? 'text-[10px] gap-1.5' : 'text-xs sm:text-sm gap-2'}`}>
            <span className={`bg-amber-500 rounded-full transition-all duration-300 ${isScrolled ? 'w-1 h-1' : 'w-1.5 h-1.5'}`}></span>
            Quick Jump Links
            <span className={`bg-amber-500 rounded-full transition-all duration-300 ${isScrolled ? 'w-1 h-1' : 'w-1.5 h-1.5'}`}></span>
          </h2>
        </div>
        <div className={`flex flex-wrap justify-center transition-all duration-300 ${isScrolled ? 'gap-2' : 'gap-3 sm:gap-4'}`}>
          {links.map((link, index) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`group relative bg-gradient-to-br from-sky-50 to-blue-50 rounded-xl hover:from-sky-100 hover:to-blue-100 transition-all duration-300 hover:scale-105 font-semibold border-2 border-sky-200 hover:border-sky-400 shadow-md hover:shadow-xl hover:shadow-sky-200 active:scale-95 overflow-hidden ${isScrolled ? 'text-xs px-4 py-2' : 'text-sm px-6 sm:px-7 py-3.5 sm:py-4'}`}
            >
              <span className="relative z-10 flex items-center gap-2.5 text-sky-900 group-hover:text-blue-700 transition-colors duration-300">
                {link.label}
                <ChevronRight className={`text-amber-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300 -translate-x-2 ${isScrolled ? 'w-3 h-3' : 'w-4 h-4'}`} />
              </span>
              <span className="absolute inset-0 bg-gradient-to-br from-amber-100/30 via-transparent to-orange-100/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
