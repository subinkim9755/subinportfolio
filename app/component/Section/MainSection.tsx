import React from 'react'
import Title from '../SmallElements/Title'

function MainSection({
  text,
  children,
  bgColor,
  id,
}: {
  text: string
  children: React.ReactNode
  bgColor?: string
  id?: string
}) {
  return (
    <div id={id} className={`w-full max-w-[1200px] h-150 scroll-mt-15 flex flex-col items-center justify-center text-2xl font-bold ${bgColor || 'bg-white'}`}>        <div className='w-full h-150 scroll-mt-15 flex flex-col items-center justify-center text-2xl font-bold'>
      <Title text={text} targetId={id} />
    </div>
    {children}

      
    </div>
  )
}

export default MainSection
