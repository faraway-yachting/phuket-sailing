export function CatamaranFAQSchema() {
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How many people can fit on a catamaran?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our catamarans can accommodate different group sizes depending on the vessel. Day charters typically accommodate 10-30 guests, while overnight charters are best for smaller groups of 4-12 people to ensure comfortable sleeping arrangements. Contact us for specific capacity details for your preferred catamaran.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need sailing experience?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No sailing experience is necessary! All our charters include a professional captain and crew who handle all sailing operations. You can simply relax and enjoy the journey, or ask to learn about sailing if you\'re interested.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s included in the charter price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our charter prices typically include the catamaran, professional crew, fuel, snorkeling equipment, and standard beverages. Meals can be included or customized based on your preferences. We\'ll provide a detailed breakdown when we prepare your quote.',
        },
      },
      {
        '@type': 'Question',
        name: 'What should I bring on the catamaran?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend bringing sunscreen, sunglasses, a hat, swimwear, towel, and any personal medications. For overnight charters, bring comfortable casual clothing and a light jacket for evenings. We provide all sailing and safety equipment.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can we customize our itinerary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely! We specialize in creating customized experiences. Tell us your preferences for destinations, activities, and experiences, and we\'ll design an itinerary that matches your vision. We can adjust routes based on weather conditions and your interests.',
        },
      },
      {
        '@type': 'Question',
        name: 'What happens if the weather is bad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Safety is our top priority. If weather conditions are unsafe, we\'ll work with you to reschedule your charter or modify the itinerary to protected areas. We monitor weather forecasts closely and will notify you in advance if changes are needed.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is food provided on board?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, we offer various catering options from light snacks and beverages to full gourmet meals prepared by our onboard chef. Menu options can be customized for dietary restrictions, preferences, and special occasions.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far in advance should I book?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend booking at least 2-4 weeks in advance, especially during high season (November to April). For special dates like holidays or weekends, booking 1-2 months ahead ensures availability of your preferred catamaran and dates.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
    />
  )
}
