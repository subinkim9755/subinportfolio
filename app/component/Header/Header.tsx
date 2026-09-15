'use client'

import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import menu from '../../../public/menu.png'
import menuActive from '../../../public/menuActive.png'
import HeaderMenu from './HeaderMenu'




function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className='fixed top-0 left-0 z-20 w-full bg-white text-black flex flex-col items-center shadow-md'>
      <div className='w-full h-15 bg-white text-black flex items-center justify-between px-7'>
        <button

        
          type='button'
          onClick={() => {
            setIsMenuOpen(false)
            window.scrollTo({ top: 0, behavior: 'smooth' })
          }}
          aria-label='Go to top'
          className='text-xl font-bold hover:text-[#FB8C00] cursor-pointer '
        >
          KSB&apos;s Portfolio
        </button>

      <button
        type='button'
        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        className='w-12 h-12 flex items-center justify-center cursor-pointer border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none '
      >
        <Image
          src={isMenuOpen ? menuActive : menu}
          alt={isMenuOpen ? 'Close menu' : 'Open menu'}
          width={40}
          height={40}
        />
      </button>
      </div>

      <div className={`${isMenuOpen ? 'flex' : 'hidden'} absolute top-full left-0 z-50 w-full bg-white text-black flex-col items-center shadow-md`}>
        <HeaderMenu Text="About Me" targetId="about-me" onNavigate={() => setIsMenuOpen(false)} />
        <HeaderMenu Text="Skills" targetId="skills" onNavigate={() => setIsMenuOpen(false)} />
        <HeaderMenu Text="Projects" targetId="projects" onNavigate={() => setIsMenuOpen(false)} />
      </div>
    </div>
  )
}

export default Header
