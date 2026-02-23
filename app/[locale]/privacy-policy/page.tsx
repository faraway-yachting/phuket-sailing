import Image from "next/image";
import { getTranslations } from '@/lib/i18n/getTranslations';

const sectionKeys = [
  { id: "interpretation", key: "interpretation" },
  { id: "what-we-collect", key: "whatWeCollect" },
  { id: "how-we-use-it", key: "howWeUseIt" },
  { id: "data-sharing", key: "dataSharing" },
  { id: "your-rights", key: "yourRights" },
  { id: "retention-security", key: "retentionSecurity" },
  { id: "childrens-privacy", key: "childrensPrivacy" },
  { id: "links", key: "links" },
  { id: "changes", key: "changes" },
  { id: "contact", key: "contact" },
] as const;

const definitionKeys = [
  "account", "affiliate", "company", "cookies", "country", "device",
  "personalData", "service", "serviceProvider", "usageData", "website", "you",
] as const;

function SectionBadge({ id }: { id: number }) {
  return (
    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-[#1e5a6d] to-[#164e63] flex items-center justify-center text-white font-bold text-xs sm:text-sm flex-shrink-0 shadow-md">
      {String(id).padStart(2, "0")}
    </div>
  );
}

function SectionHeader({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center gap-3 sm:gap-4 mb-4">
      <SectionBadge id={number} />
      <h3 className="text-xl sm:text-2xl font-bold text-[#164e63]" style={{ fontFamily: "var(--font-playfair)" }}>
        {number}. {title}
      </h3>
    </div>
  );
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const { t } = getTranslations(locale);

  return (
    <div className="min-h-screen bg-[#f8fffe]">
      <div className="relative w-full h-80 sm:h-96 md:h-[28rem]">
        <Image
          src="/assets/images/luxury-yacht-charter/hero-luxury-charter.jpg"
          alt="Yacht sailing in Phuket"
          fill
          sizes="100vw"
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-[#0f3a47]/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-4">
          <h1 className="text-white text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
            {t('privacyPolicy.title')}
          </h1>
          <span className="mt-2 inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-medium bg-white/10 text-white/80">
            {t('privacyPolicy.lastUpdated')}
          </span>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 md:pt-14 pb-0">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 sm:p-8 mb-8 sm:mb-12">
          <p className="text-lg leading-relaxed text-neutral-600">
            {t('privacyPolicy.introText')}
          </p>
        </div>

        <div className="bg-gradient-to-br from-[#0a2a35] via-[#0f3a47] to-[#164e63] rounded-2xl shadow-xl shadow-[#0a2a35]/25 p-6 sm:p-8 md:p-10 mb-8 sm:mb-12">
          <div className="flex flex-row items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-[#14b8a6]/15 border-2 border-[#14b8a6] flex items-center justify-center flex-shrink-0">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h10" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-playfair)" }}>
              {t('privacyPolicy.tocTitle')}
            </h2>
          </div>
          <div className="w-14 h-0.5 bg-gradient-to-r from-[#14b8a6] to-[#FF8C00] rounded-full mx-auto mb-8" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
            {sectionKeys.map((section, index) => (
              <a key={section.id} href={`#${section.id}`} className="flex items-center gap-3.5 group">
                <span className="w-9 h-9 rounded-full bg-[#14b8a6]/15 border border-[#14b8a6] flex items-center justify-center text-[#14b8a6] text-sm font-bold flex-shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="text-white text-base group-hover:text-[#14b8a6] transition-colors font-bold">
                  {t(`privacyPolicy.sections.${section.key}`)}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-10 md:pb-14">

        <section id="interpretation" className="mb-8">
          <SectionHeader number={1} title={t('privacyPolicy.sections.interpretation')} />
          <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
              {definitionKeys.map((key) => (
                <div key={key} className="flex flex-col gap-1">
                  <dt className="font-semibold text-[#0f172a]">{t(`privacyPolicy.definitions.${key}.term`)}</dt>
                  <dd className="text-sm leading-relaxed text-neutral-500">{t(`privacyPolicy.definitions.${key}.definition`)}</dd>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="what-we-collect" className="mb-8">
          <SectionHeader number={2} title={t('privacyPolicy.sections.whatWeCollect')} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {(["personalData", "usageData", "cookies"] as const).map((key) => (
              <div key={key} className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
                <div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-[#14b8a6]/10">
                  <svg className="w-5 h-5 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-[#0f172a]">{t(`privacyPolicy.collect.${key}.title`)}</h4>
                <p className="text-sm leading-relaxed text-neutral-500">{t(`privacyPolicy.collect.${key}.desc`)}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-we-use-it" className="mb-8">
          <SectionHeader number={3} title={t('privacyPolicy.sections.howWeUseIt')} />
          <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
            <p className="mb-4 font-medium text-[#0f172a]">{t('privacyPolicy.useData.intro')}</p>
            <ul className="space-y-3">
              {[1, 2, 3, 4, 5].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white mt-0.5 bg-gradient-to-br from-[#14b8a6] to-[#0d9488]">
                    {i}
                  </span>
                  <span className="leading-relaxed text-neutral-600">{t(`privacyPolicy.useData.items.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="data-sharing" className="mb-8">
          <SectionHeader number={4} title={t('privacyPolicy.sections.dataSharing')} />
          <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
            <p className="mb-4 font-medium text-[#0f172a]">{t('privacyPolicy.sharing.intro')}</p>
            <ul className="space-y-3">
              {[1, 2, 3, 4].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="shrink-0 w-2 h-2 rounded-full mt-2 bg-[#14b8a6]" />
                  <span className="leading-relaxed text-neutral-600">{t(`privacyPolicy.sharing.items.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="your-rights" className="mb-8">
          <SectionHeader number={5} title={t('privacyPolicy.sections.yourRights')} />
          <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
            <p className="mb-4 font-medium text-[#0f172a]">{t('privacyPolicy.rights.intro')}</p>
            <ul className="space-y-3">
              {[1, 2, 3].map((i) => (
                <li key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 shrink-0 mt-0.5 text-[#14b8a6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                  <span className="leading-relaxed text-neutral-600">{t(`privacyPolicy.rights.items.${i}`)}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section id="retention-security" className="mb-8">
          <SectionHeader number={6} title={t('privacyPolicy.sections.retentionSecurity')} />
          <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-[#14b8a6]/10">
                <svg className="w-6 h-6 text-[#0d9488]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <p className="leading-relaxed text-neutral-600">{t('privacyPolicy.retention')}</p>
            </div>
          </div>
        </section>

        <section id="childrens-privacy" className="mb-8">
          <SectionHeader number={7} title={t('privacyPolicy.sections.childrensPrivacy')} />
          <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
            <p className="leading-relaxed text-neutral-600">{t('privacyPolicy.children')}</p>
          </div>
        </section>

        <section id="links" className="mb-8">
          <SectionHeader number={8} title={t('privacyPolicy.sections.links')} />
          <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
            <p className="leading-relaxed text-neutral-600">{t('privacyPolicy.linksText')}</p>
          </div>
        </section>

        <section id="changes" className="mb-8">
          <SectionHeader number={9} title={t('privacyPolicy.sections.changes')} />
          <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
            <p className="leading-relaxed text-neutral-600">{t('privacyPolicy.changesText')}</p>
          </div>
        </section>

        <section id="contact" className="mb-8">
          <SectionHeader number={10} title={t('privacyPolicy.sections.contact')} />
          <div className="bg-white rounded-xl shadow-sm shadow-[#164e63]/5 border border-gray-100 p-4 sm:p-5">
            <p className="leading-relaxed text-neutral-600 mb-2">{t('privacyPolicy.contactText')}</p>
            <p className="text-neutral-600">
              {t('privacyPolicy.contactEmail')}{" "}
              <a href="mailto:info@phuket-sailing.com" className="font-medium underline underline-offset-2 text-[#0d9488]">
                info@phuket-sailing.com
              </a>
            </p>
          </div>
        </section>

        <div className="mt-10">
          <div className="bg-gradient-to-br from-[#0a2a35] via-[#0f3a47] to-[#164e63] rounded-2xl shadow-xl shadow-[#0a2a35]/25 p-8 sm:p-10 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 text-balance">
              {t('privacyPolicy.ctaTitle')}
            </h2>
            <p className="mb-8 max-w-2xl mx-auto leading-relaxed text-white/75">
              {t('privacyPolicy.ctaText')}
            </p>
            <a
              href="mailto:info@phuket-sailing.com"
              className="inline-block px-8 py-3.5 rounded-lg text-white font-semibold transition-all duration-200 hover:shadow-lg"
              style={{ background: "linear-gradient(90deg, #A0522D 0%, #FF8C00 100%)" }}
            >
              {t('privacyPolicy.ctaButton')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
