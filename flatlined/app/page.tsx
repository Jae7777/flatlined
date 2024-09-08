'use client';
import getProjects from "@/actions/getProjects";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Entry, EntrySkeletonType } from "contentful";

import { fira_code } from "./fonts";

export const dynamic = "force-dynamic";

export default function Home() {
  const [projects, setProjects] = useState<Entry<EntrySkeletonType, undefined, string>[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
        console.log(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

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
