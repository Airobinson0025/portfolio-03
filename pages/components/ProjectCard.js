import React from 'react'
import Image from 'next/image'
import { FaLink } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaTools } from 'react-icons/fa'


const ProjectCard = ({img, name, description, link, gitlink, tools}) => {
  return (
    <div className='flex flex-col items-center pt-10 space-y-5 px-4'>
        <Image src={img} alt='img' width={450} height={450} className='rounded-xl w-auto h-auto border-4 border-stone-300'/>
        <p className='font-semibold text-xl md:text-2xl text-stone-100'>Project: {name}</p>
        <p className='font-space font-bold text-lg md:text-xl text-stone-200 text-center px-10 py-4 max-w-xl'>Description: {description}</p>

        <div className='flex items-center space-x-2 text-white hover:text-purple-400 transition duration-300'>
            <FaLink size={25} color='#a8a29e' />
            <a href={link} target='_blank'className='font-semibold text-xl text-stone-700 border-2 border-stone-200 py-2 px-4 rounded-lg bg-stone-200 hover:text-white hover:border-transparent hover:bg-stone-500 hover:translate-y-1 active:scale-90 transition transform duration-300' rel="noreferrer">Visit site</a>
        </div>

        <div className='flex items-center space-x-2'>
            <FaGithub size={25} color='#a8a29e'/>
            <a href={gitlink} target='_blank'className='font-semibold text-xl text-stone-700 border-2 border-stone-200 py-2 px-4 rounded-lg bg-stone-200 hover:text-white hover:border-transparent hover:bg-stone-500 hover:translate-y-1 active:scale-90 transition transform duration-300' rel="noreferrer">Github Repository</a>
        </div>

        <div className='flex items-center space-x-2'> 
            <FaTools size={25} color='#a8a29e'/>
            <p className='font-semibold text-md text-stone-300 md:text-xl'>{tools}</p>
        </div>

        
    </div>
  )
}

export default ProjectCard