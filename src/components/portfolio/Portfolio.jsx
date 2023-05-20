import {React}from 'react'
import './portfolio.css'
import projectData from './projects'
import hardWare from './hardwareProjects'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Portfolio</h5>
      <h2>Projects</h2>

    <div className='container portfolio__container'>
      
      {
        projectData.map(({id,image,title,github,demo}) => {
          return (
        <article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
        <div className='portfolio__item-cta'>
        <a href={github} className='btn' target='_blank'>GitHub</a>
        <a href={demo} className='btn btn-primary' target='_blank'>Live Demo </a>
        </div>
      </article>
          )
          
        })
        
      }
    </div>
    <div className='container portfolio__container'>
      
      {
        hardWare.map(({id,image,title}) => {
          return (
        <article key={id} className='portfolio__item'>
        <div className='portfolio__item-image'>
        <img src={image} alt="" />
        </div>
        <h3>{title}</h3>
      </article>
          )
          
        })
      }
    </div>
    </section>
  )
}

export {Portfolio};