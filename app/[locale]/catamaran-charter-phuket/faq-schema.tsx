export function CatamaranFAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does a catamaran charter cost in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Day charters start from €800. Overnight catamaran charters from €1,000/night. Premium air-conditioned catamarans from €2,500/night. All prices include crew, meals, fuel, and activities — no hidden fees.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many guests can a catamaran accommodate?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Our catamarans have 3–4 private cabins accommodating up to 8 overnight guests. For day charters, we can host up to 10–12 guests depending on the vessel. Every booking is private — you won\'t share with strangers.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need sailing experience to charter a catamaran?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Not at all. Every crewed catamaran charter includes a licensed skipper who handles all sailing. You\'re free to participate or simply relax. For experienced sailors, we also offer bareboat catamaran charters (valid license required).',
        },
      },
      {
        '@type': 'Question',
        name: 'Are catamarans safe for children?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — catamarans are the safest and most family-friendly charter option. The wide, stable platform means very little motion, safety railings and netting are standard, and life jackets are provided for all ages. Our crews are experienced with families and keep kids engaged with water activities.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s the difference between a catamaran and a monohull charter?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Catamarans are wider, more stable, and have more deck and cabin space. They don\'t heel (lean) under sail, making them far more comfortable for guests who aren\'t experienced sailors. They also have shallower drafts, allowing access to anchorages and lagoons monohulls can\'t reach.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which islands can I visit on a catamaran from Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Day trips: Phi Phi Islands, Racha Islands, Phang Nga Bay, Koh Hong. Multi-day: Koh Lanta, Koh Rok, Koh Ha, Similan Islands, Koh Lipe. Your itinerary is fully customizable.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s included in the charter price?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Professional crew, all meals, drinking water, fuel, mooring, snorkeling gear, kayaks, paddleboards, safety equipment, and accident insurance. National park fees and alcoholic beverages are extra.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is the best time for a catamaran charter in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'November to April offers the best conditions — calm seas, clear skies, and steady sailing winds. December to March is peak season and books earliest. For quieter waters and lower prices, November and April are excellent shoulder months.',
        },
      },
      {
        '@type': 'Question',
        name: 'How far in advance should I book?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Peak season (Dec–Mar): 2–4 weeks minimum. Christmas/New Year: 2–3 months recommended. For the best catamaran selection, booking early is always worthwhile — especially for multi-day charters.',
        },
      },
      {
        '@type': 'Question',
        name: 'What if the weather is bad?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We reschedule for free, suggest alternative sheltered routes, or provide a full refund if we cancel for safety reasons. Our skippers monitor conditions constantly and will always prioritize your safety and comfort.',
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
