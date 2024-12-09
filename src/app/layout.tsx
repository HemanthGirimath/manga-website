import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";
import { Toaster } from "@/components/UI/toaster";
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import { Providers } from "@/components/providers";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} container mx-auto`}>
        <Providers>
          <Navbar />
          {children}
          <SpeedInsights />
        </Providers>
        <Toaster />
        <Script async src="https://checkout.razorpay.com/v1/checkout.js" />
      </body>
    </html>
  );
}