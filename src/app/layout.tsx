import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
  weight: ["200", "300", "400", "600", "700", "800"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  weight: ["300", "400", "500"],
  display: "swap",
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
        className={`${bricolage.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans antialiased bg-dark-950 text-warm-100`}
      >
        {children}
      </body>
    </html>
  );
}
