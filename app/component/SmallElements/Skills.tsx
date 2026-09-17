import React from 'react'



function Skills({ text,color }: { text: string; color: string }) {
  return (
    <div className={`w-5 h-2 flex items-center justify-center rounded-lg ${color} text-white font-semibold`}>
        <p>
            {text}
        </p>
      
    </div>
  )
}

export default Skills
