import Image from 'next/image'
import React from 'react'
import me from '../../../public/me.jpg'

function Info() {
  return (
    <div className='w-full h-150 scroll-mt-15 flex flex-col items-center justify-center text-2xl font-bold'>

        <h1 className='text-3xl font-bold mb-4'>- 김수빈 -</h1>
        <h1 className='text-3xl font-bold mb-4'>개발자 포트폴리오</h1>
        <div className='w-10 h-10 flex items-center border-b-4 border-[#FB8C00] justify-center p-4'/>       
            
        <div className='w-full h-70 flex items-center justify-center text-lg font-bold p-4'>            
            <Image src={me} alt="Profile Image" width={150} height={150} className='rounded-full mb-4' />
            <div className='w-150 h-30  flex flex-col items-center justify-center text-lg font-bold p-4 gap-2'>
                <p className='text-center w-full' >안녕하세요! 저는 열정적인 개발자 김수빈입니다.</p>
                <p className='text-center w-full' >창의적이고 효율적인 솔루션을 제공하는 것을 목표로 하고 있습니다.</p>
                <p className='text-center w-full' >제 포트폴리오를 통해 저의 역량과 성장을 확인해보세요.</p>
            </div>
        </div>
        
    </div>
  )
}

export default Info
