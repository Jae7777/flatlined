import Image from "next/image";


const CogsBackground = () => {
  return (
    <>
      <div className="fixed flex justify-center items-center z-[-50] brightness-75 size-[400px] bottom-[-175px] left-[-175px]">
        <Image
          src='/cogwheel1.png'
          alt="Spinning Cogwheel Animation"
          width="400"
          height="400"
          style={{ animation: "spin 60s linear infinite"}}
          className="absolute"
        />
        <Image
          src='/cogwheel2.png'
          alt="Spinning Cogwheel Animation"
          width="230"
          height="230"
          style={{ animation: "spin 80s linear infinite reverse"}}
          className="absolute"
        />
      </div>
      <div className="fixed z-[-50] brightness-75 size-[300px] right-[-150px] top-[-80px]">
        <Image
          src='/cogwheel2.png'
          alt="Spinning Cogwheel Animation"
          width="400"
          height="400"
          style={{ animation: "spin 60s linear infinite"}}
          className="absolute"
        />
      </div>
    </>
  )
}

export default CogsBackground;