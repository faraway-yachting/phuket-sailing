'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function YachtDetailsPage() {
  const [activeTab, setActiveTab] = useState('about')

  // Sample yacht data - will be replaced with dynamic data later
  const yacht = {
    id: 1,
    name: 'Leopard Power Catamaran',
    subtitle: 'The Ultimate Charter Experience',
    mainImage: '/assets/images/home/catamaran.webp',
    gallery: [
      '/assets/images/home/catamaran.webp',
      '/assets/images/home/catamaran.webp',
      '/assets/images/home/catamaran.webp',
      '/assets/images/home/catamaran.webp',
      '/assets/images/home/catamaran.webp',
      '/assets/images/home/catamaran.webp',
      '/assets/images/home/catamaran.webp',
      '/assets/images/home/catamaran.webp',
    ],
    specs: {
      length: '51 ft',
      type: 'Power',
      cabins: 4,
      bathrooms: 4,
      dayCharterCapacity: 30,
      overnightCapacity: 8,
    },
    aboutBoat: [
      'Design: Leopard 51',
      'Built: 2016',
      'Length overall: 15.5m - 51ft',
      'Beam: 7.9m - 26ft',
      'Engine: 2x Yanmar 8LV 370 h.p',
      'Fuel: diesel',
      'Speed Under Power: 15 knots',
    ],
    description: 'Power Catamaran Island Hopping',
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-[#164e63] to-[#0a2a35] text-white py-4 sticky top-0 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/" className="text-sm hover:text-[#14b8a6] transition-colors">
            ← Back to Home
          </Link>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Tabs */}
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="flex border-b">
                <button
                  onClick={() => setActiveTab('about')}
                  className={`flex-1 px-6 py-4 text-sm font-bold transition-all ${
                    activeTab === 'about'
                      ? 'bg-gradient-to-r from-[#d4a574] to-[#c8935c] text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    About Boat
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('day')}
                  className={`flex-1 px-6 py-4 text-sm font-bold transition-all ${
                    activeTab === 'day'
                      ? 'bg-gradient-to-r from-[#d4a574] to-[#c8935c] text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                    Day Charter
                  </span>
                </button>
                <button
                  onClick={() => setActiveTab('overnight')}
                  className={`flex-1 px-6 py-4 text-sm font-bold transition-all ${
                    activeTab === 'overnight'
                      ? 'bg-gradient-to-r from-[#d4a574] to-[#c8935c] text-white'
                      : 'text-gray-600 hover:bg-gray-50'
                  }`}
                >
                  <span className="inline-flex items-center gap-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                    </svg>
                    Overnight Charter
                  </span>
                </button>
              </div>

              {/* Tab Content */}
              <div className="p-6 sm:p-8">
                {activeTab === 'about' && (
                  <div>
                    <h2 className="text-2xl font-bold text-[#164e63] mb-6">{yacht.name} – {yacht.subtitle}</h2>

                    {/* Image Gallery */}
                    <div className="mb-8">
                      <div className="relative h-96 rounded-xl overflow-hidden mb-4">
                        <Image
                          src={yacht.mainImage}
                          alt={yacht.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div className="grid grid-cols-4 gap-3">
                        {yacht.gallery.slice(0, 8).map((img, idx) => (
                          <div key={idx} className="relative h-24 rounded-lg overflow-hidden cursor-pointer hover:opacity-75 transition-opacity">
                            <Image
                              src={img}
                              alt={`Gallery ${idx + 1}`}
                              fill
                              className="object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-[#164e63] mb-4">{yacht.description}</h3>

                    {/* Specs Cards */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-8">
                      <div className="bg-white border-2 border-[#14b8a6] rounded-xl p-4 text-center">
                        <svg className="w-8 h-8 text-[#14b8a6] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                        <p className="text-xs text-gray-600 mb-1">Length</p>
                        <p className="text-lg font-bold text-[#164e63]">{yacht.specs.length}</p>
                      </div>

                      <div className="bg-white border-2 border-[#14b8a6] rounded-xl p-4 text-center">
                        <svg className="w-8 h-8 text-[#14b8a6] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        <p className="text-xs text-gray-600 mb-1">Type</p>
                        <p className="text-lg font-bold text-[#164e63]">{yacht.specs.type}</p>
                      </div>

                      <div className="bg-white border-2 border-[#14b8a6] rounded-xl p-4 text-center">
                        <svg className="w-8 h-8 text-[#14b8a6] mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="3" y="11" width="7" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                          <rect x="14" y="11" width="7" height="10" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                          <line x1="3" y1="9" x2="10" y2="9" strokeLinecap="round" />
                          <line x1="14" y1="9" x2="21" y2="9" strokeLinecap="round" />
                        </svg>
                        <p className="text-xs text-gray-600 mb-1">Cabins</p>
                        <p className="text-lg font-bold text-[#164e63]">{yacht.specs.cabins}</p>
                      </div>

                      <div className="bg-white border-2 border-[#14b8a6] rounded-xl p-4 text-center">
                        <svg className="w-8 h-8 text-[#14b8a6] mx-auto mb-2" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path d="M9 17v1a3 3 0 003 3v0a3 3 0 003-3v-1" strokeLinecap="round" strokeLinejoin="round" />
                          <rect x="6" y="11" width="12" height="6" rx="1" strokeLinecap="round" strokeLinejoin="round" />
                          <path d="M12 11V9" strokeLinecap="round" />
                          <path d="M12 9a2 2 0 100-4 2 2 0 000 4z" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <p className="text-xs text-gray-600 mb-1">Bathrooms</p>
                        <p className="text-lg font-bold text-[#164e63]">{yacht.specs.bathrooms}</p>
                      </div>

                      <div className="bg-white border-2 border-[#14b8a6] rounded-xl p-4 text-center">
                        <svg className="w-8 h-8 text-[#14b8a6] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                        <p className="text-xs text-gray-600 mb-1">Day Charter Capacity</p>
                        <p className="text-lg font-bold text-[#164e63]">{yacht.specs.dayCharterCapacity}</p>
                      </div>

                      <div className="bg-white border-2 border-[#14b8a6] rounded-xl p-4 text-center">
                        <svg className="w-8 h-8 text-[#14b8a6] mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                        </svg>
                        <p className="text-xs text-gray-600 mb-1">Overnight Charter Capacity</p>
                        <p className="text-lg font-bold text-[#164e63]">{yacht.specs.overnightCapacity}</p>
                      </div>
                    </div>

                    {/* About Boat List */}
                    <div className="bg-gray-50 rounded-xl p-6">
                      <h4 className="text-lg font-bold text-[#164e63] mb-4">About Boat</h4>
                      <ul className="space-y-3">
                        {yacht.aboutBoat.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-700">
                            <svg className="w-5 h-5 text-[#14b8a6] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {activeTab === 'day' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#164e63] mb-4">Day Charter Information</h3>
                    <p className="text-gray-700">Day charter details will be displayed here...</p>
                  </div>
                )}

                {activeTab === 'overnight' && (
                  <div>
                    <h3 className="text-xl font-bold text-[#164e63] mb-4">Overnight Charter Information</h3>
                    <p className="text-gray-700">Overnight charter details will be displayed here...</p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-24">
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#164e63] mb-2">
                  {yacht.name} – {yacht.subtitle}
                </h3>
                <p className="text-sm text-gray-600 mb-4">Looking for a yacht charter?</p>

                <div className="space-y-2 mb-4">
                  <a href="tel:+6661234562" className="flex items-center justify-center gap-2 text-[#164e63] hover:text-[#14b8a6] transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="font-semibold">+66 61 234 5623</span>
                  </a>

                  <a href="https://wa.me/6661234562" className="flex items-center justify-center gap-2 text-[#164e63] hover:text-[#14b8a6] transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    <span className="font-semibold">+66 61 234 5623</span>
                  </a>
                </div>
              </div>

              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Email *"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm"
                    required
                  />
                </div>

                <div className="flex gap-2">
                  <select className="px-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] text-sm">
                    <option>+66</option>
                    <option>+1</option>
                    <option>+44</option>
                  </select>
                  <input
                    type="tel"
                    placeholder="WhatsApp (if available)"
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <input
                    type="number"
                    placeholder="No of guests"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="date"
                    placeholder="Travel Date"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm"
                  />
                  <input
                    type="date"
                    placeholder="Return Date"
                    className="px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm"
                  />
                </div>

                <div>
                  <textarea
                    rows={4}
                    placeholder="Any other comments or requests?"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-transparent text-sm resize-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#164e63] to-[#0a2a35] hover:from-[#0a2a35] hover:to-[#164e63] text-white font-bold py-4 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Submit
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <button className="w-full bg-gradient-to-r from-[#14b8a6] to-[#0d9488] hover:from-[#0d9488] hover:to-[#14b8a6] text-white font-bold py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
