import React from 'react'
import './about.css'
import DevPFP from '../../../assets/images/dev-naza-pfp.webp';
import Project from '../../ui/project-card/projects.json'
import { AiOutlineTrophy } from 'react-icons/ai';
import { BsBriefcase } from 'react-icons/bs';

const About = () => {
  return (
    // About Section
    <section id="about">
        <div className="container">
            <h2>About Me</h2>
            <div className="about-content">
                <div className="about-image">
                    <img src={DevPFP} alt="Anthony Chinaza" />
                </div>
                <div className="about-text">
                    <h3>Frontend React Developer Based in Nigeria</h3>
                    <p>I specialize in creating modern, responsive websites and web applications using the latest technologies. With over 2 years of experience in the industry, I've helped numerous clients bring their digital visions to life.</p>
                    <p>My approach combines technical expertise with creative problem-solving to deliver solutions that are not only functional but also visually appealing and user-friendly.</p>
                    <div className="experience">
                        <div className="experience-item">
                            <h4>{Project.length}</h4>
                            <p>Projects Completed</p>
                            <AiOutlineTrophy className='icon-shake icon-shake-hover icon-shake-slow' size={22}/>
                        </div>
                        <div className="experience-item">
                            <h4>2+</h4>
                            <p>Years Experience</p>
                            <BsBriefcase className='icon-shake icon-shake-hover icon-shake-slow' size={22} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About