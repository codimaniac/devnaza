import React, { useState } from 'react'
import './themetoggle.css'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const [ darkTheme, setDarkTheme ] = useState(false)
  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    setDarkTheme(!darkTheme)
  };
  // const body = document.body;
  // const isDarkMode = body.classList.contains('dark-mode');

  return (
    <div className="theme-toggle" onClick={toggleTheme}>
      { darkTheme ? <FaSun className='fa-sun' size={18}/> : <FaMoon className='fa-moon' size={18}/> }
    </div>
  )
}

export default ThemeToggle