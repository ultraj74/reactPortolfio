import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/justin-john-amoroso-258886237/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/ultraj74" target="_blank"><BsGithub/></a>
        <a href="https://www.facebook.com/ultraj7400/" target="_blank"><BsFacebook/></a>
    </div>
  )
}

export default HeaderSocial