import React from 'react'
import './navlinks.css'

const NavLinks = ({ isOpen, toggleNav }) => {
  return (
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#hero" onClick={isOpen ? toggleNav : undefined}>Home</a></li>
        <li><a href="#about" onClick={isOpen ? toggleNav : undefined}>About</a></li>
        <li><a href="#skills" onClick={isOpen ? toggleNav : undefined}>Skills</a></li>
        <li><a href="#projects" onClick={isOpen ? toggleNav : undefined}>Projects</a></li>
        <li><a href="#contact" onClick={isOpen ? toggleNav : undefined}>Contact</a></li>
      </ul>
  )
}

export default NavLinks