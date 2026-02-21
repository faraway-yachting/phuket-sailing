import { Navbar } from '@/components/shared/Navbar'
import { Footer } from '@/components/shared/Footer'
import { Certifications } from '@/components/shared/Certifications'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { LanguageProvider } from '@/components/providers/LanguageProvider'
import { YachtCacheProvider } from '@/contexts/YachtCacheContext'
import { HreflangTags } from '@/components/shared/HreflangTags'
import { locales, localeHtmlLang, type Locale } from '@/lib/i18n'

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export default function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { locale: string }
}) {
  return (
    <LanguageProvider>
      <YachtCacheProvider>
        <HreflangTags />
        <Navbar />
        {children}
        <Certifications />
        <Footer />
        <WhatsAppButton />
      </YachtCacheProvider>
    </LanguageProvider>
  )
}
