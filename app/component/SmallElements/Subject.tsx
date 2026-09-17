import React from 'react'
import { TSubjectProps } from '@/app/types/compoments.type'
import Image from 'next/image'


function Subject(subjectProps: { subjectProps: TSubjectProps }) {
  const isDevOpsIcon = subjectProps.subjectProps.src.includes('devops')

  return (
    <div className='flex w-36 shrink-0 items-center justify-center gap-2 px-2  text-2xl font-bold'>
      <Image
        src={subjectProps.subjectProps.src}
        alt="Subject Image"
        width={isDevOpsIcon ? 56 : 40}
        height={isDevOpsIcon ? 56 : 40}
        className={isDevOpsIcon ? 'h-14 w-14 object-contain mix-blend-multiply' : 'h-10 w-10 object-contain'}
      />
      <p className='text-center'>{subjectProps.subjectProps.text}</p>
    </div>
  )
}

export default Subject
