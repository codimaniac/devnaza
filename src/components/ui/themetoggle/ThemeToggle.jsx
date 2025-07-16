import React from 'react'
import './themetoggle.css'
import { FaSun, FaMoon } from 'react-icons/fa'

const ThemeToggle = () => {
  const toggleTheme = () => {
    const body = document.body;
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
  };

  return (
    <div className="theme-toggle">
        <input type="checkbox" id="dark-mode-toggle" className="toggle-checkbox" onClick={toggleTheme}/>
        <label htmlFor="dark-mode-toggle" className="toggle-label">
            <FaSun className='fa-sun'/>
            <FaMoon className='fa-moon'/>
            <span className="toggle-ball"></span>
        </label>
    </div>
  )
}

export default ThemeToggle