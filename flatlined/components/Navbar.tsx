'use client'

import { IconBrandVscode, IconHome, IconMessage, IconNotebook, IconUsersGroup } from '@tabler/icons-react';
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from "next/navigation";

const email = 'justin.flatlined@gmail.com'

const navItems = [
  {
    title: 'Q&A',
    icon: IconMessage,
    href: '/q&a'
  },
  {
    title: 'Members',
    icon: IconUsersGroup,
    href: '/members'
  },
  {
    title: 'Home',
    icon: IconHome,
    href: '/'
  },
  {
    title: 'Projects',
    icon: IconBrandVscode,
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
      className="bottom-0 md:bottom-10 inset-x-0 max-w-2xl mx-auto z-50 fixed w-full flex items-center justify-center bg-fln-black rounded-full text-fln-white py-4 gap-14"
    >
      <TooltipProvider delayDuration={100}>
        {navItems.map((item, index) => {
          const isActive = pathname === item.href
          return (
            <Tooltip key={index}>
              <TooltipTrigger className="relative">
                <Link href={item.href} className="flex flex-col items-center justify-center" >
                  <item.icon
                    strokeWidth={2}
                    className={`py-1 text-fln-white size-10`}
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