import type { Metadata } from "next";
import { 
  Roboto_Slab
} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google';

const ubuntu = Roboto_Slab({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Flatlined",
  description: "Turning the world to code.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-slate-950 max-w-full`}>
        <Navbar/>
        {children}
        <Toaster />
        <Analytics />
      </body>
      <GoogleAnalytics gaId='G-LN3G8VX180' />
    </html>
  );
}
