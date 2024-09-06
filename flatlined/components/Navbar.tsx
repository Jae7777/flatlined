'use client'

import { redirect, useRouter } from "next/navigation"
import { FaGithub, FaHouse, FaLinkedinIn } from "react-icons/fa6"
import EmailIcon from "./EmailIcon"
import { IoIosJournal } from "react-icons/io"

const email = 'justin.flatlined@gmail.com'

const Navbar = () => {
  const router = useRouter()

  return (
    <div className='fixed w-full z-50 h-[55px] text-center bg-background'>
      <div className='
        h-full mx-auto flex
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

        <div className="absolute left-8 text-[#feb080] text-sm">
          <div 
            className="flex gap-1 items-center clickable-dark"
            onClick={() => router.push('/blog')}
          >
            <IoIosJournal
              className="navbar-item"
              color='#feb080'
            />
            Blog
          </div>
        </div>

        <div className='absolute right-8'>
          <div className='flex flex-row gap-3'>
            <EmailIcon email={email} />
            <a href='https://www.linkedin.com/in/justin-flatlined/' target='_blank' rel='noopener noreferrer'>
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