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
        className="hidden md:flex bottom-6 md:bottom-10 inset-x-0 max-w-2xl mx-auto z-50 fixed w-full items-center justify-center bg-fln-black rounded-full text-fln-white py-4 gap-14 border-2 border-slate-950 shadow-xl"
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

      <Sheet>
        <SheetTrigger>
          <IconMenu2 className="md:hidden fixed bottom-6 right-6 z-50 text-fln-white size-12 border-[1px] rounded-full p-2 bg-slate-950" />
        </SheetTrigger>
        <SheetContent side="right" className='bg-slate-950 flex flex-col  items-start justify-center gap-8'>
          {navItems.map((item, index) => {
            const isActive = pathname === item.href
            return (
              <Link key={index} href={item.href} className="flex gap-2 items-center justify-center" >
                {isActive && <div className='size-[0.4rem] rounded-full bg-fln-blue' />}
                <item.icon
                  strokeWidth={1.5}
                  className={` text-fln-white size-8`}
                />
                <p className='text-fln-white'>{item.title}</p>
              </Link>
            ) 
          })}
        </SheetContent>
      </Sheet>
    </div>
  )
}

export default Navbar