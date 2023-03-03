import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaLocationArrow } from 'react-icons/fa'
import { AiFillGithub } from 'react-icons/ai'
import { AiFillLinkedin } from 'react-icons/ai'
import { ImQuotesLeft } from 'react-icons/im'
import { ImQuotesRight } from 'react-icons/im'

const Contact = () => {
  return (
    <div className='flex flex-col md:flex-row mt-24' id='contact'>

      <div className='flex flex-col items-center bg-neutral-600 md:w-1/2'>

      <section className='flex flex-col items-center space-y-4 bg-neutral-600 py-10'>
        <h1 className='text-stone-200 text-2xl font-semibold underline underline-offset-4 decoration-double decoration-4 decoration-neutral-400 bg-neutral-600'>Available for hire</h1>
        
        <div className='flex items-center space-x-4 bg-neutral-600'>
          <AiOutlineMail size={45} color='white' className='bg-neutral-600'/>
          <p className='text-stone-200 text-lg font-semibold bg-neutral-600'>Airobinson0025@gmail.com</p>
        </div>

        <div className='flex items-center space-x-4 bg-neutral-600'>
          <BsFillTelephoneFill size={35} color='white' className='bg-neutral-600'/>
          <p className='text-stone-200 text-lg font-semibold bg-neutral-600'>804-335-5814</p>
        </div>

        <div className='flex items-center space-x-4 bg-neutral-600'>
          <FaLocationArrow size={35} color='white' className='bg-neutral-600'/>
          <p className='text-stone-200 text-lg font-semibold bg-neutral-600'>Richmond, Virginia</p>
        </div>

        <div className='flex items-center space-x-4 bg-neutral-600'>
          <AiFillGithub size={35} color='white' className='bg-neutral-600'/>
          <a href='https://github.com/Airobinson0025?tab=repositories' className='cursor-pointer hover:text-orange-400'>
          <p className='text-stone-200 text-lg font-semibold bg-neutral-600 hover:text-orange-400'>Github</p></a>
        </div>

        <div className='flex items-center space-x-4 bg-neutral-600'>
          <AiFillLinkedin size={35} color='white' className='bg-neutral-600'/>
          <a href='https://www.linkedin.com/in/aaron-robinson-b3949425b/' className='cursor-pointer hover:text-orange-400'>
          <p className='text-stone-200 text-lg font-semibold bg-neutral-600 hover:text-orange-400 '>Linkedin</p>
          </a>
        </div>
      </section>

      </div>


      <div className='flex flex-col items-center bg-color bg-stone-400 pt-20 space-y-6 md:w-1/2 '>
        <ImQuotesLeft size={50} className='bg-stone-400'/>
        <p className='text-2xl md:text-3xl text-center font-garamond bg-stone-400'>
          Dont let yesterday take up to much of today.
        </p>
        <p  className='text-2xl md:text-3xl font-garamond bg-stone-400'>- Will Rogers</p>
        <ImQuotesRight size={50} className='bg-stone-400'/>
      </div>





    </div>
  )
}

export default Contact