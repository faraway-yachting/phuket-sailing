'use client'

import { useState, FormEvent } from 'react'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { CountryCodeCombobox } from '@/components/shared/CountryCodeCombobox'
import { FormSuccessScreen } from '@/components/shared/FormSuccessScreen'

const inputClass = "w-full h-12 bg-transparent border-b border-gray-300 text-gray-800 placeholder-gray-400 focus:border-[#164e63] focus:outline-none transition-colors"
const selectClass = "w-full h-12 bg-transparent border-b border-gray-300 text-gray-500 focus:border-[#164e63] focus:outline-none transition-colors appearance-none cursor-pointer"

export function CabinCruiseBookingForm() {
  const { t } = useLanguage()
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [countryCode, setCountryCode] = useState('+66')

  if (status === 'sent') {
    return (
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <FormSuccessScreen onReset={() => setStatus('idle')} />
        </div>
      </section>
    )
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)
    const phone = data.get('phone') as string

    const payload = {
      formId: 'cabin-cruise-booking',
      formType: 'Cabin Cruise Booking',
      formSource: 'Cabin Cruise Page',
      name: data.get('name'),
      email: data.get('email'),
      phone: phone ? `${countryCode}${phone}` : '',
      cabinType: data.get('cabinType'),
      personsInCabin: data.get('personsInCabin'),
      guests: data.get('guests'),
      travelDate: data.get('travelDate'),
      returnDate: data.get('returnDate'),
      comments: data.get('comments'),
    }

    try {
      const res = await fetch('/api/cabin-cruise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('sent')
      form.reset()
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({ event: 'cabin_cruise_form_submit' });
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className="py-14 sm:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2
          className="text-3xl sm:text-4xl font-bold text-[#164e63] text-center mb-10 sm:mb-14"
          style={{ fontFamily: 'var(--font-playfair)' }}
        >
          {t('cabinCruiseBooking.title')}
        </h2>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
            <input
              name="name"
              required
              placeholder={`${t('cabinCruiseBooking.name')} *`}
              className={inputClass}
            />
            <input
              name="email"
              type="email"
              required
              placeholder={`${t('cabinCruiseBooking.email')} *`}
              className={inputClass}
            />

            <div className="flex items-end gap-2 border-b border-gray-300 focus-within:border-[#164e63] transition-colors">
              <div className="w-28 shrink-0">
                <CountryCodeCombobox value={countryCode} onChange={setCountryCode} />
              </div>
              <input
                name="phone"
                type="tel"
                placeholder={t('cabinCruiseBooking.phone')}
                className="w-full h-12 bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none flex-1"
              />
            </div>
            <div className="relative">
              <select name="cabinType" className={selectClass} defaultValue="">
                <option value="" disabled>{t('cabinCruiseBooking.cabinType')}</option>
                <option value="standard">{t('cabinCruiseBooking.cabinTypes.standard')}</option>
                <option value="deluxe">{t('cabinCruiseBooking.cabinTypes.deluxe')}</option>
                <option value="premium">{t('cabinCruiseBooking.cabinTypes.premium')}</option>
              </select>
              <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>

            <div className="relative">
              <select name="personsInCabin" className={selectClass} defaultValue="">
                <option value="" disabled>{t('cabinCruiseBooking.personsInCabin')}</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
              <svg className="absolute right-0 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
            </div>
            <input
              name="guests"
              type="number"
              min="1"
              placeholder={t('cabinCruiseBooking.guests')}
              className={inputClass}
            />

            <input
              name="travelDate"
              type="date"
              placeholder={t('cabinCruiseBooking.travelDate')}
              className={inputClass}
              onFocus={(e) => e.target.showPicker?.()}
            />
            <input
              name="returnDate"
              type="date"
              placeholder={t('cabinCruiseBooking.returnDate')}
              className={inputClass}
              onFocus={(e) => e.target.showPicker?.()}
            />
          </div>

          <textarea
            name="comments"
            rows={3}
            placeholder={t('cabinCruiseBooking.comments')}
            className="w-full bg-transparent border-b border-gray-300 text-gray-800 placeholder-gray-400 focus:border-[#164e63] focus:outline-none transition-colors resize-none"
          />

          {status === 'error' && (
            <p className="text-red-500 text-sm text-center">{t('common.errorTryAgain')}</p>
          )}

          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full py-4 text-white font-semibold text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ background: 'linear-gradient(135deg, #164e63 0%, #0a2a35 100%)' }}
          >
            {status === 'sending' ? t('common.sending') : t('cabinCruiseBooking.submit')}
          </button>
        </form>
      </div>
    </section>
  )
}
