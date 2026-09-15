import React from 'react'

function HeaderMenu({
  Text,
  targetId,
  onNavigate,
}: {
  Text: string
  targetId: string
  onNavigate?: () => void
}) {
  const handleClick = () => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
    onNavigate?.()
  }

  return (
    <button
      type='button'
      onClick={handleClick}
      className='w-full h-15 bg-white text-gray-500 text-lg font-semibold flex flex-col items-center justify-between shadow-md hover:text-[#FB8C00] cursor-pointer'
    >
      <div className='w-full h-15 bg-white flex items-center justify-between px-7 shadow-md'>
        <h2>{Text}</h2>
      </div>
    </button>
  )
}

export default HeaderMenu
