import Image from "next/image"


interface LogoProps {
  imgSrc: string,
  name: string 
}

const Logo: React.FC<LogoProps> = ({
  imgSrc,
  name,
}) => {
  return (
    <> 
      <div className='mx-auto my-2'>
        <div className='mx-auto relative h-[40px] w-[40px]'>
          <div className='
            light-backdrop-sm
            mx-auto relative top-[10px]
          '>
          </div>
          <Image
            src={imgSrc}
            alt={`${name}-flatlined.gg`}
            fill
            className='h-full w-full'
          />
        </div>

        <div className='text-center text-alabaster text-sm pt-1'>
          {name}
        </div>
      </div>
    </>
  )
}

export default Logo