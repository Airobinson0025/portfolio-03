import React from 'react'
import { FaReact } from 'react-icons/fa'
import { AiOutlineTool } from 'react-icons/ai'
import { SiJavascript} from 'react-icons/si'
import { SiHtml5 } from 'react-icons/si'
import { SiCss3 } from 'react-icons/si'
import { SiTailwindcss } from 'react-icons/si'
import { SiNodedotjs } from 'react-icons/si'
import { SiPostgresql } from 'react-icons/si'
import { SiReact } from 'react-icons/si'
import { SiNextdotjs } from 'react-icons/si'

const Expertise = () => {
  return (
    <div className='flex flex-col items-center justify-center py-32'id='expertise'>
        <h1 className='text-white text-6xl font-semibold pb-24'>My Expertise</h1>


        <div className='flex flex-col items-start space-x-6 border-4 border-white rounded-md mx-4 p-4
        max-w-[625px]'>
            <div className='flex items-center space-x-4 py-10'>
               <FaReact size={50} color='white'/>
               <h2 className='font-semibold text-3xl text-white underline underline-offset-8 decoration-indigo-500 decoration-4 decoration-double'>Fullstack Dev</h2>
            </div>
            <p className='flex font-space text-stone-200 text-lg pb-10'>
                Passionate about frontend and backend development. Recent graduate from Virginia Tech Universitys Web Development Program, powered by FullStack Academy. Experience in React and Next,js frameworks.
            </p>
        </div>

        <div className='flex flex-col border-4 border-whiite min-w-[450px] max-w-[625px] mt-10 rounded-md'>
            <div className='flex items-center py-10 px-4'>
               <AiOutlineTool size={50} color='white'/>
               <h2 className='font-semibold text-3xl text-white underline underline-offset-8 decoration-orange-500 decoration-4 decoration-double px-4'>Skills & Tools</h2>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 py-6'>

               <div className='py-2 px-6 space-y-2 '>
                   <SiHtml5 size={50} color='#f59e0b'/>
                   <p className='text-stone-200 text-lg font-semibold font-space'>Html5</p>
               </div>

               <div className='py-2 px-6 space-y-2 '>
                   <SiCss3  size={50} color='#3b82f6'/>
                   <p className='text-stone-200 text-lg font-semibold font-space'>Css3</p>
               </div>

               <div className='py-2 px-6 space-y-2 '>
                   <SiTailwindcss  size={50} color='#7dd3fc'/>
                   <p className='text-stone-200 text-lg font-semibold font-space'>TailwindCss</p>
               </div>

               <div className='py-2 px-6 space-y-2 '> 
                   <SiJavascript  size={50} color='#facc15'/>
                   <p className='text-stone-200 text-lg font-semibold font-space'>Javascript</p>
               </div>

               <div className='py-2 px-6 space-y-2 '>
                   <SiReact  size={50} color='#67e8f9'/>
                   <p className='text-stone-200 text-lg font-semibold font-space'>React</p>
               </div>

               <div className='py-2 px-6 space-y-2 '>
                   <SiNextdotjs  size={50} color='white'/>
                   <p className='text-stone-200 text-lg font-semibold font-space'>Next.js</p>
               </div>
            
               <div className='py-2 px-6 space-y-2 '>
                   <SiNodedotjs  size={50} color='#a3e635'/>
                   <p className='text-stone-200 text-lg font-semibold font-space'>Node.js</p>
               </div>

               <div className='py-2 px-6  md:pr-8 space-y-2 '>
                   <SiPostgresql  size={50} color='#60a5fa'/>
                   <p className='text-stone-200 text-lg font-semibold font-space'>Postgresql</p>
               </div>

           </div> 

        </div>
    </div>
  )
}

export default Expertise