import { Users, Heart, Briefcase, Compass, User, Gift } from "lucide-react";
import { Anchor, Ship, Sunrise, Sailboat } from "lucide-react";
import type {
  Audience,
  CharterStyle,
  TripType,
  JumpLink,
  PriceAnchor,
  FAQ,
  Route,
  Destination,
  TripDuration,
} from "@/lib/types";

// ============================================================================
// WhoItsFor Component Data
// ============================================================================

export const audiences: Audience[] = [
  {
    icon: Users,
    title: "Families & kids",
    description: "Family-friendly routes, stable boat recommendations, calm swim stops, and the right pacing. Catamarans are often ideal because of space and stability.",
    color: "from-cyan-500 to-teal-600"
  },
  {
    icon: Heart,
    title: "Couples & romantic getaways",
    description: "Sunset sails, quiet anchor nights, and private time in beautiful places. Great for honeymoons, anniversaries, and proposals.",
    color: "from-rose-500 to-pink-600"
  },
  {
    icon: Briefcase,
    title: "Corporate & team-building groups",
    description: "Sailing creates real connection. It's fun, premium, and relaxed—without feeling formal.",
    color: "from-slate-600 to-gray-700"
  },
  {
    icon: Compass,
    title: "Adventure seekers",
    description: "Longer charters unlock hiking, diving, and off-the-beaten-track islands. If you want exploration, we'll build a route that feels like a real adventure.",
    color: "from-amber-500 to-orange-600"
  },
  {
    icon: User,
    title: "Solo travelers & small friend groups",
    description: "Cabin cruises are perfect here. You get the multi-day experience without paying for a full private charter.",
    color: "from-sky-500 to-blue-600"
  },
  {
    icon: Gift,
    title: "Special occasions",
    description: "Milestone birthdays (50th/60th), honeymoons, anniversaries—tell us what you're celebrating and we'll help plan a surprise onboard.",
    color: "from-purple-500 to-indigo-600"
  },
];

// ============================================================================
// CharterStyles Component Data
// ============================================================================

export const styles: CharterStyle[] = [
  {
    icon: Anchor,
    title: "Private Sailing Yachts in Phuket",
    description: "A sailing yacht is the classic choice. You get the true feeling of sailing, a relaxed pace, and a \"real boat holiday\" vibe. It's perfect for couples, smaller groups, and anyone who loves the romance of sails and sea breeze.",
    link: "/sailing-yachts-phuket",
    gradient: "from-sky-500 to-blue-600"
  },
  {
    icon: Ship,
    title: "Catamaran Charters in Phuket",
    description: "Catamarans are all about space and comfort. They're stable, family-friendly, and great for groups who want more lounging areas, shade, and a social deck layout.",
    link: "/catamaran-charters-phuket",
    gradient: "from-cyan-500 to-teal-600"
  },
  {
    icon: Sunrise,
    title: "Overnight & Multi-Day Sailing",
    description: "If you want the best overall experience, go overnight. You get quiet mornings at anchor, less rushing, and routes day trips simply can't reach.",
    link: "/overnight-sailing-trips-phuket",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    icon: Users,
    title: "Cabin Cruises Phuket",
    description: "Want a multi-day sailing trip without renting a whole private boat? Cabin cruises let you book by the cabin. It's ideal for solo travelers, couples, and small groups who still want incredible island-hopping at a lower cost.",
    link: "/cabin-cruises-phuket",
    gradient: "from-purple-500 to-indigo-600"
  },
  {
    icon: Sailboat,
    title: "Bareboat Charter Phuket",
    description: "For confident sailors who want full freedom. Bareboat usually requires a license and/or proven sailing experience. If you qualify, it's an amazing way to explore on your own terms.",
    link: "/bareboat-charter-phuket",
    gradient: "from-slate-600 to-gray-700"
  },
];

// ============================================================================
// CatamaranVsSailing Component Data
// ============================================================================

