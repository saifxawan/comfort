import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { siteConfig } from "@/config/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Comfort Heating and Plumbing Ltd | UK Heating & Gas Engineers",
  description:
    "Premier UK heating, gas and plumbing engineering services for domestic and commercial clients across Greater London & Home Counties. Certified workmanship, boiler installations, and 24/7 support.",
  keywords: [
    "Comfort Heating and Plumbing Ltd",
    "Heating Engineer UK",
    "Gas Safe Engineer London",
    "Plumbing Services London",
    "Boiler Replacement UK",
    "Commercial Gas Services",
    "Underfloor Heating Installation",
  ],
  authors: [{ name: "Comfort Heating and Plumbing Ltd" }],
  metadataBase: new URL("https://www.comfortheatingandplumbing.co.uk"),
  openGraph: {
    title: "Comfort Heating and Plumbing Ltd | Engineered for Comfort. Built for Life.",
    description:
      "High-end British heating, gas and plumbing solutions for modern homes and commercial buildings.",
    url: "https://www.comfortheatingandplumbing.co.uk",
    siteName: "Comfort Heating and Plumbing Ltd",
    images: [
      {
        url: "/company_logo.png",
        width: 1200,
        height: 630,
        alt: "Comfort Heating and Plumbing Ltd Logo",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Comfort Heating and Plumbing Ltd",
    description: "Engineered for Comfort. Built for Life.",
    images: ["/company_logo.png"],
  },
  icons: {
    icon: "/company_logo.png",
    shortcut: "/company_logo.png",
    apple: "/company_logo.png",
  },
};

// Schema.org LocalBusiness & HVACBusiness JSON-LD
const schemaOrgData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://www.comfortheatingandplumbing.co.uk/#organization",
      name: siteConfig.name,
      legalName: siteConfig.legalName,
      url: "https://www.comfortheatingandplumbing.co.uk",
      logo: "https://www.comfortheatingandplumbing.co.uk/company_logo.png",
      image: "https://www.comfortheatingandplumbing.co.uk/company_logo.png",
      telephone: siteConfig.phone.raw,
      email: siteConfig.email,
      priceRange: "£££",
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        postalCode: siteConfig.address.postcode,
        addressCountry: "GB",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 51.518,
        longitude: -0.144,
      },
      areaServed: siteConfig.serviceAreas,
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:00",
          closes: "18:00",
        },
      ],
    },
    {
      "@type": "Plumber",
      name: siteConfig.name,
      telephone: siteConfig.phone.raw,
      areaServed: "Greater London & Home Counties, UK",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgData) }}
        />
      </head>
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-brand-warmWhite text-brand-deepNavy`}>
        {children}
        <WhatsAppFloat />
        <CookieConsent />
      </body>
    </html>
  );
}
