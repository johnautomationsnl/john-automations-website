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
  metadataBase: new URL("https://melvin-automations.vercel.app"),
  title: "Melvin Automations | AI & Automatisering voor het MKB",
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
  authors: [{ name: "Melvin Automations" }],
  icons: {
    icon: "/favicon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Melvin Automations | AI & Automatisering voor het MKB",
    description:
      "AI-specialist voor het Nederlandse MKB. Custom software, procesautomatisering en AI-integraties die uw bedrijf transformeren.",
    type: "website",
    locale: "nl_NL",
    siteName: "Melvin Automations",
    images: ["/opengraph-image"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Melvin Automations | AI & Automatisering voor het MKB",
    description:
      "AI-specialist voor het Nederlandse MKB. Custom software, procesautomatisering en AI-integraties.",
    images: ["/opengraph-image"],
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
