export function CabinCruiseFAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a cabin cruise in Phuket cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Day cabin cruises start from €1,199. Overnight cabin cruises from €1,500/night. Multi-day cabin cruises from €2,500/night. All prices include crew, meals, activities, and onboard amenities — no hidden fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many guests can a cabin cruise accommodate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our cabin cruises offer 3–4 private cabins, accommodating up to 8 overnight guests. For day cruises, we can host up to 10-12 guests depending on the vessel. Every booking is private — you won\'t share with strangers, ensuring an intimate experience.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need sailing experience to join a cabin cruise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not at all. Every cabin cruise includes a professional crew, including a licensed skipper, chef, and support staff who handle all sailing and operations. You\'re free to participate in the sailing or simply relax and enjoy the journey.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are cabin cruises safe for children?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cabin cruises welcome guests aged 12 and above. With the stable twin-hull design, the cruise offers a smooth experience, while safety railings, netting, and life jackets ensure kids\' safety.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s the difference between a cabin cruise and a private yacht charter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A cabin cruise offers a shared, yet luxurious sailing experience at a more accessible price. You get the comfort of private cabins, gourmet meals, and a professional crew, but at a fraction of the cost of booking an entire private yacht. A cabin cruise provides a high-end experience with shared costs, making it ideal for small groups or solo travelers seeking luxury without the premium price tag.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which islands can I visit on a cabin cruise from Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Day trips: Phi Phi Islands, Racha Islands, Phang Nga Bay, Koh Hong. Multi-day trips: Koh Lanta, Koh Rok, Koh Ha, Similan Islands, Koh Lipe, and more. Your itinerary is customizable to your preferences — explore at your own pace!',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s included in the cabin cruise price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The price includes: Professional crew (licensed skipper, chef, and support staff), private cabins with ensuite bathrooms, meals (breakfast, lunch, dinner), water activities (snorkeling, paddleboarding, kayaking), onboard comforts (air conditioning, comfortable lounges, etc.). Not included: National park fees (300–400 THB per adult per park) and alcoholic beverages.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is the best time for a cabin cruise in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The best time for a cabin cruise in Phuket is from November to April, when the weather is calm and the skies are clear. This period offers the calmest waters, the best visibility, and the steadiest winds for sailing. For quieter experiences and lower prices, November and April (shoulder months) are great options.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far in advance should I book a cabin cruise?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'For the high season (November to May), it\'s recommended to book 3-6 months in advance to secure your preferred cabin. During the peak season over Christmas and New Year, booking 6-12 months ahead is ideal to ensure availability and avoid disappointment. For the best selection, early booking is always advised, especially for multi-day cabin cruises.',
        },
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
