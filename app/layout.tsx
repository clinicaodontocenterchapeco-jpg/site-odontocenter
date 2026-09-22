import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odonto Center Chapecó | Clínica Odontológica em Chapecó",
  description:
    "Clínica odontológica em Chapecó com atendimento humanizado, tecnologia e tratamentos personalizados. Agende sua avaliação na Odonto Center.",
  openGraph: {
    title: "Odonto Center Chapecó",
    description:
      "Tecnologia, cuidado e tratamentos personalizados em Chapecó.",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Odonto Center Chapecó",
    description:
      "Tecnologia, cuidado e tratamentos personalizados em Chapecó.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geist.variable} antialiased`}>{children}</body>
    </html>
  );
}
