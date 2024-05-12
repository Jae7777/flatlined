'use client'

import Image from "next/image";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

interface ProjectsCarouselProps {
  projects: {
    id: string;
    name: string;
    url: string;
    caniframe: boolean;
    role: string;
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
  return (
    <Carousel
      opts={{

        loop: true,
      }}
      className=""
    >
      <CarouselContent className="">
        {projects.map((project, index) => (
          <CarouselItem key={index} className=" sm:basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5">
            <Card className="aspect-square rounded-2xl">
              <CardContent className="p-0 w-full h-full relative">
                <Image 
                  src="/showcases/fatjaysnj.png"
                  alt=""
                  fill
                  className=" rounded-2xl object-top object-cover"
                />
                <div className="relative h-[40%] top-[60%] rounded-2xl bg-alabaster pt-5 text-left px-6">
                  <p className="text-sm font-semibold whitespace-nowrap max-w-full">
                    {project.name}
                  </p>
                  <div className="overflow-y-scroll h-12 mt-2">
                    <p className="text-xs">
                      {project.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default ProjectsCarousel;