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
        h-[300px] w-full
        ${isToggled 
          ? 'sm:h-[350px] md:h-[400px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px]'
          : 'xs:h-[350px] sm:h-[400px] md:h-[450px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]'
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