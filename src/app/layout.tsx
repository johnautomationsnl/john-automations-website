import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "John Automations | AI & Automatisering voor het MKB",
  description:
    "AI-specialist voor het Nederlandse MKB. Custom software, procesautomatisering en AI-integraties die uw bedrijf transformeren. Vraag een gratis AI-Scan aan.",
  keywords: [
    "AI automatisering",
    "MKB",
    "custom software",
    "procesautomatisering",
    "chatbots",
    "AI integratie",
    "Nederland",
    "makelaar",
    "bouw",
  ],
  authors: [{ name: "John Automations" }],
  openGraph: {
    title: "John Automations | AI & Automatisering voor het MKB",
    description:
      "AI-specialist voor het Nederlandse MKB. Custom software, procesautomatisering en AI-integraties.",
    type: "website",
    locale: "nl_NL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased bg-dark-950 text-dark-50`}
      >
        {children}
      </body>
    </html>
  );
}
