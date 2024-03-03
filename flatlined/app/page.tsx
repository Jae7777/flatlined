'use client'

import SideBar from "./components/sidebar/Sidebar";
import { useState } from "react";
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

  return (
    <div className='h-full'>
      <SideBar
        onToggle={() => {setIsToggled(!isToggled)}}
        isToggled={isToggled}
      />
      <div 
        className={`
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
