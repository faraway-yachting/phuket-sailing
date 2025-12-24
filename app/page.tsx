import {
  HeroSection,
  JumpLinks,
  CTASection,
  CharterStyles,
  SailingPhuket,
  OvernightSailing,
  CatamaranVsSailing,
  PopularRoutes,
  WhoItsFor,
  WhatsIncluded,
  Pricing,
  Booking,
  FAQs,
  FAQSchema,
  ContactForm,
} from "@/components/features/home";
// import { Footer } from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <FAQSchema />
      <HeroSection />
      <JumpLinks />
      <CTASection />
      <CharterStyles />
      <SailingPhuket />
      <OvernightSailing />
      <CTASection />
      <CatamaranVsSailing />
      <PopularRoutes />
      <WhoItsFor />
      <WhatsIncluded />
      <Pricing />
      <Booking />
      <FAQs />
      <CTASection />
      <ContactForm />
      {/* <Footer /> */}
    </>
  );
}
