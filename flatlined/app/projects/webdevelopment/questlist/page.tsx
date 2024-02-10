'use client'

import LinkButton from "@/app/components/LinkButton"
import LogoGrid from "@/app/components/LogoGrid"
import Showcase from "@/app/components/Showcase"
import SideBar from "@/app/components/Sidebar"
import Subtitle from "@/app/components/Subtitle"
import { useState } from "react"

const stack = [
  {
    path: '/logos/nextjs.svg',
    name: 'Next.js'
  },
  {
    path: '/logos/react.svg',
    name: 'React'
  },
  {
    path: '/logos/tailwindcss.svg',
    name: 'Tailwind CSS'
  },
  {
    path: '/logos/mongodb.svg',
    name: 'MongoDB'
  },
  {
    path: '/logos/prisma.svg',
    name: 'Prisma'
  },
  {
    path: '/logos/vercel.svg',
    name: 'Vercel'
  },
  {
    path: '/logos/googlecloud.svg',
    name: 'Google Cloud'
  },
  {
    path: '/logos/canva.svg',
    name: 'Canva'
  },
  {
    path: '/logos/gimp.svg',
    name: 'GIMP'
  },
]

const QuestListPage = () => {
  const [isToggled, setIsToggled] = useState(true)

  return (
    <div className='h-full'>
      <SideBar
        onToggle={() => {setIsToggled(!isToggled)}}
        isToggled={isToggled}
      />

      <div 
        className={`
          py-8 px-12 
          ${isToggled ? 'ml-[250px]' : 'ml-[40px]'}
          ${isToggled ? 'xs:block hidden' : 'block'} 
        `}
      >
        <div style={{boxShadow: "0 0 10px #101215"}}>
          <Showcase
            url='https://www.questlist.net/'
            isToggled={isToggled}
          />
        </div>
        
        <div className='flex flex-wrap max-w-[250px] mx-auto py-3'>
          <LinkButton
            url='https://www.questlist.net/'
          />
        </div>

        <div className='pt-6'>
          <Subtitle content='STACK' />
        </div>
        <LogoGrid
          logos={stack}
          isToggled={isToggled}
        />
      </div>

    </div>
  )
}

export default QuestListPage