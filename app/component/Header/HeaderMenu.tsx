import React from 'react'
import { THeaderMenuProps } from '@/app/types/header.type';

function HeaderMenu({
 HeaderMenuProps
}: { HeaderMenuProps: THeaderMenuProps
}) {


  const handleClick = () => {
    document.getElementById(HeaderMenuProps.targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    HeaderMenuProps.onNavigate?.()
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      className={`w-full md:w-auto  bg-white text-gray-500 font-semibold flex flex-col items-center justify-between hover:text-[#FB8C00] cursor-pointer`}
    >
      <div className={`w-full h-12 md:w-30  px-4   bg-white flex items-center justify-between md:justify-center gap-2 md:gap-0   `}>
        <h2 className='whitespace-nowrap'>{HeaderMenuProps.Text}</h2>
      </div>
    </button>
  )
}

export default HeaderMenu
