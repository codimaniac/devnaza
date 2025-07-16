import React from 'react'
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import './hero.css'
import Button from '../../ui/button/Button';

const Hero = () => {
  return (
    // Hero Section
    <section id="hero">
        <div className="container">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Hi, I'm Anthony Chinaza</h1>
                    <p>A passionate web developer dedicated to crafting beautiful, functional, and user-friendly digital experiences.</p>
                    <div className="hero-btns">
                        <Button cta={false} label="View My Works" href="#projects" />
                        <Button cta={true} label="Contact Me" href="#contact" />
                    </div>
                    <div className="social-icons">
                        <a href="https://github.com/codimaniac" target="_blank"><FaGithub /></a>
                        <a href="https://www.linkedin.com/in/anthony-akachukwu-a270332a0?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedinIn /></a>
                        <a href="https://x.com/simplyanthony07?t=wFbDmr8RPfqGP6ovfWhGeA&s=09" target="_blank"><FaTwitter /></a>
                        <a href="https://www.instagram.com/simplyanthony007?igsh=MTJveTFkZGxkeThxeQ==" target="_blank"><FaInstagram /></a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="src/assets/images/hero-svg.svg" alt="Developer working" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero