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
      url: "https://flatlined.gg/icon.svg",
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
        className={`${ubuntu.className} bg-neutral-800 max-w-full text-fln-white`}
      >
        <Analytics />
        <GoogleAnalytics gaId="G-LN3G8VX180" />
        <div className="max-w-[100rem] grid grid-cols-1 md:grid-cols-[auto_5rem] lg:grid-cols-[18rem_auto_5rem] mx-auto">
          <div className=" hidden lg:block"><Image src='/FLATLINED.svg' alt='Flatlined Studio Banner' width={0} height={0} className=' w-[18rem] h-fit fixed bottom-0' /></div>
          <div className="py-24">{children}</div>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
