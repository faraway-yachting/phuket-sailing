"use client";

import { useState, useEffect, useRef } from "react";
import { links } from "@/data/home";

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
    <nav ref={navRef} className={`bg-white border-b border-gray-200 sticky top-0 z-50 shadow-md transition-all duration-300 ${isScrolled ? 'py-2' : 'py-4'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-wrap justify-center transition-all duration-300 ${isScrolled ? 'gap-1' : 'gap-1 sm:gap-2'}`}>
          {links.map((link) => {
            const Icon = link.icon;
            return (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`group flex items-center gap-1.5 font-semibold text-gray-600 hover:bg-gray-50 hover:text-[#164e63] transition-all rounded-lg ${isScrolled ? 'text-xs px-2.5 py-1.5' : 'text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-2.5'}`}
              >
                <Icon className={`text-[#14b8a6] flex-shrink-0 ${isScrolled ? 'w-3.5 h-3.5' : 'w-4 h-4'}`} />
                <span>{link.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
