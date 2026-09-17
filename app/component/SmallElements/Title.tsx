'use client'

import { TTitleProps } from '@/app/types/compoments.type';
import Image from 'next/image';
import React from 'react'

function Title({ titleProps }: { titleProps: TTitleProps }) {  
    
    const handleClick = () => {
    if (!titleProps.targetId) return

    document.getElementById(titleProps.targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className='w-full h-12 scroll-mt-15 flex gap-3 items-center justify-center '>
    
    <button type='button' onClick={handleClick} aria-label={`${titleProps.text} section으로 이동`} className={`relative z-10 w-8 h-8 scroll-mt-15 flex flex-col items-center justify-center overflow-hidden cursor-pointer ${titleProps.targetId === 'main' ? 'bg-white' : ''}`}>
    <Image src="/icons/pin.png" alt="pinImage" width={30} height={30} className='w-full h-full object-contain' />
    </button>
      <h1 className={`text-4xl font-bold mb-4 ${titleProps.textColor}`} style={{ borderBottom: titleProps.borderColor ? `2px solid ${titleProps.borderColor}` : 'none' }}>
        {titleProps.text}
      </h1>
    </div>
  )
}

export default Title