export const catamaranFeatures: string[] = [
  "More space and stability (great for kids and groups)",
  "More shade and lounging areas",
  "A \"floating villa\" feel",
  "A very social layout",
];

export const sailingFeatures: string[] = [
  "A more classic sailing sensation",
  "A sportier, authentic sailboat experience",
  "Great value for couples and smaller groups",
  "A cozy, romantic atmosphere",
];

// ============================================================================
// SailingPhuket Component Data
// ============================================================================

export const benefits: string[] = [
  "Warm water and tropical island scenery",
  "Routes for every mood: relaxed, romantic, adventurous",
  "Options for every group: families, couples, corporate teams, friends, solo travelers",
  "Day trips, sunset sails, or multi-day exploration",
];

export const tripTypes: TripType[] = [
  {
    number: "1",
    title: "Day Sailing (private)",
    description: "Ideal if you want a full day on the water with swimming, snorkeling, and island stops—without staying overnight.",
    gradient: "from-sky-500 to-blue-600"
  },
  {
    number: "2",
    title: "Sunset Sailing",
    description: "Perfect for couples, families, and celebrations. Shorter, scenic, and high-impact.",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    number: "3",
    title: "Overnight Sailing (best experience)",
    description: "More time, more calm, more \"real holiday.\" You'll explore deeper and avoid the rushed feeling of day-trip logistics.",
    gradient: "from-cyan-500 to-teal-600"
  },
];

// ============================================================================
// JumpLinks Component Data
// ============================================================================

export const links: JumpLink[] = [
  { id: "charter-style", label: "Choose Your Charter Style" },
  { id: "sailing-phuket", label: "Sailing Phuket" },
  { id: "overnight-sailing", label: "Overnight Sailing Trips Phuket" },
  { id: "catamaran-vs-sailing", label: "Catamaran vs Sailing Yacht" },
  { id: "popular-routes", label: "Most Popular Routes" },
  { id: "whats-included", label: "What's Included" },
  { id: "pricing", label: "How Pricing Works" },
  { id: "booking", label: "How Booking Works" },
  { id: "faqs", label: "FAQs" },
  { id: "contact", label: "Contact Us" },
];

// ============================================================================
// WhatsIncluded Component Data
// ============================================================================

export const typicallyIncluded: string[] = [
  "Professional crew (not for bareboat charters)",
  "Safety equipment",
  "Standard onboard setup and facilities",
  "Route planning by our management team, support and local guidance",
];

export const oftenOptional: string[] = [
  "Meals and drinks packages",
  "National park fees (route-dependent)",
  "Special occasion setup",
  "Extra water toys",
  "Everything that is legal can be arranged with enough time",
];

// ============================================================================
// Booking Component Data
// ============================================================================

export const steps: string[] = [
  "Send dates + group size and tell us what experience you are looking for.",
  "Choose your style (sailing yacht / catamaran / cabin cruise / bareboat)",
  "We recommend the best boats + routes (based on season and goals)",
  "Confirm and relax",
];

export const inquiryChecklist: string[] = [
  "How many guests?",
  "Day trip or how many nights?",
  "Preferred yacht?",
  "Family / romantic / adventure / corporate?",
  "Must-see islands (if any)?",
];

export const explorePages: string[] = [
  "Sailing Yachts in Phuket",
  "Catamaran Charters in Phuket",
  "Sailing Itineraries Phuket",
  "Cabin Cruises Phuket",
  "Bareboat Charter Phuket",
];

// ============================================================================
// Pricing Component Data
// ============================================================================

export const pricingFactors: string[] = [
  "Boat type",
  "Private charter vs cabin cruise",
  "Trip length (day / overnight)",
  "Season and demand",
  "Group size and comfort level",
];

