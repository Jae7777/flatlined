import { fira_code } from "./fonts";
import { Metadata } from "next";
import Hero from "@/components/Hero";

export const dynamic = 'force-dynamic';
 
export const metadata: Metadata = {
  title: "Flatlined Studio",
  description:
    "The visionary coding studio - Let Flatlined Studio be the technical half of your project.",
  keywords: [
    "web development",
    "game development",
    "app development",
    "consultants",
    "programming",
    "coding",
  ],
  openGraph: {
    url: "https://www.flatlined.gg/",
    type: "website",
    title: "Elastic Stack, Next.js, Python, JavaScript Tutorials | dminhvu",
    description:
      "The visionary coding studio - Let Flatlined Studio be the technical half of your project.",
    images: [
      {
        url: "https://www.flatlined.gg/thumbnail.png",
        width: 2600,
        height: 1350,
        alt: "dminhvu"
      }
    ]
  },
  alternates: {
    canonical: "https://www.flatlined.gg/"
  }
};

export default function Home() {
  return (
    <main className={`${fira_code.className}`}>
      <Hero />
    </main>
  );
}
