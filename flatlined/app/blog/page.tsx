
import Image from 'next/image'
import Blog1 from './entries/Blog1'

const BlogPage = () => {
  return (
    <div className='text-white px-6 pt-16 pb-8'>
      <div className='responsive-screen-md'>
        <div className='relative w-full h-full'>
          <Image
            src='/bar.jpg'
            alt='picture of a Cyberpunk Bar'
            fill
            className='object-fit'
            sizes='100vw'
            priority={true}
          />
        </div>
      </div>
      <div className='pt-6'>

      </div>
      <Blog1 />
    </div>
  )
}

export default BlogPage