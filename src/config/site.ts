export interface BusinessConfig {
  name: string;
  legalName: string;
  tagline: string;
  heroHeadline: string;
  heroSubheadline: string;
  phone: {
    display: string;
    raw: string;
    href: string;
  };
  whatsapp: {
    display: string;
    raw: string;
    defaultMessage: string;
    url: string;
  };
  email: string;
  address: {
    street: string;
    area: string;
    city: string;
    postcode: string;
    country: string;
    display: string;
  };
  openingHours: {
    days: string;
    hours: string;
    emergency: string;
  };
  socials: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    tiktok?: string;
    youtube?: string;
  };
  serviceAreas: string[];
}

export const siteConfig: BusinessConfig = {
  name: "COMFORT HEATING AND PLUMBING LTD",
  legalName: "Comfort Heating and Plumbing Ltd",
  tagline: "HEATING • PLUMBING • GAS",
  heroHeadline: "Heating, Plumbing & Gas Services You Can Trust",
  heroSubheadline: "Reliable heating, plumbing and gas services for homes and businesses. Quality workmanship, honest advice and friendly local service.",
  phone: {
    display: "0800 123 4567",
    raw: "+448001234567",
    href: "tel:+448001234567",
  },
  whatsapp: {
    display: "Chat on WhatsApp",
    raw: "+447000000000",
    defaultMessage: "Hello Comfort Heating and Plumbing Ltd, I would like to ask about your services.",
    url: "https://wa.me/447000000000?text=Hello%20Comfort%20Heating%20and%20Plumbing%20Ltd%2C%20I%20would%20like%20to%20ask%20about%20your%20services.",
  },
  email: "enquiries@comfortheatingandplumbing.co.uk",
  address: {
    street: "100 Great Portland Street",
    area: "Marylebone",
    city: "London",
    postcode: "W1W 6PQ",
    country: "United Kingdom",
    display: "London & Surrounding Areas, UK",
  },
  openingHours: {
    days: "Monday – Friday",
    hours: "08:00 – 18:00",
    emergency: "24/7 Emergency Repairs Available",
  },
  socials: {
    facebook: "https://facebook.com/comfortheatingplumbing",
    instagram: "https://instagram.com/comfortheatingplumbing",
    linkedin: "https://linkedin.com/company/comfortheatingplumbing",
  },
  serviceAreas: [
    "Central London",
    "Greater London",
    "Surrey",
    "Kent",
    "Essex",
    "Hertfordshire",
    "Berkshire",
  ],
};

export const primaryServices = [
  {
    id: "boiler-installation",
    title: "Boiler Installation",
    shortDesc: "Install new energy-efficient boilers for homes and businesses.",
    fullDesc: "We install energy-efficient new boilers for homes and businesses, keeping your property warm and reducing energy bills.",
    icon: "Flame",
    features: [
      "Energy-efficient boilers",
      "Expert local installation",
      "Free initial quote",
      "Full manufacturer warranty",
    ],
  },
  {
    id: "boiler-repairs",
    title: "Boiler Repairs",
    shortDesc: "Fast repairs to get your heating back up and running.",
    fullDesc: "Fast and reliable boiler repairs to get your heating and hot water working again quickly.",
    icon: "Wrench",
    features: [
      "Rapid fault finding",
      "All major brands repaired",
      "Clear upfront prices",
      "Reliable local response",
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing",
    shortDesc: "Repairs, installations and general plumbing work.",
    fullDesc: "From fixing leaks and unblocking pipes to full plumbing installations for domestic and commercial properties.",
    icon: "Droplets",
    features: [
      "General plumbing repairs",
      "Leak fixes & pipework",
      "Tap & toilet installations",
      "Domestic & commercial plumbing",
    ],
  },
  {
    id: "gas-services",
    title: "Gas Services",
    shortDesc: "Safe gas installations, servicing and repairs.",
    fullDesc: "Safe gas pipework, appliance fitting, annual gas servicing and safety checks carried out by qualified specialists.",
    icon: "ShieldAlert",
    features: [
      "Gas safety checks",
      "Appliance fitting & servicing",
      "Pipework repairs",
      "Safe & certified work",
    ],
  },
  {
    id: "bathrooms",
    title: "Bathrooms",
    shortDesc: "Complete bathroom plumbing and installation.",
    fullDesc: "Complete plumbing installations for new bathrooms, showers, wet rooms and ensuite upgrades.",
    icon: "Bath",
    features: [
      "Full bathroom plumbing",
      "Showers & thermostatic valves",
      "Wet room installations",
      "Sanitaryware fitting",
    ],
  },
  {
    id: "underfloor-heating",
    title: "Underfloor Heating",
    shortDesc: "Modern heating systems for improved comfort.",
    fullDesc: "Efficient wet underfloor heating systems installed to deliver comfortable, even warmth throughout your property.",
    icon: "Layers",
    features: [
      "Even floor heating",
      "Energy-efficient design",
      "Multi-zone thermostats",
      "Retrofit & new builds",
    ],
  },
  {
    id: "hot-water-systems",
    title: "Hot Water Systems",
    shortDesc: "Reliable hot water installations and repairs.",
    fullDesc: "Unvented hot water cylinders and high-pressure hot water systems designed for steady water pressure across all taps.",
    icon: "Waves",
    features: [
      "Unvented hot water cylinders",
      "High water pressure",
      "System upgrades",
      "Annual servicing",
    ],
  },
  {
    id: "emergency-repairs",
    title: "Emergency Repairs",
    shortDesc: "Quick response for urgent plumbing and heating issues.",
    fullDesc: "Fast attendance for urgent leaks, burst pipes, and sudden heating failures when you need help most.",
    icon: "Clock",
    features: [
      "Quick local response",
      "Urgent leak isolation",
      "Heating restores",
      "Friendly emergency advice",
    ],
  },
];
