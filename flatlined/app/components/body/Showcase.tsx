import Image from "next/image"
import Link from "next/link"

interface ShowcaseProps {
  url: string
  isToggled: boolean
  isLive?: boolean
  name?: string
}

const Showcase: React.FC<ShowcaseProps> = ({
  url,
  isToggled,
  isLive = true,
  name = ''
}) => {
  return (
    <div className='py-3 '>
      <div className={`
        ${isToggled 
          ? 'responsive-screen-lg'
          : 'responsive-screen-xl'
        }
      `}>
        <div className='h-full w-full relative' style={{boxShadow: "0 0 10px #101215"}}>
          {isLive
            ? <iframe src={url} className='w-full h-full'/>
            : <Image
                src={url}
                alt={`${name}_flatlined`}
                fill
                className='object-cover'
              />
          }
        </div>
      </div>
    </div>
  )
}

export default Showcase