'use client'

import { redirect, useRouter } from "next/navigation"
import { FaGithub, FaHouse, FaLinkedinIn } from "react-icons/fa6"
import EmailIcon from "./EmailIcon"

const Navbar = () => {
  const router = useRouter()
  const email = 'jchen4086@gmail.com'

  return (
    <div className='fixed w-full z-50 h-[40px] text-center bg-null-body'>
      <div onClick={() => {router.push('/')}} className='
        w-[70%] h-full mx-auto flex
        items-center justify-center
      '>
        <div onClick={() => {router.push('/')}} className='
          clickable-dark
        '>
          <FaHouse 
            className='navbar-item'
            color='#feb080'
          />
        </div>

        <div className='absolute right-8'>
          <div className='flex flex-row gap-3'>
            <EmailIcon email={email} />
            <a href='https://www.linkedin.com/in/justin-chen-b27bb324b/' target='_blank' rel='noopener noreferrer'>
              <FaLinkedinIn
                className='navbar-item clickable-dark'
                color='#feb080'
              />
            </a>
            <a href='https://github.com/Jae7777' target='_blank' rel='noopener noreferrer'>
              <FaGithub
                className='navbar-item clickable-dark'
                color='#feb080'
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar