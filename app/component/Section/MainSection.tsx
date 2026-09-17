import React from 'react'
import Title from '../SmallElements/Title'
import { TMainSectionuProps } from '@/app/types/sections.type';
function MainSection({
  mainSectionProps
}: {
  mainSectionProps: TMainSectionuProps
}) {
  return (
    <div id={mainSectionProps.id} className={`w-full  min-h-150 h-auto scroll-mt-15 flex flex-col items-center justify-center text-2xl font-bold ${mainSectionProps.bgColor || 'bg-white'}`}>        <div className='w-full h-auto py-12 flex flex-col items-center justify-center text-2xl font-bold'>
      <Title titleProps={mainSectionProps} />
    </div>
    {mainSectionProps.children}

      
    </div>
  )
}

export default MainSection
