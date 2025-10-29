import React from 'react'
import './hero.css'
import Button from '../../ui/button/Button';
import HeroImage from '../../../assets/images/hero-svg.svg';
import SocialLinks from '../../ui/social-links/SocialLinks';

const Hero = () => {
  return (
    // Hero Section
    <section id="hero">
        <div className="container">
            <div className="hero-content">
                <div className="hero-text">
                    <h1>Anthony Akachukwu</h1>
                    <h2>Frontend Developer | React & UX Engineer</h2>
                    <p>I build fast, responsive, and user-centered web experiences using React, Node.js, and modern JavaScript.</p>

                    <p>Crafting digital products that look great, feel smooth, and solve real problems.</p>

                    <p>Let’s create something amazing.</p>
                    <div className="hero-btns">
                        <Button cta={false} label="View My Works" href="#projects" />
                        <Button cta={true} label="Contact Me" href="#contact" />
                    </div>
                    <SocialLinks />
                </div>
                <div className="hero-image">
                    <img src={HeroImage} alt="Developer working" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero