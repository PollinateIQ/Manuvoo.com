import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/site/navbar";
import { Footer } from "@/components/site/footer";
import { SplashScreen } from "@/components/site/splash-screen";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Manuvoo — Hospitality Operations Platform",
    template: "%s — Manuvoo",
  },
  description:
    "Run smarter hospitality operations — from table to cash-up. Orders, bills, payments, menu, inventory, and staff in one real-time platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-dvh bg-bg1 text-text1">
          <SplashScreen />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