export const priceAnchors: PriceAnchor[] = [
  { service: "Day sailing trips", price: "from 29,900 THB", color: "from-sky-500 to-blue-600" },
  { service: "Sunset sailing", price: "from 24,900 THB", color: "from-amber-500 to-orange-600" },
  { service: "Overnight charters", price: "from 1000 Euro per night", color: "from-cyan-500 to-teal-600" },
  { service: "Cabin cruises", price: "from 1998 Euro per cabin for 5 nights", color: "from-purple-500 to-indigo-600" },
];

// ============================================================================
// FAQs Component Data
// ============================================================================

export const faqs: FAQ[] = [
  {
    question: "What is the best time for Sailing Phuket?",
    answer: "Most guests prefer calmer, drier months, but Phuket can work year-round with the right route choices. We'll recommend the best itinerary for your exact dates based on season, sea conditions, and comfort level. Note, the prices in low season between May and October are ca. 30-40% cheaper!",
  },
  {
    question: "Is a catamaran better than a sailing yacht in Phuket?",
    answer: "Catamarans offer more space and stability, which families and groups love. Sailing yachts feel more classic and \"real sailing.\" The best choice depends on your group size, comfort preferences, and the vibe you want onboard.",
  },
  {
    question: "How many nights do you recommend for the best experience?",
    answer: "If possible, we recommend 5 nights minimum. That's when you can reach quieter areas like Koh Rok and Koh Ha, which usually feel much less crowded than Phuket's most popular day-trip destinations.",
  },
  {
    question: "Are your Sailing Phuket trips family-friendly?",
    answer: "Yes. We can recommend stable boats, calm swim stops, and family-friendly routes. Catamarans are often the easiest choice for kids because they have more space, shade, and stability—especially for relaxed day trips.",
  },
  {
    question: "Is Phuket sailing good for couples and romantic getaways?",
    answer: "Absolutely. Couples love sunset sails and overnight anchorages for privacy and atmosphere. If it's a honeymoon, anniversary, or proposal, tell us early and we'll recommend the best boat and help plan a surprise.",
  },
  {
    question: "Can solo travelers book without renting a full boat?",
    answer: "Yes. With Cabin Cruises Phuket, you can book by the cabin. It's ideal for solo travelers, couples, or small friend groups who want a multi-day sailing experience at a lower cost than a private charter.",
  },
  {
    question: "What's included in a crewed sailing charter?",
    answer: "Inclusions vary by boat, but crewed charters typically include the boat, crew, all meals, safety equipment, and standard onboard setup. Extras like drinks, park fees, and special setups depend on the vessel and route. We confirm everything upfront.",
  },
  {
    question: "Do we need a license for bareboat charter Phuket?",
    answer: "Usually yes. Bareboat charters typically require a valid license and/or strong proof of experience. If you're unsure, we can recommend a crewed charter instead or discuss what's required based on your sailing background.",
  },
  {
    question: "Can you help us choose the best itinerary?",
    answer: "Yes. Share your dates, number of nights, group size, and priorities (snorkeling, beaches, quiet islands, adventure). We'll recommend a realistic route that suits the season and gives you the best overall experience.",
  },
];

