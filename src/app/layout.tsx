import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vote Landon Hale for MTSU Esports President",
  description: "A comprehensive plan to elevate MTSU Esports through improved organization, expanded opportunities, and enhanced member experiences.",
  metadataBase: new URL(process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000'),
  openGraph: {
    title: "Vote Landon Hale for MTSU Esports President",
    description: "A comprehensive plan to elevate MTSU Esports through improved organization, expanded opportunities, and enhanced member experiences.",
    images: [{ url: 'https://votelandon.info/landon.jpg', width: 1200, height: 630, alt: 'Landon Hale' }],
  },
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable} scroll-smooth ${inter.className}`}>
      <body>
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Analytics />
      </body>
    </html>
  );
}
