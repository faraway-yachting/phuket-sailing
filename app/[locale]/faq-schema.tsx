export function HomeFAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the best time of year for sailing in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'November to April offers the calmest seas and most reliable weather — this is peak season for Phuket sailing. Low season (May–October) brings 30–40% lower prices and quieter anchorages. Phuket sailing works year-round with the right route. We\'ll always recommend the best itinerary for your exact travel dates.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a catamaran better than a sailing yacht in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Catamarans offer more space and stability — ideal for families and larger groups. Sailing yachts deliver a more authentic sailing feel and excellent value for couples or small groups. The right choice depends on your group size, comfort preferences, and the onboard atmosphere you want.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many nights do you recommend for the best Phuket sailing experience?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'We recommend 5 nights minimum. That\'s when you can comfortably reach quieter, more rewarding destinations like Koh Rok, Koh Ha, and the Butang Islands / Koh Lipe — places significantly less crowded than Phi Phi Islands and Phang Nga Bay.',
        },
      },
      {
        '@type': 'Question',
        name: 'Are Phuket sailing charters suitable for families with children?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. We recommend stable catamarans, plan routes with calm protected swim stops, and pace the itinerary to suit your group. Our crew is experienced with family charters — and children typically say it\'s the best holiday they\'ve ever had.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is sailing in Phuket good for couples and romantic getaways?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Absolutely. Sunset sails, quiet overnight anchorages, and privacy in beautiful places make Phuket sailing one of the most romantic holiday experiences available. For honeymoons, anniversaries, or proposals, tell us early — we\'ll help plan something special.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can solo travelers book without renting a full private yacht?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Cabin Cruises Phuket let you book by the cabin — a private space on a shared sailing cruise to the best islands, including Phi Phi, Koh Lanta, Koh Rok, and Racha Islands. The best-value way to experience multi-day Phuket sailing.',
        },
      },
      {
        '@type': 'Question',
        name: 'What\'s included in a crewed sailing charter in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Crewed charters typically include the vessel, professional crew, all meals, drinking water, fuel, safety equipment, and standard water activities. Extras like drinks, national park fees, and special setups are confirmed upfront — no hidden charges.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need a sailing license for a bareboat charter in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. Bareboat charters require a valid sailing license and demonstrated experience on a comparable vessel. If you\'re unsure whether you qualify, we\'re happy to advise — or recommend a crewed charter instead.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can you help us choose the best Phuket sailing itinerary?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes — it\'s one of the most valuable things we offer. Share your dates, number of nights, group size, and priorities (snorkeling, remote islands, beaches, adventure). We\'ll recommend a realistic route tailored to the season and designed to give your group the best possible experience.',
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
