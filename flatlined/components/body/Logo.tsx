import Image from "next/image"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"


interface LogoProps {
  imgSrc: string,
  name: string 
  backdrop?: boolean
}

const Logo: React.FC<LogoProps> = ({
  imgSrc,
  name,
  backdrop=false
}) => {
  return (
    <> 
      <div className='mx-auto my-2'>
        <TooltipProvider delayDuration={50}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className='mx-auto relative h-[40px] w-[40px] hover:cursor-pointer'>
                <div className={`
                  ${backdrop && 'light-backdrop-sm'}
                  mx-auto relative top-[10px]
                `}>
                </div>
                <Image
                  src={imgSrc}
                  alt={`${name}-flatlined.gg`}
                  fill
                  className='h-full w-full'
                  sizes='13vw'
                />
              </div>
            </TooltipTrigger>
            <TooltipContent className='text-center' side="bottom">
              <span>{name}</span>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </>
  )
}

export default Logo