import React from 'react'
import './button.css'

const Button = ({ cta, label, href, target}) => {
  return (
    <a href={href} className={`btn ${cta ? 'btn-outline' : ''}`} target={target}>{label}</a>
  )
}

Button.defaultProps = {
  cta: false,
  target: '',
  href: '#'
}

export default Button