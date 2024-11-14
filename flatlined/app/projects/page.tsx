'use client';

import getProjects from "@/actions/getProjects";
import { Entry, EntrySkeletonType } from "contentful";
import { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import ScreenShimmer from "@/components/ScreenShimmer";
import { IconCircleFilled } from "@tabler/icons-react";
import ReactMarkdown from 'react-markdown';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { tiny5 } from "../fonts";

const tagColors = ['fln-blue', 'fln-lilac', 'fln-orange', 'rose-500', 'emerald-600', 'violet-600', 'fuchsia-600', 'indigo-600'];

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Entry<EntrySkeletonType, undefined, string>[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
      } catch (error) {
        console.error('Failed to fetch projects:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProjects();
  }, []);

  if (isLoading) {
    return <ScreenShimmer />;
  }

  return (
    <div className="prose prose-invert max-w-full mx-auto px-4 md:px-12 ">
      {/* Preload tailwind colors */}
      <div className="hidden bg-fln-blue bg-fln-lilac bg-fln-orange bg-rose-500 bg-emerald-600 bg-violet-600 bg-fuchsia-600 bg-indigo-600 aria-hidden"/>

      <h5 className={` text-left text-7xl text-sky-500 ${tiny5.className}`}>
        Projects
      </h5>
      <Accordion type='single' collapsible className="flex flex-col">
        {projects.map((project: any, index: number) => {
          return (
            <CardContainer key={index} className="m-0 ">
              <CardBody className="bg-fln-black relative hover:shadow-2xl p-6 h-fit border max-w-[55rem] w-full border-black/[0.1] rounded-xl ">
                <AccordionItem value={project.fields.title}>
                  <AccordionTrigger className="flex flex-col hover:no-underline hover:opacity-70 duration-200">
                    {/* Tags */}
                    <CardItem className="w-fit flex flex-wrap gap-2" >
                      {project.fields.tags && project.fields.tags.map((tag: any, index: number) => {
                        const randomIndex = Math.floor(Math.random() * tagColors.length);
                        const color = tagColors[randomIndex];
                        return (
                          <span key={index} className={`text-xs font-semibold text-fln-white p-1 px-2 rounded-md ${'bg-'+color}`}>
                            {tag.fields.name}
                          </span>
                        )
                      })}
                    </CardItem>
    
                    {/* Info */}
                    <CardItem className="w-full">
                      <div className="flex justify-center items-center gap-3">
                        {project.fields.startDate && <p className="text-sm text-neutral-300 ">
                          {new Date(project.fields.startDate).toLocaleDateString('en-US', {
                            month: '2-digit',
                            day: '2-digit',
                            year: 'numeric'
                          })}
                        </p>}
                        {project.fields.startDate && project.fields.endDate && <span>-</span>}
                        {project.fields.endDate && <p className="text-sm text-neutral-300 ">
                          {new Date(project.fields.endDate).toLocaleDateString('en-US', {
                            month: '2-digit',
                            day: '2-digit',
                            year: 'numeric'
                          })}  
                        </p>}
                      </div>
                      <h2 className="text-xl font-bold">{project.fields.title}</h2>
                      
                      <div className="prose prose-invert max-w-full">
                        <ReactMarkdown>{project.fields.description}</ReactMarkdown>
                        <div className="flex gap-2 items-center">
                          <IconCircleFilled className="size-4 text-fln-orange"/>
                          <p className="text-sm">Status: {project.fields.status}</p>
                        </div>
                      </div>
                    </CardItem>
                  </AccordionTrigger>
  
                  <AccordionContent>
                    {/* Previews */}
                    { project.fields.previews && 
                      <CardItem className="pb-4 mx-auto w-full">
                        <Carousel>
                          <CarouselContent className="">
                            {
                              project.fields.previews.map((preview: any, index: number) => {
                                return (
                                  <CarouselItem key={index} className="">
                                    <Image
                                      src={'https:' + preview.fields.file.url}
                                      alt={preview.fields.title + ',' + preview.fields.description}
                                      width={0}
                                      height={0}
                                      className="rounded-xl w-full h-fit object-contain aspect-video"
                                      sizes="80vw, (min-width: 1024px) 50vw"
                                      />
                                  </CarouselItem>
                                )
                              })
                            }
                          </CarouselContent>
                          <CarouselPrevious/>
                          <CarouselNext />
                        </Carousel>
                      </CardItem>
                    }

                    {/* Links */}
                    <CardItem>
                      <ul>
                        {project.fields.links && project.fields.links.map((link: any, index: number) => {
                          return (
                            <li key={index}>
                              <Link href={link} className="text-fln-blue no-underline">
                                {link}
                              </Link>
                            </li>
                          )
                        })}
                      </ul>
                    </CardItem>
                  </AccordionContent>
                </AccordionItem>
              </CardBody>
            </CardContainer>
          )
        })}
      </Accordion>
    </div>
  )
}

export default ProjectsPage;