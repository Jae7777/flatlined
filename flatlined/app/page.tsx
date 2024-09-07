
import { Fira_Code } from "next/font/google";
import Image from "next/image";
import Subtitle from "@/components/body/Subtitle";
import Timeline from "@/components/timeline/Timeline";
import { RiRobot2Line } from "react-icons/ri";
import ProjectsCarousel from "@/components/body/ProjectsCarousel";
import RoboProfile from "@/components/RoboProfile";
import CogsBackground from "@/components/CogsBackground";
import getProjects from "@/actions/getProjects";

const fira_code = Fira_Code({
  subsets: ["latin"],
  weight: ["500"],
});

export const dynamic = "force-dynamic";

export default async function Home() {
  const projects = await getProjects();
  console.log(projects);
  return (
    <div className="h-full">
      <CogsBackground/>
      <div className={`block pt-[65px] pb-[20px] text-white duration-300 px-[40px] md:px-[80px] xl:px-[160px] ${fira_code.className}`}>
        <div className='responsive-screen-md relative'>
          <Image
            src="/hero.jpg"
            alt="hero"
            width="0"
            height="0"
            sizes="100vw"
            className="absolute brightness-[90%] w-full h-full object-cover shadow-xl"
            priority={true}
          />
          <div
            style={{ textShadow: "2px 2px 5px" }}
            className='absolute text responsive-text-md top-1/2 text-center text-white right-1/2 translate-x-1/2'
          >
            A visionary coding studio.
        </div>
        </div>

        <br/><br/>
        <div className="flex justify-center items-center gap-3 ">
          <RiRobot2Line size="25"/>
          <span className="text-cyber-1 text-xl">Latest Creations</span>
        </div><br/>
        
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
