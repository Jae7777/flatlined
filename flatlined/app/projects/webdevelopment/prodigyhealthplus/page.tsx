'use client'

import LinkButton from "@/app/components/LinkButton"
import LogoGrid from "@/app/components/LogoGrid"
import Showcase from "@/app/components/Showcase"
import SideBar from "@/app/components/Sidebar"
import Subtitle from "@/app/components/Subtitle"
import { useState } from "react"

const stack = [
  {
    path: '/logos/wix.svg',
    name: 'Wix'
  },
  {
    path: '/logos/meta.svg',
    name: 'Meta Pixel'
  },
  {
    path: '/logos/googleanalytics.svg',
    name: 'Google Analytics'
  },
  {
    path: '/logos/googlemybusiness.svg',
    name: 'Google My Business'
  },
  {
    path: '/logos/canva.svg',
    name: 'Canva'
  },
  {
    path: '/logos/html5.svg',
    name: 'HTML5'
  },
  {
    path: '/logos/gimp.svg',
    name: 'GIMP'
  },
]

const ProdigyHealthPlusPage = () => {
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
          url='/showcases/prodigy_preview.png'
          isToggled={isToggled}
          isLive={false}
          name='Prodigy_Health_Plus'
        />
        
        <div className='flex flex-wrap max-w-[250px] mx-auto py-3'>
          <LinkButton
            url='https://www.prodigyhealthplus.com/'
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

export default ProdigyHealthPlusPage