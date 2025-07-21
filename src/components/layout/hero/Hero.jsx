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
                    <h1>Hi, I'm Anthony Chinaza</h1>
                    <p>A passionate web developer dedicated to crafting beautiful, functional, and user-friendly digital experiences.</p>
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