import type React from "react"
import type { Metadata } from "next"
import { Fraunces } from "next/font/google"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "Jolart US - Venetian Plaster, Stucco & Microcement Studio NYC",
  description:
    "Transform your walls into art with Jolart US. Expert Venetian plaster, decorative stucco, and microcement services in NYC and Tri-State area. 6+ years of experience.",
  keywords: "venetian plaster, stucco, microcement, NYC, wall finishes, interior design, decorative plaster, New York",
  authors: [{ name: "Jolart US" }],
  creator: "Jolart US",
  publisher: "Jolart US",
  openGraph: {
    title: "Jolart US - Venetian Plaster Studio NYC",
    description:
      "Expert wall finishes and decorative plaster services in New York City. Transform your walls into art.",
    url: "https://jolartus.com",
    siteName: "Jolart US",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Jolart US - Venetian Plaster Studio NYC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Jolart US - Venetian Plaster Studio NYC",
    description: "Expert wall finishes and decorative plaster services in New York City",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://jolartus.com",
  },
  category: "Home Improvement",
  classification: "Business",
  generator: "Next.js",
  applicationName: "Jolart US",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code-here",
    yandex: "yandex-verification-code-here",
    yahoo: "yahoo-site-verification-code-here",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#c9a06a" />
        <meta name="msapplication-TileColor" content="#faf6f1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Jolart US",
              description: "Venetian plaster, stucco, and microcement studio in NYC",
              url: "https://jolartus.com",
              telephone: "(347) 657-2890",
              email: "hello@jolartus.com",
              areaServed: {
                "@type": "State",
                name: "New York",
                containsPlace: [
                  {
                    "@type": "City",
                    name: "New York City",
                  },
                  {
                    "@type": "Place",
                    name: "Tri-State Area",
                  },
                ],
              },
              serviceType: ["Venetian Plaster", "Decorative Stucco", "Microcement"],
              priceRange: "$$",
              image: "https://jolartus.com/og-image.png",
              logo: "https://jolartus.com/logo.png",
              address: {
                "@type": "PostalAddress",
                addressLocality: "New York",
                addressRegion: "NY",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "40.7128",
                longitude: "-74.0060",
              },
              openingHours: "Mo-Fr 08:00-18:00, Sa 09:00-16:00",
              paymentAccepted: "Cash, Credit Card, Check",
              currenciesAccepted: "USD",
              foundingDate: "2018",
              slogan: "Transforming Walls into Art",
              knowsAbout: [
                "Venetian Plaster",
                "Decorative Stucco",
                "Microcement",
                "Wall Finishes",
                "Interior Design",
                "Residential Construction",
                "Commercial Construction",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Wall Finishing Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Venetian Plaster",
                      description: "Elegant, polished finishes with a classic appeal",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Decorative Stucco",
                      description: "Luxurious textures for unique interiors",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Microcement",
                      description: "Modern and durable seamless look",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={`font-sans ${inter.variable} ${fraunces.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
