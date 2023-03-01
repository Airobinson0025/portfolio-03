import React from 'react'

const Hero = () => {
  return (
    <section className='flex flex-col items-center py-72'>
        
        <div className='flex text-5xl font-extrabold'>
            <h1 className='text-white'>Aaron</h1>
            <h1 className='text-orange-500'>Robinson</h1>
            <h1 className='text-green-500'>.</h1>
        </div>

        <div className='flex font-semibold space-x-4 tracking-widest py-3'>
            <h2 className='text-pink-500'>SOFTWARE ENGINEER</h2>
            <h2 className='text-green-500'> | </h2>
            <h2 className='text-white'>FULLSTACK DEVELOPER</h2>

        </div>


    </section>
  )
}

export default Hero