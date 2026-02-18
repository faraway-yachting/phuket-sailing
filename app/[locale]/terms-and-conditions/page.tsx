import Image from "next/image";
import { getTranslations } from '@/lib/i18n/getTranslations';

const navyBadge =
  "w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#1e5a6d] to-[#164e63] flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 shadow-md";

function SectionBadge({ id }: { id: number }) {
  return <div className={navyBadge}>{String(id).padStart(2, "0")}</div>;
}

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const { t } = getTranslations(locale)
  
  const tocItems = [
    { id: 1, title: t('terms.toc.items.1') },
    { id: 2, title: t('terms.toc.items.2') },
    { id: 3, title: t('terms.toc.items.3') },
    { id: 4, title: t('terms.toc.items.4') },
    { id: 5, title: t('terms.toc.items.5') },
    { id: 6, title: t('terms.toc.items.6') },
    { id: 7, title: t('terms.toc.items.7') },
    { id: 8, title: t('terms.toc.items.8') },
    { id: 9, title: t('terms.toc.items.9') },
    { id: 10, title: t('terms.toc.items.10') },
    { id: 11, title: t('terms.toc.items.11') },
    { id: 12, title: t('terms.toc.items.12') },
    { id: 13, title: t('terms.toc.items.13') },
    { id: 14, title: t('terms.toc.items.14') },
    { id: 15, title: t('terms.toc.items.15') },
  ];

  return (
    <div className="min-h-screen bg-[#f8fffe]">
      {/* Hero */}
      <div className="relative w-full h-64 sm:h-72 md:h-80">
        <Image
          src="/assets/images/home/hero.jpg"
          alt="Phuket Sailing"
          fill
          sizes="100vw"
          className="object-cover blur-sm"
          priority
        />
        <div className="absolute inset-0 bg-[#0f3a47]/40" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            {t('terms.hero.title')}
          </h1>
          <p className="text-white/90 text-base sm:text-lg md:text-xl text-center max-w-xl drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)]">
            {t('terms.hero.subtitle')}
          </p>
        </div>
      </div>

      {/* Table of Contents – full width */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-0">
        <div className="bg-gradient-to-br from-[#0a2a35] via-[#0f3a47] to-[#164e63] rounded-2xl shadow-xl shadow-[#0a2a35]/25 p-6 sm:p-8 md:p-10 mb-8 sm:mb-12">
          {/* Centered header */}
          <div className="flex flex-row items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#14b8a6]/15 border-2 border-[#14b8a6] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('terms.toc.title')}
            </h2>
          </div>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#14b8a6] to-[#FF8C00] rounded-full mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {tocItems.map((item) => (
              <div key={item.id}>
                <a href={`#section-${item.id}`} className="flex items-center gap-3.5 group">
                  <span className="w-9 h-9 rounded-full bg-[#14b8a6]/15 border border-[#14b8a6] flex items-center justify-center text-[#14b8a6] text-sm font-bold flex-shrink-0">
                    {String(item.id).padStart(2, "0")}
                  </span>
                  <h3 className="text-white text-base group-hover:text-[#14b8a6] transition-colors font-bold">
                    {item.title}
                  </h3>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">

        {/* Title */}
        <div className="text-center mb-6 sm:mb-10">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
            {t('terms.mainTitle')}
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-[#14b8a6] to-[#FF8C00] rounded-full mx-auto mt-3" />
        </div>

        {/* ── 1. Booking ── */}
        <section id="section-1" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={1} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                1. {t('terms.sections.1.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5 space-y-3">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">1.1</span> {t('terms.sections.1["1.1"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">1.2</span> {t('terms.sections.1["1.2"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">1.3</span> {t('terms.sections.1["1.3"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">1.4</span> {t('terms.sections.1["1.4"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">1.5</span>{" "}
                  <span className="font-semibold">{t('terms.sections.1["1.5Label"]')}</span> {t('terms.sections.1["1.5"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 2. Altering a Booking ── */}
        <section id="section-2" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={2} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                2. {t('terms.sections.2.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">2.1</span> {t('terms.sections.2["2.1"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 3. Payments ── */}
        <section id="section-3" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={3} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                3. {t('terms.sections.3.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5 space-y-4">
                <div className="bg-[#f8fffe] rounded-lg p-4 border border-gray-100">
                  <p className="font-semibold text-[#164e63] text-base mb-1.5">3.1 {t('terms.sections.3["3.1Title"]')}</p>
                  <p className="text-neutral-700 text-base leading-relaxed">
                    {t('terms.sections.3["3.1"]')}
                  </p>
                </div>
                <div className="bg-[#f8fffe] rounded-lg p-4 border border-gray-100">
                  <p className="font-semibold text-[#164e63] text-base mb-1.5">3.2 {t('terms.sections.3["3.2Title"]')}</p>
                  <p className="text-neutral-700 text-base leading-relaxed">
                    {t('terms.sections.3["3.2"]')}
                  </p>
                </div>
                <div className="bg-[#f8fffe] rounded-lg p-4 border border-gray-100">
                  <p className="font-semibold text-[#164e63] text-base mb-2">3.3 {t('terms.sections.3["3.3Title"]')}</p>
                  <p className="text-neutral-700 text-base leading-relaxed mb-3">
                    {t('terms.sections.3["3.3Intro"]')}
                  </p>
                  <div className="space-y-2">
                    <div className="flex gap-3 bg-white rounded-lg p-3 border border-gray-200">
                      <span className="font-semibold text-[#164e63] text-sm whitespace-nowrap">{t('terms.sections.3["3.3Day"]')}</span>
                      <span className="text-neutral-700 text-sm leading-relaxed">{t('terms.sections.3["3.3DayDesc"]')}</span>
                    </div>
                    <div className="flex gap-3 bg-white rounded-lg p-3 border border-gray-200">
                      <span className="font-semibold text-[#164e63] text-sm whitespace-nowrap">{t('terms.sections.3["3.3Overnight"]')}</span>
                      <span className="text-neutral-700 text-sm leading-relaxed">{t('terms.sections.3["3.3OvernightDesc"]')}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-[#f8fffe] rounded-lg p-4 border border-gray-100">
                  <p className="font-semibold text-[#164e63] text-base mb-1.5">3.4 {t('terms.sections.3["3.4Title"]')}</p>
                  <p className="text-neutral-700 text-base leading-relaxed">
                    {t('terms.sections.3["3.4"]')}
                  </p>
                </div>
                <div className="bg-[#f8fffe] rounded-lg p-4 border border-gray-100">
                  <p className="font-semibold text-[#164e63] text-base mb-1.5">3.5 {t('terms.sections.3["3.5Title"]')}</p>
                  <p className="text-neutral-700 text-base leading-relaxed">
                    {t('terms.sections.3["3.5"]')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. Cancellations and Insurance ── */}
        <section id="section-4" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={4} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                4. {t('terms.sections.4.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5 space-y-3">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">4.1</span> {t('terms.sections.4["4.1"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">4.2</span> {t('terms.sections.4["4.2"]')}
                </p>
                <div className="bg-[#f8fffe] rounded-lg p-4 border border-gray-100">
                  <p className="font-semibold text-[#164e63] text-base mb-1.5">4.2.1 {t('terms.sections.4["4.2.1Title"]')}</p>
                  <p className="text-neutral-700 text-base leading-relaxed">
                    {t('terms.sections.4["4.2.1"]')}
                  </p>
                </div>
                <div className="bg-[#f8fffe] rounded-lg p-4 border border-gray-100">
                  <p className="font-semibold text-[#164e63] text-base mb-1.5">4.2.2 {t('terms.sections.4["4.2.2Title"]')}</p>
                  <p className="text-neutral-700 text-base leading-relaxed">
                    {t('terms.sections.4["4.2.2"]')}
                  </p>
                </div>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">4.3</span> {t('terms.sections.4["4.3"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">4.4</span> {t('terms.sections.4["4.4"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">4.5</span>{" "}
                  <span className="font-semibold">{t('terms.sections.4["4.5Label"]')}</span> — {t('terms.sections.4["4.5"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. Force Majeure ── */}
        <section id="section-5" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={5} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                5. {t('terms.sections.5.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">5.1</span> {t('terms.sections.5["5.1"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 6. Safety ── */}
        <section id="section-6" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={6} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                6. {t('terms.sections.6.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5 space-y-3">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">6.1</span> {t('terms.sections.6["6.1"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">6.2</span> {t('terms.sections.6["6.2"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">6.3</span> {t('terms.sections.6["6.3"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">6.4</span> {t('terms.sections.6["6.4"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">6.5</span> {t('terms.sections.6["6.5"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">6.6</span>{" "}
                  <span className="font-semibold">{t('terms.sections.6["6.6Label"]')}</span> {t('terms.sections.6["6.6"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. Liability ── */}
        <section id="section-7" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={7} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                7. {t('terms.sections.7.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5 space-y-3">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">7.1</span> {t('terms.sections.7["7.1"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">7.2</span> {t('terms.sections.7["7.2"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">7.3</span>{" "}
                  <span className="font-semibold">{t('terms.sections.7["7.3Label"]')}</span> {t('terms.sections.7["7.3"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">7.4</span>{" "}
                  <span className="font-semibold">{t('terms.sections.7["7.4Label"]')}</span> {t('terms.sections.7["7.4"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 8. Holiday & Cancellation Insurance ── */}
        <section id="section-8" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={8} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                8. {t('terms.sections.8.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5 space-y-3">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">8.1</span> {t('terms.sections.8["8.1"]')}
                </p>
                {/* Info box */}
                <div className="bg-[#f8fffe] border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-2.5">
                    <div className="w-6 h-6 rounded-full bg-[#14b8a6] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-[#164e63] text-base">{t('terms.sections.8["8.2Title"]')}</p>
                      <p className="text-neutral-600 text-base mt-1 leading-relaxed">
                        {t('terms.sections.8["8.2"]')}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 9. Equipment Breakdown ── */}
        <section id="section-9" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={9} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                9. {t('terms.sections.9.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5 space-y-3">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">9.1</span> {t('terms.sections.9["9.1"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">9.2</span> {t('terms.sections.9["9.2"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">9.3</span> {t('terms.sections.9["9.3"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 10. Complaints ── */}
        <section id="section-10" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={10} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                10. {t('terms.sections.10.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5 space-y-3">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">10.1</span> {t('terms.sections.10["10.1"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">10.2</span> {t('terms.sections.10["10.2"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">10.3</span> {t('terms.sections.10["10.3"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">10.4</span> {t('terms.sections.10["10.4"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 11. Information Provided ── */}
        <section id="section-11" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={11} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                11. {t('terms.sections.11.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">11.1</span> {t('terms.sections.11["11.1"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 12. Price Changes & Promotions ── */}
        <section id="section-12" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={12} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                12. {t('terms.sections.12.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5 space-y-3">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">12.1</span> {t('terms.sections.12["12.1"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">12.2</span> {t('terms.sections.12["12.2"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">12.3</span> {t('terms.sections.12["12.3"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 13. Intellectual Property & Privacy Policy ── */}
        <section id="section-13" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={13} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                13. {t('terms.sections.13.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5 space-y-3">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">13.1</span> {t('terms.sections.13["13.1"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">13.2</span> {t('terms.sections.13["13.2"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">13.3</span> {t('terms.sections.13["13.3"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 14. Additional Terms ── */}
        <section id="section-14" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={14} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                14. {t('terms.sections.14.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5 space-y-3">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">14.1</span>{" "}
                  <span className="font-semibold">{t('terms.sections.14["14.1Label"]')}</span> {t('terms.sections.14["14.1"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">14.2</span> {t('terms.sections.14["14.2"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 15. Final Note ── */}
        <section id="section-15" className="mb-8">
          <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4">
            <SectionBadge id={15} />
            <div className="flex-1 w-full">
              <h3 className="text-xl sm:text-2xl font-bold text-[#164e63] mb-3" style={{ fontFamily: "var(--font-playfair)" }}>
                15. {t('terms.sections.15.title')}
              </h3>
              <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5 space-y-3">
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">15.1</span> {t('terms.sections.15["15.1"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">15.2</span> {t('terms.sections.15["15.2"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">15.3</span> {t('terms.sections.15["15.3"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">15.4</span> {t('terms.sections.15["15.4"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">15.5</span> {t('terms.sections.15["15.5"]')}
                </p>
                <p className="text-neutral-700 text-base leading-relaxed">
                  <span className="font-semibold text-[#164e63]">15.6</span> {t('terms.sections.15["15.6"]')}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Closing ── */}
        <div className="mt-10">
          <div className="bg-gradient-to-br from-[#0a2a35] via-[#0f3a47] to-[#164e63] rounded-2xl shadow-xl shadow-[#0a2a35]/25 p-8 sm:p-10 text-center">
            <p className="text-white/90 text-lg leading-relaxed">
              {t('terms.closing.message')}
            </p>
            <p className="text-white/60 text-sm mt-3">{t('terms.closing.wish')}</p>
            <p className="text-white font-semibold text-base mt-1">{t('terms.closing.team')}</p>
            <p className="text-[#14b8a6] text-sm">
              {t('terms.closing.note')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
