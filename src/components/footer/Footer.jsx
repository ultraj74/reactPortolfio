import React from "react";
import {FaFacebookSquare ,FaTwitterSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import './footer.css'


function Footer(){
    return (
        <footer>
            <a href="#" className="footer__logo">JUSTIN JOHN</a>

            <ul className="permalinks">
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>           
            </ul>

            <div className="footer__socials">
            <a href="https://facebook.com"><FaFacebookSquare/></a>
            <a href="https://instragam.com"><BsInstagram/></a>
            <a href="https://twitter.com"><FaTwitterSquare/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Justin John Amoroso. All rights reserved.</small>
            </div>
        </footer>
    )
}

export {Footer};