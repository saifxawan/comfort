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
  heroHeadline: "ENGINEERED FOR COMFORT. BUILT FOR LIFE.",
  heroSubheadline: "Professional heating, gas and plumbing solutions for homes and businesses. Reliable workmanship, expert service and engineered solutions designed around your comfort.",
  phone: {
    display: "0800 123 4567",
    raw: "+448001234567",
    href: "tel:+448001234567",
  },
  whatsapp: {
    display: "Chat on WhatsApp",
    raw: "+447000000000",
    defaultMessage: "Hello Comfort Heating and Plumbing Ltd, I would like to enquire about your services.",
    url: "https://wa.me/447000000000?text=Hello%20Comfort%20Heating%20and%20Plumbing%20Ltd%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.",
  },
  email: "enquiries@comfortheatingandplumbing.co.uk",
  address: {
    street: "100 Great Portland Street",
    area: "Marylebone",
    city: "London",
    postcode: "W1W 6PQ",
    country: "United Kingdom",
    display: "Greater London & Home Counties, UK",
  },
  openingHours: {
    days: "Monday – Friday",
    hours: "08:00 – 18:00",
    emergency: "24/7 Emergency Support Available",
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
    id: "heating",
    title: "Heating & Central Heating",
    shortDesc: "Boiler systems, central heating upgrades, radiators, and smart heating controls engineered for maximum efficiency.",
    fullDesc: "Complete domestic and commercial heating solutions designed for reliability and energy savings. From system design and boiler installation to full central heating overhauls and intelligent thermostat integrations.",
    icon: "Flame",
    features: [
      "A-rated energy efficient boiler installations",
      "Power flushing and thermal imaging diagnostics",
      "Smart zoning & heat control systems",
      "Annual servicing & maintenance plans",
    ],
  },
  {
    id: "gas",
    title: "Gas Services",
    shortDesc: "Safety-certified gas engineering, gas pipework, appliance connections, and commercial gas testing.",
    fullDesc: "Comprehensive gas engineering performed strictly to British standards. We deliver safe, precise installations, gas soundness testing, meter repositioning, and safety certifications.",
    icon: "ShieldAlert",
    features: [
      "Gas pipework installation & safety testing",
      "Appliance connections & commissioning",
      "Gas pressure & leak diagnostics",
      "Commercial & domestic gas safety compliance",
    ],
  },
  {
    id: "plumbing",
    title: "Plumbing Services",
    shortDesc: "Precision plumbing installations, pipe replacement, main line repairs, and preventative maintenance.",
    fullDesc: "High-grade plumbing solutions for residential developments, modern offices, and period properties. Engineered pipework routing, booster pumps, and reliable water distribution.",
    icon: "Droplets",
    features: [
      "Full pipework installations & re-routing",
      "Mains water pressure boosting systems",
      "Backflow prevention & RPZ valves",
      "Commercial & residential plumbing overhauls",
    ],
  },
  {
    id: "hot-water",
    title: "Hot Water Systems",
    shortDesc: "Unvented hot water cylinders, high-flow systems, electric thermal storage, and commercial calorifiers.",
    fullDesc: "Ensure continuous high-pressure hot water across multiple outlets. We design, fit, and service unvented hot water cylinders and thermal storage solutions tailored to your building demands.",
    icon: "Waves",
    features: [
      "Unvented cylinder installations (G3 compliance)",
      "High-flow mains pressure hot water systems",
      "Thermal expansion vessel servicing",
      "Commercial calorifier maintenance",
    ],
  },
  {
    id: "underfloor-heating",
    title: "Underfloor Heating",
    shortDesc: "Modern wet underfloor heating systems engineered for luxurious, uniform warmth and low energy consumption.",
    fullDesc: "Silent, energy-efficient hydronic underfloor heating. Complete design, manifold setup, insulation, pipe laying, and smart multi-zone temperature regulation.",
    icon: "Layers",
    features: [
      "Hydronic wet underfloor heating design",
      "Multi-zone manifold & actuator controls",
      "Retrofit low-profile UFH overlay panels",
      "Flow rate balancing & thermal calibration",
    ],
  },
  {
    id: "bathroom",
    title: "Bathroom Installations",
    shortDesc: "Bespoke luxury bathroom plumbing, concealed thermostatic valves, wet rooms, and designer sanitaryware.",
    fullDesc: "Architectural bathroom plumbing executed with millimeter precision. Concealed pipework, luxury walk-in wet rooms, frameless glass drainage, and high-spec sanitaryware fitting.",
    icon: "Bath",
    features: [
      "Concealed thermostatic shower valves",
      "Wet room tanking & linear strip drainage",
      "Wall-hung sanitaryware frame systems",
      "Designer brassware & bespoke plumbing",
    ],
  },
  {
    id: "kitchen",
    title: "Kitchen & Utility Plumbing",
    shortDesc: "Commercial and residential kitchen plumbing, waste disposal units, water filtration, and appliance hookups.",
    fullDesc: "Heavy-duty kitchen and utility room plumbing. We install boiling water taps, multi-stage water filtration, grease traps, waste pumps, and high-capacity drainage systems.",
    icon: "Utensils",
    features: [
      "Boiling water tap & filtration system fitting",
      "Commercial kitchen waste & grease traps",
      "Dishwasher & washing machine manifolds",
      "High-flow kitchen sink plumbing",
    ],
  },
  {
    id: "leak-detection",
    title: "Leak Detection & Repairs",
    shortDesc: "Non-invasive acoustic & thermal leak detection, rapid diagnostic isolation, and precision pipework repairs.",
    fullDesc: "Pinpoint hidden pipe leaks without unnecessary structural damage. Utilizing acoustic listening gear, moisture meters, and thermal cameras to locate and resolve leaks rapidly.",
    icon: "Search",
    features: [
      "Non-destructive thermal leak location",
      "Acoustic pipe sounder diagnostics",
      "Trace & access reports for insurance",
      "Rapid main line leak repair",
    ],
  },
];
