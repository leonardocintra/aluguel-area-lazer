import type { Metadata } from "next";
import { Noto_Serif, Plus_Jakarta_Sans, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VerdeLuxo Eventos - O cenário perfeito para seus momentos",
  description: "Aluguel de área de lazer para aniversários, chás revelação e eventos familiares em um refúgio de paz e natureza.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={cn("h-full", "antialiased", notoSerif.variable, plusJakartaSans.variable, "font-sans", geist.variable)}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body-md text-body-md min-h-full flex flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
