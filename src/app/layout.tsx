import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageProvider";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Senkun Tattoo | Black & Grey Illustrative Tattoo Artist | Geneva",
  description: "Senkun - Geneva-based tattoo artist specializing in black & grey illustrative work with fine line and dotwork/stippling. Large-scale pieces: fantasy, mythology, ornamental geometry.",
  keywords: ["tattoo", "tatoueur", "Geneva", "Genève", "black and grey", "fine line", "dotwork", "stippling", "fantasy tattoo", "mythology tattoo"],
  authors: [{ name: "Senkun" }],
  openGraph: {
    title: "Senkun Tattoo | Black & Grey Illustrative Tattoo Artist",
    description: "Geneva-based tattoo artist specializing in black & grey illustrative work with fine line and dotwork/stippling.",
    type: "website",
    locale: "fr_CH",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="antialiased">
        <LanguageProvider>
          <div className="grain-overlay" />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
