'use client'
import { IconHome, IconNotebook} from '@tabler/icons-react';
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { usePathname } from "next/navigation";
import ProfileDialog from './ProfileDialog';


interface NavItem {
  title: string;
  icon: React.FC<any>;
  href: string;
}

const navItems: NavItem[] = [
  {
    title: 'Home',
    icon: IconHome,
    href: '/'
  },
  {
    title: 'Blog',
    icon: IconNotebook,
    href: '/blog'
  },
]

const NavItem = ({ item, isActive }: { item: NavItem, isActive: boolean}) => (
  <Tooltip>
    <TooltipTrigger className="relative">
      <Link href={item.href} className="flex flex-col items-center justify-center gap-1">
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

const Navbar = () => {
  const pathname = usePathname()
  
  return (
    <div className='fixed'>
      <nav className="flex rounded-full py-6 bottom-6 right-0 left-0 z-50 bg-neutral-800 items-center justify-center mx-auto text-fln-white gap-14 shadow-xl px-14 h-fit w-fit fixed">
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger>
              <ProfileDialog />
            </TooltipTrigger>
            <TooltipContent sideOffset={8} side="top">
              Profile
            </TooltipContent>
          </Tooltip>

          {navItems.map((item, index) => (
            <NavItem 
              key={index}
              item={item}
              isActive={pathname === item.href}
            />
          ))}
        </TooltipProvider>
      </nav>
    </div>
  )
}

export default Navbar