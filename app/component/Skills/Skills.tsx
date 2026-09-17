import { TSkillProps } from '@/app/types/compoments.type'
import React from 'react'



function Skills({ skillProps }: { skillProps: TSkillProps }) {
  return (
    <div className={`w-auto whitespace-nowrap rounded-lg px-3 py-1 text-sm text-white font-semibold ${skillProps.color}`}>
        <p>
            {skillProps.text}
        </p>
      
    </div>
  )
}

export default Skills
