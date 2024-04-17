import type { Metadata } from "next";
import { 
  Poppins
} from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { Toaster } from "@/components/ui/toaster";

const poppins = Poppins({
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
      <body className={`${poppins.className} bg-background text-white`}>
        <div className=''>
          <Navbar/>
          {children}
          <Toaster />
          <Analytics />
        </div>
      </body>
    </html>
  );
}
