import React, { useState } from 'react'
import './navbar.css'
import NavLinks from '../../ui/navlinks/NavLinks'
import NavLogo from '../../ui/navlogo/NavLogo'
import ThemeToggle from '../../ui/themetoggle/ThemeToggle'
import Hamburger from '../../ui/hamburger/Hamburger'

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  
  return (
    <div className="nav-container">
      <nav>
        <NavLogo />
        <NavLinks isOpen={isNavOpen} toggleNav={toggleNav} />
        <ThemeToggle />
        <Hamburger isOpen={isNavOpen} toggleNav={toggleNav} />
      </nav>
    </div>
  )
}

export default NavBar