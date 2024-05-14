
import { Fira_Code } from "next/font/google";
import Image from "next/image";
import Subtitle from "@/components/body/Subtitle";
import Timeline from "@/components/timeline/Timeline";
import getProjects from "@/actions/getProjects";
import { RiRobot2Line } from "react-icons/ri";
import ProjectsCarousel from "@/components/body/ProjectsCarousel";
import RoboProfile from "@/components/RoboProfile";

const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: ["500"],
});

export const dynamic = "force-dynamic";

export default async function Home() {
  const projects = await getProjects({});

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
            <div className="">
              <Image
                src="/hero.jpg"
                alt="hero"
                fill
                style={{
                  objectFit: "cover", 
                  WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,0.4) 0%, rgba(0,0,0,1) 100%)"
                }}
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

        <br/><br/>
        <div className="flex justify-center items-center gap-3 ">
          <RiRobot2Line size="25"/>
          <span className="text-cyber-1 text-xl">Latest Creations</span>
        </div><br/>
        <ProjectsCarousel projects={projects} />
        
        <br/><br/><br/><br/>
        <div className="flex justify-center items-center gap-3 pb-3">
          <RiRobot2Line size="25"/>
          <span className="text-cyber-1 text-xl">Our Robo Workers</span>
        </div><br/>
        <RoboProfile />
        
        <br/><br/>
        <div className="pt-6">
          <Subtitle content="TIMELINE" />
        </div>

        <Timeline />
      </div>
    </div>
  );
}
