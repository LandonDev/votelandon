import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { Inter } from "next/font/google";
import { Analytics } from '@vercel/analytics/react';

import { TRPCReactProvider } from "~/trpc/react";

const inter = Inter({ subsets: ["latin"] });

// Get the base URL from environment variables, with custom domain prioritized
const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'http://localhost:3000');

export const metadata: Metadata = {
  title: "Vote Landon Hale for MTSU Esports President",
  description: "A comprehensive plan to elevate MTSU Esports through improved organization, expanded opportunities, and enhanced member experiences.",
  metadataBase: new URL(baseUrl),
  openGraph: {
    title: "Vote Landon Hale for MTSU Esports President",
    description: "A comprehensive plan to elevate MTSU Esports through improved organization, expanded opportunities, and enhanced member experiences.",
    images: [{ url: '/web_preview.png', alt: 'Landon Hale' }],
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
