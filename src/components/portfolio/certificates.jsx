import React from 'react'
import './portfolio.css'
import cf from './certificates'

const Certificates = () => {
    return (
      <section id='certificates'>
<h2 style={{marginTop: 50 }}>Certificates</h2>
    <div className='container portfolio__container' style={{marginBottom: 15}}>
      {
        cf.map(({id,image,title}) => {
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

export {Certificates}