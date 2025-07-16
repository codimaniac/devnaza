import React from 'react'
import './button.css'

const Button = ({ cta, label, href }) => {
  return (
    <a href={href} className={`btn ${cta ? 'btn-outline' : ''}`}>{label}</a>
    // <a href="#contact" className="btn btn-outline">Contact Me</a>
  )
}

export default Button