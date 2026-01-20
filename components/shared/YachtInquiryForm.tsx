'use client'

import { useState } from 'react'

export function YachtInquiryForm() {
  const [formData, setFormData] = useState({
    guests: '',
    nights: '',
    yachtType: '',
    tripType: '',
    islands: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('TRACKING: Yacht Inquiry Form Submitted', formData)
  }

  return (
    <form 
      onSubmit={handleSubmit}
      className="bg-white rounded-3xl p-10 shadow-2xl border-4 border-ocean-200 hover:border-ocean-400 transition-all duration-300"
    >
      <div className="text-center mb-8">
        <h3 className="mb-3 text-ocean-900">Get Your Individual Quote</h3>
        <p className="text-ocean-600 text-lg">Fast, easy, and personalized - just for you! 🎯</p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-semibold text-ocean-900 mb-2">
            Number of Guests
          </label>
          <input
            type="number"
            value={formData.guests}
            onChange={(e) => setFormData({...formData, guests: e.target.value})}
            placeholder="e.g. 4"
            className="w-full px-4 py-3 rounded-lg border border-ocean-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500 focus:outline-none"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-ocean-900 mb-2">
            Day Trip or Number of Nights
          </label>
          <input
            type="text"
            value={formData.nights}
            onChange={(e) => setFormData({...formData, nights: e.target.value})}
            placeholder="e.g. 5 nights"
            className="w-full px-4 py-3 rounded-lg border border-ocean-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500 focus:outline-none"
            required
          />
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-ocean-900 mb-2">
            Preferred Yacht Type
          </label>
          <select
            value={formData.yachtType}
            onChange={(e) => setFormData({...formData, yachtType: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-ocean-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500 focus:outline-none"
            required
          >
            <option value="">Select yacht type</option>
            <option value="sailing">Sailing Yacht</option>
            <option value="catamaran">Catamaran</option>
            <option value="cabin">Cabin Cruise</option>
            <option value="bareboat">Bareboat</option>
            <option value="unsure">Not sure</option>
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-semibold text-ocean-900 mb-2">
            Trip Type
          </label>
          <select
            value={formData.tripType}
            onChange={(e) => setFormData({...formData, tripType: e.target.value})}
            className="w-full px-4 py-3 rounded-lg border border-ocean-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500 focus:outline-none"
          >
            <option value="">Select trip type</option>
            <option value="family">Family</option>
            <option value="romantic">Romantic</option>
            <option value="adventure">Adventure</option>
            <option value="corporate">Corporate</option>
            <option value="celebration">Special Occasion</option>
          </select>
        </div>
      </div>
      
      <div className="mt-4">
        <label className="block text-sm font-semibold text-ocean-900 mb-2">
          Must-See Islands (Optional)
        </label>
        <input
          type="text"
          value={formData.islands}
          onChange={(e) => setFormData({...formData, islands: e.target.value})}
          placeholder="e.g. Koh Rok, Phi Phi"
          className="w-full px-4 py-3 rounded-lg border border-ocean-300 focus:border-ocean-500 focus:ring-2 focus:ring-ocean-500 focus:outline-none"
        />
      </div>
      
      <button
        type="submit"
        className="cta-button w-full mt-8 text-2xl py-6"
      >
        🚤 Get Your Individual Quote Now
      </button>
      
      <p className="text-center mt-4 text-sm text-ocean-600">
        ⚡ Instant response • 💯 No obligation • 🎁 Best rates guaranteed
      </p>
    </form>
  )
}
