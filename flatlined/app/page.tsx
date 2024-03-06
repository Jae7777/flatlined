'use client'

import SideBar from "./components/sidebar/Sidebar";
import { useEffect, useState } from "react";
import { Fira_Code } from "next/font/google";
import BodyContent from "./components/layouts/BodyContent";

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
