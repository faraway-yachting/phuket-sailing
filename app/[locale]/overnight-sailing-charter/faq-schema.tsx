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
          text: 'Prices depend on the type of boat you choose. Budget options such as the Hot Chilli speedboat are typically around €900 – €1,500 per night. Mid-tier catamarans like Amadeus usually range from €1,000 – €1,800 per night. For a more luxurious experience, larger catamarans and yachts can cost €2,500 – €5,000 per night, and superyachts are generally in the €10,000 – €15,000 per night range. Most pricing includes the crew, meals, water activities, and fuel, while park fees and alcoholic drinks are additional.',
        },
      },
      {
        '@type': 'Question',
        name: 'What islands can I visit on an overnight sailing charter from Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'The islands you can visit depend on the duration of your charter. For 2–4 night trips, you can explore Phang Nga Bay, the Phi Phi Islands, and the Racha Islands—perfect for first-time sailors or those with limited time. A 5-night charter allows you to reach more remote destinations such as Koh Mook, Koh Rok, and Koh Ha, offering a mix of adventure and secluded beaches. Longer charters of 7 nights or more take you to the Similan Islands and the Butang Archipelago, ideal for divers and travelers seeking a more exclusive, off-the-beaten-path experience.',
        },
      },
      {
        '@type': 'Question',
        name: 'How many nights do you recommend for overnight sailing in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "For the most rewarding experience, we suggest a minimum of five nights. This allows you to explore the region's standout destinations, including the more secluded islands of Koh Ha, Koh Rok, and Koh Mook, which showcase the best of Phuket's overnight sailing adventures.",
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
          text: 'Guests usually begin the day with a swim at sunrise, followed by breakfast on the boat. The morning is often spent exploring or snorkeling at nearby islands, then sailing to the next location with lunch served onboard. Afternoons include more cruising and island stops, while evenings are for relaxing, enjoying the sunset, or dining onboard. The itinerary can be fully customized to suit your preferences.',
        },
      },
      {
        '@type': 'Question',
        name: 'Is overnight sailing in Phuket safe?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: "Yes, overnight sailing in Phuket is safe. All yachts come with up-to-date navigation equipment, safety gear, and life vests. The crew undergoes regular safety training, and you'll receive a full safety briefing from an experienced sailor before departure. Routes are carefully planned using current weather information to ensure a secure and enjoyable experience.",
        },
      },
      {
        '@type': 'Question',
        name: 'What is the difference between an overnight sailing charter and a cabin cruise in Phuket?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'An overnight sailing charter lets you experience remote islands, enjoy sunsets, nights, and sunrises at sea, and avoid the daytime crowds, offering a more private and immersive adventure. In contrast, a cabin cruise typically focuses on shorter trips with shared accommodations and daytime excursions, providing less flexibility and time to explore secluded spots.',
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
          text: 'Meals are freshly prepared on board by a private chef, featuring a mix of Thai and international dishes. You can customize the menu according to your dietary needs, including vegetarian, vegan, or allergy-friendly options, and special requests for premium or western-style meals can also be accommodated.',
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
