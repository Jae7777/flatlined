'use client'

import SideBar from "../components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { Fira_Code } from "next/font/google";
import { useRouter } from "next/navigation";
import LandingLayout from "@/components/LandingLayout";
import ProjectLayout from "@/components/ProjectLayout";

const hero = Fira_Code({
  subsets: ['latin'],
  weight: ['500']
})

export default function Home({ 
  searchParams 
}: {
  searchParams: { [key: string]: string | undefined}
}) {
  const [isToggled, setIsToggled] = useState(false)
  const setToggledFalse = () => {
    setIsToggled(false)
  }

  useEffect(() => {
    const width = window.innerWidth
    if (width > 640) setIsToggled(true)
  }, [])

  return (
    <div className='h-full'>
      <SideBar
        onToggle={() => {setIsToggled(!isToggled)}}
        isToggled={isToggled}
        setToggledFalse={setToggledFalse}
      />
      <div 
        className={`sm:text-white
          ${isToggled ? 'main-body-toggled' : 'main-body-untoggled'}
        `}
      >
        <BodyContent
          isToggled={isToggled}
          project_slug={searchParams.project}
        />
      </div>
    </div>
  );
}

const BodyContent = ({
  isToggled,
  project_slug
}: {
  isToggled: boolean
  project_slug: string | undefined
}) => {
  const router = useRouter()
  const [project, setProject] = useState('')
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    project_slug ? setProject(project_slug) : setProject('')
    setIsLoading(false)
  }, [router, project_slug, project, isLoading])

  if (isLoading) {
    // todo: skeleton of page
    return <div>Loading...</div>
  }

  return (
    <div>
      {project == ''
        ? <LandingLayout
            isToggled={isToggled}
          />
        : <ProjectLayout
            isToggled={isToggled}
            project_key={project}
          />
      }
    </div>
  )
}