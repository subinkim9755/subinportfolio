import React from 'react'

function MainSection({
  text,
  children,
  bgColor,
}: {
  text: string
  children: React.ReactNode
  bgColor?: string
}) {
  return (
    <div className={`w-full h-150 scroll-mt-15 flex flex-col items-center justify-center text-2xl font-bold ${bgColor || 'bg-white'}`}>        <div className='w-full h-150 scroll-mt-15 flex flex-col items-center justify-center text-2xl font-bold'>
            <h1 className='text-3xl font-bold mb-4'>{text}</h1>
        </div>
        {children}

      
    </div>
  )
}

export default MainSection
