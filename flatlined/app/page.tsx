
import { Fira_Code } from "next/font/google";
import Image from "next/image";
import { BiDownload, BiMailSend } from "react-icons/bi";
import Subtitle from "@/components/body/Subtitle";
import LogoGrid from "@/components/body/LogoGrid";
import logos from "../app/data/logos.json";
import Timeline from "@/components/timeline/Timeline";
import getProjects from "@/actions/getProjects";

import ProjectsCarousel from "@/components/body/ProjectsCarousel";

const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: ["500"],
});

export const dynamic = "force-dynamic";

export default async function Home() {
  const projects = await getProjects({});

  const logoObjects = Object.entries(logos).map((obj) => {
    return { name: obj[0], path: obj[1] };
  });

  return (
    <div className="h-full">
      <div
        className={`
          block
          pt-[65px]
          pb-[20px]
          text-white
          duration-300
          px-[40px]
          md:px-[80px]
          xl:px-[160px]
          ${fira_code.className}
        `}
      >
        <div
          className={`
          responsive-screen-md
        `}
        >
          <div
            className="relative h-full w-full"
            style={{ boxShadow: "0 0 10px #101215" }}
          >
            <div className="opacity-40">
              <Image
                src="/hero.jpg"
                alt="hero"
                fill
                style={{ objectFit: "cover" }}
                sizes="100vw"
                priority={true}
              />
            </div>
            <div
              style={{ textShadow: "2px 2px 5px" }}
              className={`
                text responsive-text-md relative top-1/2 text-center
                text-white
            `}
            >
              {`Your human code machine.`}
            </div>
          </div>
        </div>

        <div className="flex-col text-center pt-6 pb-12 space-y-4">
          <span className="text-cyber-1 text-xl">Latest Creations</span>
          <ProjectsCarousel projects={projects} />
        </div>

        <div className="flex max-w-[400px] flex-wrap gap-6 py-3">
          <a href="/docs/Resume.pdf" download className="button-1">
            {`Resumé`}
            <BiDownload />
          </a>

          <a href="mailto:jchen4086@gmail.com" className="button-2">
            {`Contact`}
            <BiMailSend />
          </a>
        </div>

        <div className="pt-6">
          <Subtitle content="SKILLS" />
        </div>

        <LogoGrid logos={logoObjects} />

        <div className="pt-6">
          <Subtitle content="TIMELINE" />
        </div>

        <Timeline />
      </div>
    </div>
  );
}
