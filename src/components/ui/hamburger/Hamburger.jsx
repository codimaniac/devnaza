import React from 'react'
import './hamburger.css'
import { FaBars, FaTimes } from 'react-icons/fa'

const Hamburger = ({ isOpen, toggleNav }) => {
  return (
    <div className="hamburger" onClick={toggleNav}>
        {isOpen ? <FaTimes size={24} className='fa-times' /> : <FaBars size={24} className='fa-bars' />}
    </div>
  )
}

export default Hamburger