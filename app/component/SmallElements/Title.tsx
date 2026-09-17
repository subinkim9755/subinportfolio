'use client'

import Image from 'next/image';
import React from 'react'

function Title({ text, textColor, borderColor, targetId }: { text: string; textColor?: string; borderColor?: string; targetId?: string }) {  
    
    const handleClick = () => {
    if (!targetId) return

    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className='w-full h-12 scroll-mt-15 flex gap-3 items-center justify-center '>
    
    <button type='button' cursor-pointer onClick={handleClick} className={`w-8 h-8 scroll-mt-15 flex flex-col items-center justify-center ${targetId === 'main' ? 'bg-white' : ''}`}>
    <Image src="/icons/pin.png" alt="pinImage" width={30} height={30} className='w-full h-150 object-cover' />
    </button>
      <h1 className={`text-4xl font-bold mb-4 ${textColor}`} style={{ borderBottom: borderColor ? `2px solid ${borderColor}` : 'none' }}>
        {text}
      </h1>
    </div>
  )
}

export default Title
