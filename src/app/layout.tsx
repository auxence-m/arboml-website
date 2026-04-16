import type { Metadata } from "next";
import {Montserrat, Open_Sans} from "next/font/google";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

import { Analytics } from "@vercel/analytics/next"
import ScrollToTop from "@/components/ScrollToTop";

const montserrat = Montserrat({
    weight: ["600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-headings",
    display: "swap"
});

const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-body",
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
        "Abattage d'arbres et d'arbustes",
        "Abattage Boucherville",
        "Élagage Boucherville",
        "Émondage Boucherville",
        "Coupe d'arbres Boucherville",
        "Taille de haies Boucherville",
        "Haubanage Boucherville",
        "Plantations d’arbres et arbustes",
        "Fertilisation et décompactions de sol",
        "Traitement de plaies",
        "Diagnostic d'arbres et d'arbustes",
        "Évaluation de la santé des arbres",
        "Traitement des maladies des arbres",
        "Entretien des arbres Boucherville",
        "Arboriste certifié Boucherville",
    ],
    description: "Services d'entretien d'arbres et d'arbustes à Boucherville et sur la rive-Sud de Montréal",
    generator: 'Next.js',
    applicationName: "ArboML",
    metadataBase: new URL("https://www.arboml.ca"),
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode}>) {
  return (
    <html lang="fr">
      <body className={`${montserrat.variable} ${openSans.variable} antialiased flex h-full flex-col`}>
        <Header />
        <main>
            {children}
            <ScrollToTop />
            <Analytics />
        </main>
        <Footer />
      </body>
    </html>
  );
}
