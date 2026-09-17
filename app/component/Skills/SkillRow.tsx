import React from 'react'
import Subject from '../SmallElements/Subject'
import Skills from './Skills'
import { TSkillRowProps } from '@/app/types/compoments.type'

function SkillRow({skillRowProps}: { skillRowProps: TSkillRowProps }) {
  const isDevOps = skillRowProps.skillText === 'DevOps'

  return (
    <div className={`flex w-full min-w-0 max-w-3xl flex-col items-center justify-start gap-3 sm:flex-row sm:gap-6 ${isDevOps ? 'px-2 sm:px-4 md:px-8' : 'px-3 sm:px-6 md:px-10'}`}>
      <Subject subjectProps={{ src: skillRowProps.src, text: skillRowProps.skillText }} />
      <div className='flex min-w-0 w-full flex-wrap justify-center gap-2 sm:justify-start'>
        {skillRowProps.skillList.map((skill, index) => (
          <Skills key={index} skillProps={{ text: skill, color: skillRowProps.color }} />
        ))}     
      </div>
    </div>
  )
}

export default SkillRow
