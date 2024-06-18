'use client'

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { Button } from "./ui/button"
import { BiDownload, BiMailSend } from "react-icons/bi"
import { FaGithub } from "react-icons/fa6"
import { LinkedinIcon } from "lucide-react"

const RoboProfile = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 place-content-center justify-content-center align-content-center gap-3 max-w-[1000px] mx-auto items-center">
      <Card className="aspect-square max-w-[500px] bg-cyberblue border-2 border-null-1 shadow-lg ">
        <CardContent className="relative w-full h-full">
          <Image
            src="/justin_robot.png"
            alt=""
            fill
            className="object-cover"
          />
        </CardContent>
      </Card>

      <Card className="max-w-[500px] h-fit bg-background border border-alabaster">
        <CardHeader>
          <h1 className="text-lg text-cyber-1">
            Robot #1
          </h1>
          <h2 className="text-md text-cyber-2">
            Head Developer & Designer
          </h2>
        </CardHeader>
        <CardContent className="text-alabaster text-sm">
          {`Beep boop. Just ol' me here. 
          I'm a machine that learns. Therefore I am obligated to say that `}
          <span className="italic text-slate-300 text-xs">{`✨This robot may create some terrible code from time to time. Such code is generated as part of its learning process and should not be relied upon for any specific purpose without verification of its accuracy or completeness.✨`}</span> 
        </CardContent>
        <CardFooter>
          <div className="flex w-full gap-6">
            <TooltipProvider delayDuration={50}>
              <Tooltip>
                <TooltipTrigger>
                  <Button asChild size="icon" className="bg-cyberblue hover:bg-cybercyan">
                    <a href="/docs/Resume.pdf" download className="gap-1">
                      <BiDownload className="w-5 h-5"/>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <span>Download Resume</span>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Button asChild size="icon" className=" bg-cyber-3 hover:bg-cyber-2">
                    <a href="mailto:justin.flatlined@gmail.com">
                      <BiMailSend className="w-5 h-5"/>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>Contact Me</span>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Button asChild size="icon" className=" bg-black hover:bg-slate-800">
                    <a href="https://github.com/Jae7777" target="_blank">
                      <FaGithub className="w-5 h-5"/>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>Github</span>
                </TooltipContent>
              </Tooltip>

              <Tooltip>
                <TooltipTrigger>
                  <Button asChild size="icon" className=" bg-[#2b6cd0] hover:bg-[#2b78d0]">
                    <a href="https://www.linkedin.com/in/justin-flatlined/" target="_blank">
                      <LinkedinIcon className="w-5 h-5"/>
                    </a>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                    <span>LinkedIn</span>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

export default RoboProfile