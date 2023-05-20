import React, {useState} from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BiBriefcase} from 'react-icons/bi'
import {TiContacts} from 'react-icons/ti'
import {TbCertificate} from 'react-icons/tb'

const Nav = () => {

    const[activeNav, setActiveNav] = useState('#')

  return (
    <nav>
        <a href="#" className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBook/></a>
        <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BiBriefcase/></a>
        <a href="#certificates" onClick={() => setActiveNav('#certificates')} className={activeNav === '#certificates' ? 'active' : ''}><TbCertificate/></a>
        <a href="#contact" onClick={() => setActiveNav('#contacts')} className={activeNav === '#contacts' ? 'active' : ''}><TiContacts/></a>
    </nav>
  )
}

export {Nav}