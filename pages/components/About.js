import React, {useState} from 'react'
import Image from 'next/image'
import { SiTarget } from 'react-icons/si'

const About = () => {

  
  const [ expand, setExpand ] = useState(false)

  const handleClick = () => {
    setExpand(!expand)

  }


  return (
    <div className='mb-48' id='about'>
      <div>
        <h1 className='font-semibold text-white text-6xl text-center pb-24'>About Me</h1>
      </div>

      <div className='flex flex-col items-center'>

           <div className='flex items-center justify-center my-6 sm:bg-neutral-300 sm:w-[450px] sm:h-[500px] sm:rounded-lg'>
             <Image 
             src='/myface.jpg'
             width={300}
             height={300}
             alt='about image'
             />
           </div>

           { expand ?
           <div className='text-white text-md md:text-lg text-center font-space py-8 px-4 max-w-[650px] md:[700px]'>
            <p className='pt-16 tracking-wide'>
              Hi there. My name is Aaron Robinson. I am a developer who is based out of Richmond, VA. Before my transition into the tech industry, I spent 3 years working as an Emergency Medical Technichian in downtown Richmond, VA. There, I learned how to treat a stranger like family, no matter the circumstances. I also learned the importance of a team and how to communicate effectively inside any enviornment.
            </p>
            
            <p className='pt-6 tracking-wide'>  
              I decided to transition into the tech industry to chase my dream of being a developer and a designer. Which lead me to attend The University of Virginia Techs web development program, powered by FullStack Academy. The journey was difficult at times, but the reward of friendships and postive outcomes through adversity has produced an even deeper desire to learn more about developing.
            </p>

            <p className='pt-6 tracking-wide'>
              I want to make the same impact on the world through developing, as I did practicing medicine. Make a difference in the life around me, one person at a time.
            </p>
           </div> : 
           
           <div className='text-white text-md md:text-lg text-center font-space py-8 px-4 max-w-[650px] max-h-72 overflow-hidden'>
           <p className='pt-16 tracking-wide'>
             Hi there. My name is Aaron Robinson. I am a developer who is based out of Richmond, VA. Before my transition into the tech industry, I spent 3 years working as an Emergency Medical Technichian in downtown Richmond, VA. There, I learned how to treat a stranger like family, no matter the circumstances. I also learned the importance of a team and how to communicate effectively inside any enviornment.
           </p>
           
           <p className='pt-6 tracking-wide'>  
             I decided to transition into the tech industry to chase my dream of being a developer and a designer. Which lead me to attend The University of Virginia Techs web development program, powered by FullStack Academy. The journey was difficult at times, but the reward of friendships and postive outcomes through adversity has produced an even deeper desire to learn more about developing.
           </p>

           <p className='pt-6 tracking-wide'>
             I want to make the same impact on the world through developing, as I did practicing medicine. Make a difference in the life around me, one person at a time.
           </p>
          </div> }

           <div className='my-10'>
            {expand ? <button className='text-stone-700 font-semibold py-2 px-6 bg-stone-200 rounded-full hover:bg-stone-500 hover:text-white hover:translate-y-1 transition duration-300' onClick={handleClick}>Show Less</button> : 
            <button className='text-stone-700 font-semibold py-2 px-6 bg-stone-200 rounded-full  hover:bg-stone-500 hover:text-white hover:translate-y-1 transition duration-300' onClick={handleClick}>Show More</button> }
           </div>



      </div>
    </div>
  )
}

export default About