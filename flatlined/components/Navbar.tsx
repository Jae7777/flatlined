'use client'

import { IconHome, IconMessage, IconNotebook, IconUsers, IconRobot, IconKeyboard, IconMenu2 } from '@tabler/icons-react';
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';

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
    <div>
      <nav
        className="flex md:flex-col rounded-full py-6 md:py-14 bottom-6 md:bottom-1/2 md:translate-y-1/2 z-50 fixed bg-neutral-800 items-center justify-center right-1/2 translate-x-1/2 md:translate-x-0 md:right-0 text-fln-white gap-8 sm:gap-14 shadow-xl px-14 md:px-6 md:mr-4"
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
                      className={`${isActive ? 'text-yellow-500' : 'text-white'} size-8`}
                    />
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

    </div>
  )
}

export default Navbar