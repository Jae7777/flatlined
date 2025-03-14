import type { Metadata, Viewport } from "next";

import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { ubuntu } from "./fonts";
import Image from "next/image";
import { GoogleAnalytics } from "@next/third-parties/google";

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
      url: "https://flatlined.gg/icon.png",
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
        className={`${ubuntu.className} bg-fln-gray-950 text-fln-gray-100 max-w-[100rem] mx-auto`}
      >
        <Analytics />
        <GoogleAnalytics gaId="G-LN3G8VX180" />

        <div className="py-24">{children}</div>
        <Navbar />
      </body>
    </html>
  );
}
