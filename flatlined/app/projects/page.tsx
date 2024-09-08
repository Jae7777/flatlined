'use client';

import getProjects from "@/actions/getProjects";
import { Entry, EntrySkeletonType } from "contentful";
import { useEffect, useState } from "react";
import { fira_code } from "../fonts";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import Image from "next/image";
import Link from "next/link";
import ScreenShimmer from "@/components/ScreenShimmer";
import { IconCircle, IconCircleFilled } from "@tabler/icons-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import ReactMarkdown from 'react-markdown';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const tagColors = ['fln-blue', 'fln-lilac', 'fln-orange'];

const ProjectsPage = () => {
  const [projects, setProjects] = useState<Entry<EntrySkeletonType, undefined, string>[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const data = await getProjects();
        setProjects(data);
        console.log(data[0].fields);
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
    <div className="prose prose-invert max-w-[100rem] p-8">
      {/* Preload tailwind colors */}
      <div className="hidden bg-fln-blue bg-fln-lilac bg-fln-orange aria-hidden"/>

      <h1 className={`text-fln-yellow w-fit text-center mx-auto ${fira_code.className}`}>
        Projects
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {projects.map((project: any, index: number) => {
          return (
            <CardContainer key={index}>
              <CardBody className="bg-fln-black relative hover:shadow-2xl w-auto p-6 h-auto sm:w-[30rem] border border-black/[0.1] rounded-xl">
                {/* Tags */}
                <CardItem className="w-fit flex flex-wrap gap-2" translateZ="30" translateX="20" translateY="10">
                  {project.fields.tags && project.fields.tags.map((tag: any, index: number) => {
                    const color = tagColors[index % tagColors.length];
                    return (
                      <span key={index} className={`text-xs font-semibold text-fln-white p-1 px-2 rounded-md ${"bg-"+color}`}>
                        {tag.fields.name}
                      </span>
                    )
                  })}
                </CardItem>

                {/* Info */}
                <CardItem
                  translateZ="50"
                >
                  <h2 className="text-xl font-bold">{project.fields.title}</h2>
                  <ReactMarkdown>{project.fields.description}</ReactMarkdown>
                  <div className="flex gap-2 items-center">
                    <IconCircleFilled className="size-4 text-fln-orange"/>
                    <p className="text-sm">Status: {project.fields.status}</p>
                  </div>
                </CardItem>

                {/* Previews */}
                <CardItem
                  translateZ="100"
                  translateX="30"
                >
                  {
                    project.fields.previews && project.fields.previews.map((preview: any, index: number) => {
                      return (
                        <Image
                          key={index}
                          src={'https:' + preview.fields.file.url}
                          alt={preview.fields.title + ',' + preview.fields.description}
                          width={300}
                          height={300}
                          className="rounded-xl w-full h-fit "
                        />
                      )
                    })
                  }
                </CardItem>

                {/* Links */}
                <CardItem
                  translateZ="70"
                >
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
              </CardBody>
            </CardContainer>
          )
        })}
      </div>
    </div>
  )
}

export default ProjectsPage;