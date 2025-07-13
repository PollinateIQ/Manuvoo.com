import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Manuvoo - Discover & Book South Africa's Best Restaurants",
  description: "Find and book the perfect dining experience in South Africa. Join 500+ partner restaurants and 50K+ happy diners on Manuvoo.",
  keywords: "restaurant booking, South Africa dining, table reservation, restaurant discovery, Cape Town restaurants, Johannesburg restaurants",
  authors: [{ name: "Manuvoo Team" }],
  creator: "Manuvoo",
  publisher: "Manuvoo",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://manuvoo.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Manuvoo - Discover & Book South Africa's Best Restaurants",
    description: "Find and book the perfect dining experience in South Africa. Join 500+ partner restaurants and 50K+ happy diners.",
    url: "https://manuvoo.com",
    siteName: "Manuvoo",
    images: [
      {
        url: "/manuvoo.svg",
        width: 600,
        height: 600,
        alt: "Manuvoo - Restaurant Discovery Platform",
      },
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manuvoo - Restaurant Discovery Platform",
      },
    ],
    locale: "en_ZA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manuvoo - Discover & Book South Africa's Best Restaurants",
    description: "Find and book the perfect dining experience in South Africa.",
    images: ["/manuvoo.svg", "/og-image.png"],
    creator: "@manuvoo",
  },
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
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/manuvoo.svg", type: "image/svg+xml" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/manuvoo.svg", type: "image/svg+xml" },
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { url: "/manuvoo.svg", type: "image/svg+xml" },
      { url: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-inter antialiased">
        <Header />
        {children}
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
