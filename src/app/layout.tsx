import type { Metadata } from "next";
import {DM_Sans, Space_Grotesk} from "next/font/google";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

import "./globals.css";

import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"

const fontHeading = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap"
});

const fontBody = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
    style: ["normal", "italic"],
    display: "swap"
})

export const metadata: Metadata = {
    title : {
        template: "%s | ArboML",
        default: "ArboML",
    },
    keywords: [
        "Services d'arboriste",
        "Arboriste certifié",
        "Abattage d'arbres et ",
        "Abattage Boucherville",
        "Élagage Boucherville",
        "Émondage Boucherville",
        "Coupe d'arbres Boucherville",
        "Taille de haies Boucherville",
        "Haubanage Boucherville",
        "Plantations d’arbres",
        "Fertilisation et décompactions de sol",
        "Traitement de plaies",
        "Diagnostic d'arbres",
        "Évaluation de la santé des arbres",
        "Traitement des maladies des arbres",
        "Entretien des arbres Boucherville",
        "Arboriste certifié Boucherville",
    ],
    description: "Services d'entretien d'arbres (élagage, abattage, taille de haies, etc.) sur toute la Rive-Sud de Montréal.",
    generator: 'Next.js',
    applicationName: "ArboML",
    metadataBase: new URL("https://www.arboml.ca"),
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="fr">
      <body className={`${fontHeading.variable} ${fontBody.variable} bg-surface text-on-surface antialiased`}>
        <Header />
        <main className="w-full pt-20 bg-surface">
            {children}
            <ScrollToTop />
            <Analytics />
            <SpeedInsights />
        </main>
        <Footer />
      </body>
    </html>
  );
}
