import { fira_code } from "./fonts";
import { Metadata } from "next";
import ProjectsPage from "./projects/page";

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
      "The visionary coding studio - Let Flatlined Studio be the technical half of your project.",
    images: [
      {
        url: "https://flatlined.gg/thumbnail.png",
        width: 2600,
        height: 1350,
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

      <ProjectsPage />
    </main>
  );
}
