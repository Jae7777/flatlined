import FileExplorer from "./FileExplorer"
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import { Roboto_Mono } from 'next/font/google'
import Image from "next/image";
import { useState } from "react";

const font = Roboto_Mono({
  subsets: ["latin"],
  weight: ['700']
})

interface SideBarProps {
  onToggle: () => void
  isToggled: boolean
}

const SideBar: React.FC<SideBarProps> = ({
  onToggle,
  isToggled
}) => {
  return (
    <div className={`
      h-[90%] fixed border-r border-null-1 mt-[40px]
      text-center items-center px-4 duration-300 w-[250px]
      ${isToggled ? 'left-[0px]' : 'left-[-200px]'}
    `}>
      {isToggled
      ? <BiLeftArrow 
        color='white'
        size='25px'
        onClick={onToggle}
        className='absolute top-8 right-8 clickable-dark'
        />
      : <BiRightArrow
        color='white'
        size='25px'
        onClick={onToggle}
        className='absolute top-8 right-4 clickable-dark'
        />
      }

      <div className={`overflow-y-auto overscroll-none h-full`}>
        <div className={`bg-null-sidebar-head`}>
          <div className='py-5'>
            <div className='relative rounded-full h-[60px] w-[60px] mx-auto'>
              <Image
                src='/headshot.png'
                fill
                alt=''
                className='rounded-full'
              />
            </div>
            <div className={`
              ${font.className} text-[14px] 
              text-cyberyellow text-center
              pt-3 pb-2
            `}>
              {`Justin Chen`}
            </div>
            <div className='text-[12px] px-2 text-neutral-400 text-wrap'>
              Projects & Portfolio
            </div>
          </div>
          
          <FileExplorer/>
        </div>

      </div>
    </div>
  )
}

export default SideBar