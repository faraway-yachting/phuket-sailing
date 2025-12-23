"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shared/ui/accordion";
import { Button } from "@/components/shared/ui/button";
import { HelpCircle } from "lucide-react";
import { faqs } from "@/data/home";

export function FAQs() {

  return (
    <section id="faqs" className="py-20 md:py-28 bg-gradient-to-br from-blue-50 via-sky-50 to-cyan-50">
      <div className="container mx-auto px-4 md:px-4 lg:px-4 xl:px-8 max-w-5xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <HelpCircle className="w-12 h-12 text-sky-600" />
          <h2 className="text-4xl md:text-5xl font-bold text-sky-900 text-center">
            FAQs
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-5">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl px-8 border-2 border-sky-200 hover:border-sky-300 shadow-lg hover:shadow-xl transition-all"
            >
              <AccordionTrigger className="text-left hover:no-underline py-7">
                <h3 className="text-xl font-bold text-sky-900 pr-4">{faq.question}</h3>
              </AccordionTrigger>
              <AccordionContent className="text-gray-700 text-lg leading-relaxed pb-7">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-14 bg-gradient-to-r from-sky-900 to-blue-900 rounded-3xl p-12 text-center shadow-2xl border-4 border-amber-400">
          <h3 className="text-3xl font-bold text-white mb-5">
            Ready to plan your Phuket Sailing Charter?
          </h3>
          <Button size="lg" className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white px-10 py-7 text-xl rounded-xl shadow-2xl transform hover:scale-105 transition-all font-bold"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Get Your Individual Quote
          </Button>
        </div>
      </div>
    </section>
  );
}
