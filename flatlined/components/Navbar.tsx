'use client'

import { IconBrandVscode, IconHome, IconMessage, IconNotebook, IconUsers, IconRobot, IconKeyboard } from '@tabler/icons-react';
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from "next/navigation";

const email = 'justin.flatlined@gmail.com'

const navItems = [
  {
    title: 'Q&A',
    icon: IconMessage,
    href: '/qna'
  },
  {
    title: 'Members',
    icon: IconRobot,
    href: '/members'
  },
  {
    title: 'Home',
    icon: IconHome,
    href: '/'
  },
  {
    title: 'Projects',
    icon: IconKeyboard,
    href: '/projects'
  },
  {
    title: 'Blog & Posts',
    icon: IconNotebook,
    href: '/blog'
  }
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav
      className="bottom-0 md:bottom-10 inset-x-0 max-w-2xl mx-auto z-50 fixed w-full flex items-center justify-center bg-fln-black rounded-full text-fln-white py-4 gap-14 border-2 border-slate-950 shadow-xl"
    >
      <TooltipProvider delayDuration={100}>
        {navItems.map((item, index) => {
          const isActive = pathname === item.href
          return (
            <Tooltip key={index}>
              <TooltipTrigger className="relative">
                <Link href={item.href} className="flex flex-col items-center justify-center gap-1" >
                  <item.icon
                    strokeWidth={1.5}
                    className={` text-fln-white size-8`}
                  />
                  {isActive && 
                    <div className='w-7 h-[0.3rem] rounded-full bg-fln-blue' />
                  }
                  
                </Link>
              </TooltipTrigger>
              <TooltipContent sideOffset={8} side="top">
                {item.title}
              </TooltipContent>
            </Tooltip>
          ) 
      })}
      </TooltipProvider>
    </nav>
  )
}

export default Navbar