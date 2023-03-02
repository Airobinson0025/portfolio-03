import React from 'react'


const Header = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:items-center md:p-6 lg:p-8 items-center py-6 space-y-10'>
        <div className='flex text-2xl md:text-3xl font-bold'>
            <h1 className='text-white'>Aaron</h1>
            <h1 className='text-orange-500'>Robinson</h1>
            <h1 className='text-green-500'>.</h1>
            <h1 className='text-pink-500 animate-bounce'>_</h1>
        </div>
        
        <div>
            <ul className='flex space-x-7 text-stone-300 text-center text-lg lg:text-xl font-bold font-space cursor-pointer px-6 hover:text-white transition duration-100 tracking-widest'>
               
                <li className='hover:text-purple-500 transition duration-400 active:scale-90'><a href='#expertise'>Expertise</a></li>
                <li className='hover:text-purple-500 transition duration-400 active:scale-90'><a href='#work'>Work</a></li>
                <li className='hover:text-purple-500 transition duration-400 active:scale-90'><a href='#contact'>Contact</a></li>
                
            </ul>
        </div>

       
    </div>
  )
}

export default Header