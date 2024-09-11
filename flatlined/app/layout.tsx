import type { Metadata, Viewport } from "next";

import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";
import { ubuntu } from "./fonts";
import GoogleAnalyticsClient from "@/components/analytics/Google";

// Metadata export is allowed in this server component
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#212531",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://flatlined.gg"),
  openGraph: {
    siteName: "Flatlined Studio",
    type: "website",
    locale: "en_US",
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow",
  },
  applicationName: "Flatlined Studio",
  appleWebApp: {
    title: "Flatlined Studio",
    statusBarStyle: "default",
    capable: true,
  },
  icons: [
    {
      rel: "icon",
      url: "https://www.flatlined.gg/icon.svg",
      type: "image/svg+xml",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Any additional metadata or viewport tags can go here */}
      </head>
      <body
        className={`${ubuntu.className} bg-slate-950 max-w-full text-fln-white`}
      >
        <Analytics />
        <GoogleAnalyticsClient />
        <Navbar />
        <div className="pb-24">{children}</div>
        <Toaster />
      </body>
    </html>
  );
}
