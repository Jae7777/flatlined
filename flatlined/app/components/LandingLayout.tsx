import { Fira_Code } from "next/font/google"
import Image from "next/image"
import { BiDownload, BiMailSend } from "react-icons/bi"
import Subtitle from "./Subtitle"
import LogoGrid from "./LogoGrid"

const hero = Fira_Code({
  subsets: ['latin'],
  weight: ['500']
})

const skills = [
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
  {
    path: '/logos/azure.svg',
    name: 'Azure'
  },
  {
    path: '/logos/bootstrap.svg',
    name: 'CSS Bootstrap'
  },
  {
    path: '/logos/django.svg',
    name: 'Django'
  },
  {
    path: '/logos/google.svg',
    name: 'Google Artist Profile'
  },
  {
    path: '/logos/nodejs.svg',
    name: 'Node.js'
  },
  {
    path: '/logos/pixelstudio.png',
    name: 'Pixel Studio'
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
    path: '/logos/html5.svg',
    name: 'HTML5'
  },
  {
    path: '/logos/square.svg',
    name: 'Square'
  },
  {
    path: '/logos/youtube.svg',
    name: 'Youtube API'
  },
  {
    path: '/logos/pygame.svg',
    name: 'Pygame'
  },
]

interface LandingLayoutProps{
  isToggled: boolean
}

const LandingLayout: React.FC<LandingLayoutProps> = ({
  isToggled,
}) => {
  return (
    <div>
      <div className={`
        ${hero.className}
        ${isToggled 
          ? 'responsive-screen-sm'
          : 'responsive-screen-md'
        }
      `}>
        <div className='w-full h-full relative' style={{boxShadow: "0 0 10px #101215"}}>
          <div className='opacity-40'>
            <Image
              src='/hero.jpg'
              alt='hero'
              fill
              style={{ objectFit: 'cover'}}
            />
          </div>
          <div 
            style={{textShadow: '2px 2px 5px'}}
            className={`
              relative text-center text-white text top-1/2
              ${isToggled ? 'responsive-text-sm' : 'responsive-text-md'}
          `}>
            {`Reimagine The World In Code.`}
          </div>
        </div>
      </div>

      <div className=' pt-8 responsive-text-xxs'>
        <div className='responsive-text-sm text-cybercyan'>
          {`Hey, I'm Justin`}
        </div>
        <div className='text-offwhite py-4'>
          {`I'm a freelance web developer, hobbyist game dev, and a music enthusiast.
          I have experience in leading ambitious projects, and am versatile in my skill set.
          I thrive in the realm where technology, creativity, and innovation intersect.`}
          <br/> <br/>
          {`Writing code is a bit like orchestrating a music piece;
          It starts with a defining motif and develops through endless revisions.
          At its core is a desire to create something`}
          <span className='text-cyberviolet'>{` beautiful.`}</span>
        </div>
      </div>
      <div className='flex flex-wrap gap-6 max-w-[400px] py-3'>
        <a href="/docs/Resume.pdf" download className='button-1'>
            {`Resumé`}
            <BiDownload/>
        </a>

        <a href='mailto:jchen4086@gmail.com' className='button-2'>
          {`Contact`}
          <BiMailSend/>
        </a>
      </div>

      <div className='pt-6'>
        <Subtitle content='SKILLS' />
      </div>

      <LogoGrid
        logos={skills}
        isToggled={isToggled}
      />
    </div>
  )
}

export default LandingLayout