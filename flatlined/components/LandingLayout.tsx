import { Fira_Code } from "next/font/google"
import Image from "next/image"
import { BiDownload, BiMailSend } from "react-icons/bi"
import Subtitle from "./body/Subtitle"
import LogoGrid from "./body/LogoGrid"
import logos from "../app/data/logos.json"
import Timeline from "./timeline/Timeline"

const hero = Fira_Code({
  subsets: ['latin'],
  weight: ['500']
})


interface LandingLayoutProps {
  isToggled: boolean
}

const LandingLayout: React.FC<LandingLayoutProps> = ({
  isToggled,
}) => {
  const logoObjects = Object.entries(logos).map(
    (obj) => {
      return { name: obj[0], path: obj[1] }
    }
  )

  return (
    <div>
      <div className={`
        ${hero.className}
        ${isToggled
          ? 'responsive-screen-sm'
          : 'responsive-screen-md'
        }
      `}>
        <div className='w-full h-full relative' style={{ boxShadow: "0 0 10px #101215" }}>
          <div className='opacity-40'>
            <Image
              src='/hero.jpg'
              alt='hero'
              fill
              style={{ objectFit: 'cover' }}
              sizes='100vw'
              priority={true}
            />
          </div>
          <div
            style={{ textShadow: '2px 2px 5px' }}
            className={`
              relative text-center text-white text top-1/2
              ${isToggled ? 'responsive-text-sm' : 'responsive-text-md'}
          `}>
            {`Reimagine The World In Code.`}
          </div>
        </div>
      </div>

      <div className=' pt-8 responsive-text-md'>
        <div className='responsive-text-sm text-cybercyan'>
          {`Hey, I'm Justin`}
        </div>
        <div className='text-offwhite py-4 leading-7 mr-8 xl:mr-12'>
          I used to have bios pre-written for the purpose of autofilling queries like these. I stopped writing them because I realized that I outgrow them every couple of weeks. The self-described me in those descriptions no longer represent who I am today. Now I just write whatever comes off the top of my head.
          <br /> <br />
          I am a jack of all trades. I can code in pretty much any language. I can make websites using simple web builders like Wix or Wordpress to more complicated frameworks like Next.js and Svelte. I can develop games using Godot, Pygame, and Unity. I can train an AI model using TensorFlow to detect when you are sitting with bad posture (looking at you).
          <br /> <br />
          I am also not limited to programming. I know how to use Affinity and Canva to manipulate designs and photos. I can write scores using Musescore and produce a song in FL Studio. I can edit and render videos and films using DaVinci Resolve. I can squat and dead lift 225lbs for 8 reps and run a mile afterwards.
          <br /> <br />
          I can do all of these things. And that ever-growing list of things is the reason why bios like these get rewritten. And it's a good thing. Every new bio is symbolic of a new me that has gained something since the last one. It represents my dynamic growth and ability to adapt. And one day I want to have contributed something that truly <span className='text-cyberviolet'>mattered,</span>, for someone, to someone.
        </div>
      </div>
      <div className='flex flex-wrap gap-6 max-w-[400px] py-3'>
        <a href="/docs/Resume.pdf" download className='button-1'>
          {`Resumé`}
          <BiDownload />
        </a>

        <a href='mailto:jchen4086@gmail.com' className='button-2'>
          {`Contact`}
          <BiMailSend />
        </a>
      </div>

      <div className='pt-6'>
        <Subtitle content='SKILLS' />
      </div>

      <LogoGrid
        logos={logoObjects}
        isToggled={isToggled}
      />

      <div className='pt-6'>
        <Subtitle content='TIMELINE' />
      </div>

      <Timeline />
    </div>
  )
}

export default LandingLayout