// ============================================================================
// FAQSchema Component Data
// ============================================================================

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the best time for Sailing Phuket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most guests prefer calmer, drier months, but Phuket can work year-round with the right route choices. We'll recommend the best itinerary for your exact dates based on season, sea conditions, and comfort level."
      }
    },
    {
      "@type": "Question",
      "name": "Is a catamaran better than a sailing yacht in Phuket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Catamarans offer more space and stability, which families and groups love. Sailing yachts feel more classic and real sailing. The best choice depends on your group size, comfort preferences, and the vibe you want onboard."
      }
    },
    {
      "@type": "Question",
      "name": "How many nights do you recommend for the best experience?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "If possible, we recommend 5 nights minimum. That's when you can reach quieter areas like Koh Rok and Koh Ha, which usually feel much less crowded than Phuket's most popular day-trip destinations."
      }
    },
    {
      "@type": "Question",
      "name": "Are your Sailing Phuket trips family-friendly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. We can recommend stable boats, calm swim stops, and family-friendly routes. Catamarans are often the easiest choice for kids because they have more space, shade, and stability."
      }
    },
    {
      "@type": "Question",
      "name": "Is Phuket sailing good for couples and romantic getaways?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. Couples love sunset sails and overnight anchorages for privacy and atmosphere. If it's a honeymoon, anniversary, or proposal, tell us early and we'll recommend the best boat and help plan a surprise."
      }
    },
    {
      "@type": "Question",
      "name": "Can solo travelers book without renting a full boat?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. With Cabin Cruises Phuket, you can book by the cabin. It's ideal for solo travelers, couples, or small friend groups who want a multi-day sailing experience at a lower cost than a private charter."
      }
    },
    {
      "@type": "Question",
      "name": "What's included in a crewed sailing charter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Inclusions vary by boat, but crewed charters typically include the boat, crew, all meals, safety equipment, and standard onboard setup. Extras like drinks, park fees, and special setups depend on the vessel and route."
      }
    },
    {
      "@type": "Question",
      "name": "Do we need a license for bareboat charter Phuket?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Usually yes. Bareboat charters typically require a valid license and/or strong proof of experience. If you're unsure, we can recommend a crewed charter instead."
      }
    },
    {
      "@type": "Question",
      "name": "Can you help us choose the best itinerary?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Share your dates, number of nights, group size, and priorities. We'll recommend a realistic route that suits the season and gives you the best overall experience."
      }
    }
  ]
};

// ============================================================================
// PopularRoutes Component Data
// ============================================================================

export const routes: Route[] = [
  {
    name: "Racha Islands",
    subtitle: "(Racha Yai / Racha Noi)",
    description: "A favorite for clear water and snorkeling. Great for both sailing yachts and catamarans. A strong choice when you want a clean \"tropical island day\" without overcomplicating the plan.",
    image: "/assets/images/routes/racha-island.webp"
  },
  {
    name: "Coral Island",
    subtitle: "",
    description: "Easy, relaxed, and popular for swimming and beach time. Great for families, mixed groups, and visitors who want a fun day on the sea with simple logistics.",
    image: "/assets/images/routes/coral-island.webp"
  },
  {
    name: "Phang Nga Bay",
    subtitle: "",
    description: "Iconic limestone scenery, calm water, and incredible photos. Often perfect for mixed groups, corporate outings, and travelers who love sightseeing and dramatic landscapes.",
    image: "/assets/images/routes/phang-nga-bay.jpg"
  },
  {
    name: "Koh Rok & Koh Ha",
    subtitle: "(best with 5+ nights)",
    description: "If your goal is fewer crowds and more \"wow,\" these routes shine on longer charters. Quiet anchorages and that rare feeling of space.",
    image: "/assets/images/routes/koh-rok-koh-ha.jpg"
  },
];

// ============================================================================
// OvernightSailing Component Data
// ============================================================================

export const overnightBenefits: string[] = [
  "You don't rush back to the pier",
  "You swim when bays are calm",
  "You enjoy sunset and sunrise at anchor",
  "You can reach the best islands with fewer crowds",
  "You get time for snorkeling, beaches, viewpoints, and \"do nothing\" moments",
];

export const destinations: Destination[] = [
  {
    name: "Koh Rok",
    description: "Clear water and a quieter, more remote feel",
  },
  {
    name: "Koh Ha",
    description: "Beautiful lagoons and amazing snorkeling conditions",
  },
  {
    name: "Butang Islands (7+ nights)",
    description: "Fewest crowds, amazing landscapes over and under water",
  },
];

export const tripDurations: TripDuration[] = [
  {
    duration: "1–2 nights",
    description: "Nearby highlights like Phi Phi and Racha Islands",
  },
  {
    duration: "3–4 nights",
    description: "A bigger loop with more variety of destinations",
  },
  {
    duration: "5-14 nights",
    description: "Absolute best destinations and deeper exploration of Thai islands and culture",
  },
];

