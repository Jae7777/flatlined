import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { fira_code } from "./fonts";
import { Metadata } from "next";
 
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
    <div className={`${fira_code.className}`}>
      <LampContainer>
        <motion.h1
          initial={{ opacity: 0.5, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="mt-8 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl"
        >
          The visionary coding studio.
        </motion.h1>
      </LampContainer>
    </div>
  );
}
