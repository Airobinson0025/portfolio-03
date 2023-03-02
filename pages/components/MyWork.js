import React from 'react'
import ProjectCard from './ProjectCard'

const MyWork = () => {
    
    const myProjects = [
        {
          img: '/airbnbscreenshot.png',
          name: 'Airbnb Clone',
          description: 'This application is a clone of Airbnb. This application includes a homepage with a dynamic search bar that lets you choose the date range of your stay while you search your desired location. It also includes a search page that populates with the customers seach results. This site uses dummy data, no api calls.',
          link: 'https://airbnb-port-3ltl.vercel.app/',
          gitlink:'https://github.com/Airobinson0025/Airbnb-port-2',
          tools: 'Next.js, React, TailwindCss, Date Range Picker'
          
        },
    
        {
          img:'/screenshot.png',
          name: 'Tic Tac Toe Game',
          description: 'This application is a 2 player tic tac toe game. This is one of my first projects created during the first weeks of my time at FullStack Academy. ',
          link: 'https://celebrated-madeleine-e22d81.netlify.app/',
          gitlink:'https://github.com/Airobinson0025/arcade',
          tools: 'Html, Css, Javascript'
        }
      ]
    
    
    
    return (
        <div className='flex flex-col items-center py-24' id='work'>
            <h1 className='font-semibold text-white text-6xl pt-48 pb-24'>My Work</h1>
    
            <div className='space-y-24' id='projects'>
              {myProjects.map(project => (
                <ProjectCard 
                key={project.id}
                img={project.img}
                name={project.name}
                description={project.description}
                link={project.link}
                gitlink={project.gitlink}
                tools={project.tools}/>
              ))}
            </div>
    
        </div>
      )
    }


export default MyWork