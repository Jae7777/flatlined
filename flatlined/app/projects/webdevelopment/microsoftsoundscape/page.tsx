'use client'

import LinkButton from "@/app/components/LinkButton"
import LogoGrid from "@/app/components/LogoGrid"
import Showcase from "@/app/components/Showcase"
import SideBar from "@/app/components/Sidebar"
import Subtitle from "@/app/components/Subtitle"
import Image from "next/image"
import { useState } from "react"

const stack = [
  {
    path: '/logos/react.svg',
    name: 'React'
  },
  {
    path: '/logos/django.svg',
    name: 'Django'
  },
  {
    path: '/logos/bootstrap.svg',
    name: 'CSS Bootstrap'
  },
  {
    path: '/logos/azure.svg',
    name: 'Azure'
  },
  {
    path: '/logos/tailwindcss.svg',
    name: 'Tailwind CSS'
  },
  {
    path: '/logos/prisma.svg',
    name: 'Prisma'
  },
  {
    path: '/logos/nodejs.svg',
    name: 'Node.js'
  },
]

const MicrosoftSoundscapePage = () => {
  const [isToggled, setIsToggled] = useState(true)

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
        <Showcase
          url={'/showcases/soundscape_preview.png'}
          isToggled={isToggled}
          isLive={false}
          name='Microsoft_Soundscape'
        />
        
        <div className='flex flex-wrap max-w-[250px] mx-auto py-3'>
          <LinkButton
            url='https://github.com/soundscape-community/authoring-tool'
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

export default MicrosoftSoundscapePage