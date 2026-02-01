import React from "react";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

export const metadata: Metadata = {
  title: "Planejai | Gerencie suas Finanças",
  description:
    "A experiência definitiva em gestão financeira pessoal. Planeje metas, acompanhe gastos e veja seu patrimônio crescer com assistente IA, gráficos inteligentes e controle total. 100% gratuito.",
  keywords: [
    "finanças pessoais",
    "controle de gastos",
    "planejamento financeiro",
    "assistente financeiro IA",
    "gestão de dinheiro",
    "orçamento pessoal",
    "app financeiro gratuito",
    "acompanhamento de despesas",
    "metas financeiras",
    "planejai",
  ],
  authors: [{ name: "Planejai" }],
  creator: "Planejai",
  publisher: "Planejai",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://planejai.cloud",
    title: "Planejai | Gerencie suas Finanças com Inteligência Artificial",
    description:
      "Controle suas finanças de forma simples e inteligente. Assistente IA, gráficos detalhados e ferramentas gratuitas para você organizar seu dinheiro.",
    siteName: "Planejai",
    images: [
      {
        url: "/image/logo-planejai.png",
        width: 1200,
        height: 630,
        alt: "Planejai - Gestão Financeira Inteligente",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Planejai | Gerencie suas Finanças com Inteligência Artificial",
    description:
      "Controle suas finanças de forma simples e inteligente. Assistente IA, gráficos detalhados e ferramentas gratuitas.",
    images: ["/image/logo-planejai.png"],
    creator: "@planejai",
  },
  icons: {
    icon: "/image/logo-planejai.ico",
    shortcut: "/image/logo-planejai.ico",
    apple: "/image/logo-planejai.ico",
  },
  manifest: "/manifest.json",
  metadataBase: new URL("https://planejai.cloud"),
  alternates: {
    canonical: "https://planejai.cloud",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#030712" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
