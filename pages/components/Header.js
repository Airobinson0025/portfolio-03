import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between md:items-center md:p-6 lg:p-8 items-center py-6 space-y-6'>
        <div className='flex text-2xl md:text-3xl font-bold'>
            <h1 className='text-white'>Aaron</h1>
            <h1 className='text-orange-500'>Robinson</h1>
            <h1 className='text-green-500'>.</h1>
            <h1 className='text-pink-500 animate-bounce'>_</h1>
        </div>
        
        <div>
            <ul className='flex space-x-7 text-white text-lg md:text-xl font-bold cursor-pointer'>
                <li className='hover:text-orange-600 transition duration-300'><a>About</a></li>
                <li className='hover:text-orange-600 transition duration-300'><a>Expertise</a></li>
                <li className='hover:text-orange-600 transition duration-300'><a>Work</a></li>
                <li className='hover:text-orange-600 transition duration-300'><a>Contact</a></li>
                
            </ul>
        </div>

        <div>
            <a href='AaronResume.pdf' download>
                <button className='text-white text-lg font-bold border-2 border-white p-2 rounded-md hover:border-transparent
                hover:bg-orange-500 hover:text-stone-600 hover:translate-y-1 active:scale-90 transition duration-200'>Resume.pdf</button>
            </a>
        </div>
    </div>
  )
}

export default Header