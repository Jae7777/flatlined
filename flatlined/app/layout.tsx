import type { Metadata, Viewport } from "next";

import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { GoogleAnalytics } from '@next/third-parties/google';
import { ubuntu } from "./fonts";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#212531"
};
 
export const metadata: Metadata = {
  metadataBase: new URL("https://flatlined.gg"),
  openGraph: {
    siteName: "Flatlined Studio",
    type: "website",
    locale: "en_US"
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  applicationName: "Flatlined Studio",
  appleWebApp: {
    title: "Flatlined Studio",
    statusBarStyle: "default",
    capable: true
  },
  icons: [{ 
    rel: "icon", 
    url: "https://www.flatlined.gg/icon.svg", 
    type: "image/svg+xml" 
  }],
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
