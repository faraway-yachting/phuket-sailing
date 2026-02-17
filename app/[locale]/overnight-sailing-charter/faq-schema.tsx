export function OvernightSailingFAQSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'How much does an overnight sailing charter cost in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Overnight sailing charters in Phuket start at €1,000 per night for a mid-range catamaran. Luxury catamarans and yachts range from €2,500 to €5,000 per night, depending on the vessel size and amenities. Prices typically include crew, meals, water activities, and fuel.',
        },
      },
      {
        '@type': 'Question',
        name: 'What islands can I visit on an overnight sailing charter from Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'You can visit some of the most beautiful islands in Thailand, including Phi Phi Islands, Koh Lanta, Koh Rok, Koh Ha, Koh Lipe, and the Similan Islands. These destinations offer stunning beaches, vibrant coral reefs, and serene anchorages, all easily accessible on an overnight sailing charter.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many nights do you recommend for overnight sailing in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A 3–4 night charter is ideal for a comprehensive experience, allowing you to explore multiple islands, including Phi Phi, Koh Lanta, and Koh Rok. If you\'re short on time, a 1–2 night charter is great for a quick getaway, while a 5-night or longer charter is perfect for a deeper exploration of remote islands like Koh Lipe and the Similan Islands.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is included in an overnight sailing charter in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An overnight sailing charter includes a licensed skipper, chef, and deckhand. All meals, snorkeling gear, kayaks, and paddleboards are provided. Prices also cover fuel, mooring, and accident insurance, ensuring a stress-free sailing experience. National park fees and alcoholic beverages are typically extra.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is overnight sailing in Phuket good for a honeymoon?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, overnight sailing in Phuket is an excellent choice for honeymooners. It offers privacy, romantic sunsets, and secluded anchorages. You can enjoy private dinners on deck, sunrise views, and intimate moments, making it a memorable and unique experience compared to traditional resorts.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is a typical day like on an overnight sailing charter in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'A typical day starts with a relaxing breakfast at anchor, followed by sailing to your next destination. You\'ll have time for snorkeling, swimming, and exploring remote beaches. As the day ends, enjoy a candlelit dinner while watching the sunset, followed by a peaceful night at anchor, and waking up to a new, serene location.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is overnight sailing in Phuket safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, overnight sailing in Phuket is very safe. The catamarans we use are stable, and licensed captains are experienced in navigating the Andaman Sea. We also provide safety equipment and ensure your journey is comfortable and secure, with a crew that can handle any situation.',
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between an overnight sailing charter and a cabin cruise in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An overnight sailing charter provides a private, customizable experience with a crew dedicated solely to you and your group. In contrast, a cabin cruise typically involves shared accommodations with other guests and a fixed itinerary. With an overnight sailing charter, you enjoy more flexibility, privacy, and a tailored experience.',
        },
      },
      {
        '@type': 'Question',
        name: 'Can I reach the Similan Islands on an overnight sailing charter from Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, the Similan Islands are accessible on 5+ night sailing charters from Phuket. These islands are renowned for their diving and snorkeling opportunities, featuring vibrant coral reefs and clear waters. Longer charters allow you to explore these remote, protected areas and enjoy their pristine beauty.',
        },
      },
      {
        '@type': 'Question',
        name: 'What food is served on overnight sailing charters in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'On an overnight sailing charter, meals are freshly prepared by your onboard chef. Expect authentic Thai dishes like pad thai, green curry, and tom yum soup, along with fresh seafood and tropical fruits. Special dietary requests, such as vegetarian, vegan, or gluten-free options, are also accommodated.',
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
