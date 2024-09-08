import type { Metadata } from "next";

import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google';
import { ubuntu } from "./fonts";

export const metadata: Metadata = {
  title: "Flatlined",
  description: "The visionary coding studio",
  icons: [{ rel: "icon", url: "/icon.svg" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ubuntu.className} bg-slate-950 max-w-full text-fln-white`}>
        <Navbar/>
        <div className="pb-24">{children}</div>
        <Toaster />
        <Analytics />
      </body>
      <GoogleAnalytics gaId='G-LN3G8VX180' />
    </html>
  );
}
