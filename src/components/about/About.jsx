import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {TbSchool} from 'react-icons/tb'
import {MdOutlineEngineering} from 'react-icons/md'
import {AiOutlineCode} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="about image" />
          </div>
        </div>
        <div className='about__content'>
          <div className='about__cards'>
            <article className='about__card'>
            <TbSchool/>
            <h5>School</h5>
            <small>Notre Dame of Marbel University</small>
            </article>

            <article className='about__card'>
            <MdOutlineEngineering/>
            <h5>Course</h5>
            <small>Bachelor of Science in Computer Engineering</small>
            </article>

            <article className='about__card'>
            <AiOutlineCode/>
            <h5>Projects</h5>
            <small>5+ Completed</small>
            </article>
          </div>
          <p style={{textAlign:'justify', margin: 20 }}>
          I am Justin John, a highly motivated graduate of Computer Engineering and a proud member of the Koronadal City Robotics Club. As a software engineer, I excel in designing and developing cutting-edge software applications. With expertise in programming, problem-solving, and software architecture, I create innovative solutions. My commitment to collaboration and continuous learning sets me apart. I thrive in dynamic environments, staying updated with emerging technologies to deliver exceptional results. I take pride in my dedication to excellence and teamwork. Together, we can achieve remarkable feats and make a positive impact through technology. I am ready to contribute as a valuable asset in software engineering.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export {About}