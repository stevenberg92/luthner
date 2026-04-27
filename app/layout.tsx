import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Luthner Estates – Premium Immobilieninvestitionen",
  description:
    "Exklusive Immobilieninvestitionen mit Geschwindigkeit, Präzision und Vertrauen. Wir transformieren Liegenschaften in hochwertige Anlagen.",
  openGraph: {
    title: "Luthner Estates – Premium Immobilieninvestitionen",
    description:
      "Exklusive Immobilieninvestitionen mit Geschwindigkeit, Präzision und Vertrauen.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className={`${serif.variable} ${sans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
