import React from 'react'
import './contact.css'
import Form from '../../ui/form/Form'

const Contact = () => {
  return (
    // Contact Section
    <section id="contact">
        <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-container">
                <div className="contact-info">
                    <h3>Let's talk about your project</h3>
                    <p>I'm currently available for freelance work and full-time positions. Feel free to reach out for collaborations or just to say hello!</p>
                    <div className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <h4>Email</h4>
                            <p>simplyanthony007@gmail.com</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-phone"></i>
                        <div>
                            <h4>WhatsApp</h4>
                            <p>+234 81 4185 5245</p>
                        </div>
                    </div>
                    <div className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <h4>Location</h4>
                            <p>Federal Capital Territory, Abuja.</p>
                        </div>
                    </div>
                </div>
                <Form />
            </div>
        </div>
    </section>
  )
}

export default Contact