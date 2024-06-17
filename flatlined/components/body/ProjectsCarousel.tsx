'use client'

import Image from "next/image";
import { Card, CardContent} from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "../ui/button";
import LogoGrid from "./LogoGrid";
import Subtitle from "./Subtitle";
import Link from "next/link";
import { Link2Icon } from "lucide-react";



interface ProjectsCarouselProps {
  projects: {
    id: string;
    name: string;
    url: string;
    caniframe: boolean;
    role: string;
    preview: string;
    startDate: string;
    status: string;
    skillset: string[];
    description: string;
    collaborators: string[];
    createdAt: Date;
  }[]
}
const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
  projects
}) => {
  const router = useRouter()
  return (
    <Carousel
      opts={{
        align: "start",
        loop: false,
      }}
      className="pb-5 w-full"
    >
      <CarouselContent className="">
        {projects.map((project, index) => (
          <Dialog key={index}>
            <CarouselItem className="sm:basis-1/2 lg:basis-1/3 2xl:basis-1/4 hover:opacity-80 duration-200">                
              <DialogTrigger className="w-full h-full aspect-square rounded-2xl">
                <Card className="w-full h-full bg-background border border-null-1">
                  <CardContent className="p-0 w-full h-full relative">
                    <div className="absolute left-0 top-0 w-full h-full">
                      <Image 
                        src={project.preview == "" ? "/showcases/flatlined.svg" : project.preview}
                        alt=""
                        fill
                        className=" rounded-2xl object-top object-cover"
                        sizes="100vw, (min-width: 640px) 50vw, (min-width: 1024px) 33vw"
                      />
                    </div>
                    <div className="h-[40%] max-h-[140px] bottom-0 rounded-2xl bg-alabaster pt-5 text-left px-6 border border-background absolute w-full">
                      <p className="text-sm font-semibold whitespace-nowrap max-w-full">
                        {project.name}
                      </p>
                      <div className="overflow-y-scroll h-[60%] mt-2">
                        <p className="text-xs">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </DialogTrigger>
              
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>{project.name}</DialogTitle>
                  <DialogDescription className="text-slate-400">
                    {project.description}
                  </DialogDescription>
                </DialogHeader>

                <Subtitle content="SKILLS" />
                <LogoGrid
                  names={project.skillset}
                />
                
                <Button asChild className="flex items-center hover:opacity-90 hover:outline-alabaster" >
                  <Link href={project.url} target="_blank">
                    <Link2Icon className="mr-2"/>
                    Project Link
                  </Link>
                </Button>
              </DialogContent>
            </CarouselItem>
          </Dialog>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ProjectsCarousel;