import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fahima Sultana — Sociologist & Researcher",
    template: "%s | Fahima Sultana",
  },
  description:
    "Portfolio of Fahima Sultana — MA Sociology, University of Memphis. Researcher specializing in medical debt, health inequities, and social determinants of health.",
  keywords: ["Fahima Sultana", "Sociology", "Researcher", "University of Memphis", "Medical Debt", "Health Inequities"],
  authors: [{ name: "Fahima Sultana" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fahima Sultana",
    title: "Fahima Sultana — Sociologist & Researcher",
    description:
      "Portfolio of Fahima Sultana — MA Sociology, University of Memphis. Researcher specializing in medical debt, health inequities, and social determinants of health.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fahima Sultana — Sociologist & Researcher",
    description:
      "Portfolio of Fahima Sultana — MA Sociology, University of Memphis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
