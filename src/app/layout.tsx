import type { Metadata } from "next";
import { Caveat, Source_Serif_4, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RemarqueWidget from "@/components/RemarqueWidget";
import { CompteProvider } from "@/components/compte/CompteProvider";
import { Analytics } from "@vercel/analytics/next";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-source-serif",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

const workSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-work-sans",
  weight: ["400", "500", "600", "700"],
});

// Fonte manuscrite pour les touches « copie corrigée » (terracotta) — usage
// décoratif, réservé aux annotations de marge (classe .font-hand).
const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.maitrizz.fr"),
  title: "Maitrizz · Préparez le concours CRPE de professeur des écoles",
  description:
    "Préparez le CRPE avec des fiches de cours, des exercices corrigés et des sujets blancs construits à partir des programmes officiels et des rapports de jury.",
  // Bloc volontairement minimal : pas de og:title/og:description globaux, pour
  // que chaque page partagée retombe sur son propre <title> plutôt que sur
  // celui de l'accueil.
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Maitrizz",
  },
  verification: { google: "WrGx2EvcFkV8l4Gz1zTMZeGTTkashlCZglY8nwqw5oI" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" data-theme="maitrizz" className={`${sourceSerif.variable} ${workSans.variable} ${caveat.variable}`}>
      <body className="min-h-screen flex flex-col">
        {/* Le fournisseur enveloppe tout le site : la barre de navigation doit
            connaître la session, et le magasin de progression doit être branché
            dès la première page, quelle qu'elle soit. */}
        <CompteProvider>
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
          <RemarqueWidget />
        </CompteProvider>
        {/* Mesure d'audience Vercel : sans cookie et sans donnée personnelle,
            donc pas de bandeau de consentement à afficher. Elle sert à savoir
            ce que les candidats ouvrent réellement, plutôt qu'à décider au
            jugé. Ne collecte ni adresse IP conservée, ni identifiant. */}
        <Analytics />
      </body>
    </html>
  );
}
