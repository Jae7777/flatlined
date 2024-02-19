import { Fira_Code } from "next/font/google"
import Image from "next/image"
import { BiDownload, BiMailSend } from "react-icons/bi"
import Subtitle from "../body/Subtitle"
import LogoGrid from "../body/LogoGrid"
import logos from "../../data/logos.json"

const hero = Fira_Code({
  subsets: ['latin'],
  weight: ['500']
})


interface LandingLayoutProps{
  isToggled: boolean
}

const LandingLayout: React.FC<LandingLayoutProps> = ({
  isToggled,
}) => {
  const logoObjects = Object.entries(logos).map(
    (obj) => {
      return {name: obj[0], path: obj[1]}
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
        logos={logoObjects}
        isToggled={isToggled}
      />
    </div>
  )
}

export default LandingLayout