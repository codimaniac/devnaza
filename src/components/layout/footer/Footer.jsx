import React from 'react'
import './footer.css'
import NavLogo from '../../ui/navlogo/NavLogo'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    // Footer
    <footer>
        <div className="container">
            <div className="footer-content">
                <NavLogo />
                <div className="social-icons" style={{margin: 0}}>
                    <a href="https://github.com/codimaniac" target="_blank"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/anthony-akachukwu-a270332a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedinIn /></a>
                    <a href="https://x.com/simplyanthony07?t=wFbDmr8RPfqGP6ovfWhGeA&s=09" target="_blank"><FaTwitter /></a>
                    <a href="https://www.instagram.com/simplyanthony007?igsh=MTJveTFkZGxkeThxeQ==" target="_blank"><FaInstagram /></a>
                </div>
                <p className="copyright">©  Designed and developed by Anthony Chinaza Akachukwu. All rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer