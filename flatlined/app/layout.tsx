import type { Metadata } from "next";
import { 
  Press_Start_2P, Syncopate, Roboto_Mono,
  Poppins 
} from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { Analytics } from "@vercel/analytics/react";

const font = Poppins({
  subsets: ["latin"],
  weight: ['400', '700']
});

export const metadata: Metadata = {
  title: "Flatlined",
  description: "Turning the world to code.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className} bg-null-body`}>
        <div className=''>
          <Navbar/>
          {children}
          <Analytics />
        </div>
      </body>
    </html>
  );
}
