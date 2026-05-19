import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' });
const inter    = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'MBI Bormann Immobilien – Ihr Immobilienmakler für Norderstedt & Hamburg',
  description:
    'MBI Bormann Immobilien Vermittlungsgesellschaft mbH – persönliche Beratung, professionelle Vermarktung und Rundum-Service für Verkäufer, Käufer, Mieter und Vermieter in Norderstedt, Hamburg und Umgebung.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
