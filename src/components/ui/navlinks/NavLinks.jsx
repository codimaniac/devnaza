import React from 'react'
import './navlinks.css'
import SocialLinks from '../social-links/SocialLinks'

const NavLinks = ({ isOpen, toggleNav }) => {
  return (
      <ul className={`nav-links ${isOpen ? 'active scale-up-center' : ''}`}>
        <li><a href="" onClick={isOpen ? toggleNav : undefined}>Home</a></li>
        <li><a href="#about" onClick={isOpen ? toggleNav : undefined}>About</a></li>
        <li><a href="#skills" onClick={isOpen ? toggleNav : undefined}>Skills</a></li>
        <li><a href="#projects" onClick={isOpen ? toggleNav : undefined}>Projects</a></li>
        <li><a href="#contact" onClick={isOpen ? toggleNav : undefined}>Contact</a></li>

       <SocialLinks className="show"/>
       <p className="copyright show">© 2025 Anthony Chinaza. All rights reserved.</p>
      </ul>
  )
}

export default NavLinks