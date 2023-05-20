import React from 'react'
import './experience.css'
import {languages_frontEnd,languages_backEnd} from './languages'

const Experience = () => {
  return (
    <section id='experience'>
    <h5>What Skills I have</h5>
    <h2>My Experience</h2>


    <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>Frontend Development</h3>
        <div className='experience__content'>
          
        {
        languages_frontEnd.map(({name,level,icon}) => {
          return (
            <article className='experience__details'>
            <div className='xperience_details-icon'>{icon}</div>
            <div>
            <h4>{name}</h4>
            <small className='text-light'>{level}</small>
            </div>
            </article>
          )
          
        })
      }
      </div>
      </div>
      {/* End of FrontEnd */}
      


      <div className='experience__backend'>
        <h3>Backend Development</h3>
        <div className='experience__content'>
        {
        languages_backEnd.map(({name,level,icon}) => {
          return (
            <article className='experience__details'>
            <div className='xperience_details-icon'>{icon}</div>
            <div>
            <h4>{name}</h4>
            <small className='text-light'>{level}</small>
            </div>
            </article>
          )
          
        })
      }          
        </div>
      </div>
    </div>
    
    </section>
  )
}

export {Experience}