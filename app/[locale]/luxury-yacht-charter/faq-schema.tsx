export function LuxuryYachtFAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is a luxury sailing yacht charter in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A fully private charter — a premium sailing yacht or catamaran, professional crew, chef, and full equipment — reserved exclusively for your group. You choose the islands, the pace, and the duration. Everything else is handled.',
        },
      },
      {
        '@type': 'Question',
        name: 'How is a luxury sailing charter different from a superyacht charter in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Luxury sailing charters focus on authentic wind-powered sailing aboard premium catamarans and yachts — intimate, adventure-oriented, and ideal for couples, honeymooners, and small groups seeking a genuine sailing experience. Superyacht charters in Phuket involve larger motor yachts (70–106ft+) suited to VIP events, corporate entertaining, and ultra-luxury occasions. Both offer exceptional quality — the right choice depends entirely on the experience you\'re after.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the best luxury sailing charter for a honeymoon in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A 3–5 night private catamaran charter. A private ensuite cabin, fresh meals each day, and a route that covers Phi Phi Islands, Racha Islands, and Koh Rok — secluded, beautiful, and completely private. Tell us it\'s your honeymoon when you inquire and we\'ll arrange the right touches onboard.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which islands can I reach on a luxury sailing charter from Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On day and overnight charters: Racha Islands (2–3 hrs), Phi Phi Islands (4–5 hrs), Phang Nga Bay and Koh Hong (3–4 hrs). On 5+ night charters: Koh Rok, Koh Ha, Koh Lanta, and Koh Lipe.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is a luxury sailing charter suitable for first-time sailors?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes. All crewed charters include a professional captain who handles all sailing and navigation. You need no experience — just an interest in the sea and the islands.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in a luxury sailing charter in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'All meals, drinking water, fuel, crew (captain, chef, deckhand), snorkeling gear, kayaks, and paddleboards. National park fees (300–400 THB per person per park) and alcoholic drinks are typically extra — confirmed upfront with no surprises.',
        },
      },
      {
        '@type': 'Question',
        name: 'When is the best time for a luxury sailing charter in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'November to April offers the calmest conditions and most reliable weather. Low season (May–October) brings 30–40% lower prices and quieter anchorages — perfectly viable for guests comfortable with occasional afternoon rain.',
        },
      },
      {
        '@type': 'Question',
        name: 'How much does a luxury sailing charter in Phuket cost?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Private luxury sailing charters start from approximately €700–€900 per night for premium catamarans. Day charters from 29,900 THB. All inclusive of crew, meals, and onboard activities.',
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
