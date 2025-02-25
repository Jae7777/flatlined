import { fira_code } from "./fonts";
import { Metadata } from "next";
import ProjectsPage from "./projects/page";
import Image from "next/image";

export const dynamic = 'force-dynamic';
 
export const metadata: Metadata = {
  title: "Flatlined Studio",
  description:
    "Probably up to no good.",
  keywords: [
    "web development",
    "game development",
    "app development",
    "consultants",
    "programming",
    "coding",
    "flatlined",
    "flatlined studio",
    "online programmers",
    "online developers",
    "developers for hire",
  ],
  openGraph: {
    url: "https://flatlined.gg/",
    type: "website",
    title: "Flatlined Studio",
    description:
      "Probably up to no good.",
    images: [
      {
        url: "https://flatlined.gg/thumbnail.png",
        width: 1920,
        height: 1080,
        alt: "Flatlined Studio",
      }
    ]
  },
  alternates: {
    canonical: "https://flatlined.gg/"
  }
};

export default function Home() {
  return (
    <main className={`${fira_code.className} `}>
      <Image
        src="/FLATLINED.png"
        alt="flatlined hero logo art"
        width={0}
        height={0}
        className="w-full h-full mx-auto max-w-[74rem] px-8"
        sizes="100vw"
        priority
        fetchPriority='high'
      />
      <ProjectsPage />
    </main>
  );
}
