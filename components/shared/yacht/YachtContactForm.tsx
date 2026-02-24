'use client'

import React, { useState, FormEvent } from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { CountryCodeCombobox } from '@/components/shared/CountryCodeCombobox'

const WEBHOOK_URL = 'https://phpstack-858394-5597469.cloudwaysapps.com/webhook/bec4091e-c485-4548-a6ee-a06d0882517d'

interface Props {
  yachtTitle: string
}

export function YachtContactForm({ yachtTitle }: Props) {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [countryCode, setCountryCode] = useState('+66')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)

    const payload = {
      yacht: yachtTitle,
      name: data.get('name'),
      email: data.get('email'),
      countryCode,
      phone: data.get('phone'),
      guests: data.get('guests'),
      dateFrom: data.get('dateFrom'),
      dateTo: data.get('dateTo'),
      message: data.get('message'),
    }

    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      setStatus('sent')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-24">
      <h3 className="text-lg font-bold text-[#164e63] text-center mb-4">{yachtTitle}</h3>

      <div className="text-center mb-4 space-y-2">
        <a href="tel:+66612345623" className="flex items-center justify-center gap-2 text-[#164e63] hover:text-[#14b8a6] transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="font-semibold text-sm">+66 61 2345623</span>
        </a>
        <a href="https://wa.me/66612345623" className="flex items-center justify-center gap-2 text-[#164e63] hover:text-[#14b8a6] transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          <span className="font-semibold text-sm">+66 61 2345623</span>
        </a>
      </div>

      {status === 'sent' ? (
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-lg font-semibold text-[#164e63]">{t('common.thankYou') || 'Thank you!'}</p>
          <p className="text-sm text-gray-500 mt-1">{t('common.weWillContact') || 'We will contact you shortly.'}</p>
          <button type="button" onClick={() => setStatus('idle')} className="mt-4 text-sm text-[#14b8a6] hover:underline">
            {t('common.sendAnother') || 'Send another inquiry'}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input name="name" type="text" placeholder={t('yachtDetail.yourName')} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm" />
          <input name="email" type="email" placeholder={t('yachtDetail.email')} required className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm" />
          <div className="flex gap-2">
            <CountryCodeCombobox value={countryCode} onChange={setCountryCode} className="w-28 shrink-0" />
            <input name="phone" type="tel" placeholder={t('yachtDetail.whatsapp')} className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm" />
          </div>
          <input name="guests" type="number" placeholder={t('yachtDetail.noOfGuests')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm" />
          <div className="grid grid-cols-2 gap-2">
            <input name="dateFrom" type="date" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm" />
            <input name="dateTo" type="date" className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm" />
          </div>
          <textarea name="message" rows={3} placeholder={t('yachtDetail.commentsRequests')} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm resize-none" />
          <button type="submit" disabled={status === 'sending'} className="w-full bg-gradient-to-r from-[#164e63] to-[#0a2a35] hover:from-[#0a2a35] hover:to-[#164e63] text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-60">
            {status === 'sending' ? (t('common.sending') || 'Sending...') : t('common.submit')}
          </button>
          {status === 'error' && (
            <p className="text-red-500 text-sm text-center">{t('common.errorTryAgain') || 'Something went wrong. Please try again.'}</p>
          )}
        </form>
      )}
    </div>
  )
}
