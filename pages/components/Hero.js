import React from 'react'
import { FaFileCode } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='flex flex-col items-center py-36'>

      <div className='pt-16 pb-24'>
        <FaFileCode size={350} color='#d6d3d1'/>
      </div>
        
        <div className='flex text-5xl font-bold'>
            <h1 className='text-white'>Aaron</h1>
            <h1 className='text-orange-500'>Robinson</h1>
            <h1 className='text-green-500'>.</h1>
        </div>

        <div className='flex font-semibold font-space text-md md:text-lg space-x-2 tracking-[12px] py-6'>
            
            <h2 className='text-green-500'> | </h2>
            <h2 className='text-yellow-400'>FULLSTACK DEVELOPER</h2>
            <h2 className='text-green-500'> | </h2>

        </div>

        <div className='py-8'>
            <a href='AaronResume.pdf' download>
                <button className='text-stone-300 text-lg md:text-xl font-bold border-2 border-stone-200 p-2 rounded-md hover:border-transparent
                hover:bg-stone-300 hover:text-stone-700 hover:translate-y-1 active:scale-90 transition duration-200'>Resume.pdf</button>
            </a>
        </div>


    </section>
  )
}

export default Hero