import React from 'react'
import { FaFileCode } from 'react-icons/fa'
import { BsArrowDown } from 'react-icons/bs'

const Hero = () => {
  return (
    <section className='flex flex-col items-center py-36'>

      <div className='pt-16 pb-24'>
        <FaFileCode size={350} color='#d6d3d1'/>
      </div>
        
        <div className='flex text-5xl font-bold'>
            <h1 className='text-white'>Aaron</h1>
            <h1 className='text-orange-500'>Robinson</h1>
            <h1 className='text-pink-500'>.</h1>
        </div>

        <div className='flex font-semibold font-space text-md md:text-lg text-center space-x-2 tracking-[6px] sm:tracking-[12px] py-10'>
            
            <h2 className='text-stone-300'> | </h2>
            <h2 className='text-yellow-400'>FULLSTACK DEVELOPER</h2>
            <h2 className='text-stone-300'> | </h2>

        </div>

        <div className='py-8'>
            <a href='AaronResume.pdf' download>
                <button className='text-stone-300 text-2xl font-bold border-2 border-stone-200 p-2 rounded-md hover:border-transparent
                hover:bg-stone-300 hover:text-stone-700 hover:translate-y-1 active:scale-90 transition duration-200'>Resume.pdf</button>
            </a>
        </div>


        <div className='my-32 py-5 border-2 border-purple-600 rounded-full animate-pulse hover:translate-y-1 transition duration-300'>
          <a href='#about'>
             <BsArrowDown size={45} color='#e7e5e4'/>
          </a>   
        </div>


    </section>
  )
}

export default Hero