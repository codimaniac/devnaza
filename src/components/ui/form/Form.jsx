import { React, useState } from 'react'
import './form.css'
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '', 
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({
            ...formData,
            [id]: value
        });
    }

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.send('service_55ffn8q', 'template_eerm02t', formData, 'RRA1VwpUBLZohTtu1')
            .then((response) => {
                console.log('Email sent successfully:', response.status, response.text);
                toast('Message sent successfully!');
                setFormData({
                    name: '',
                    email: '',
                    subject: '',
                    message: ''
                });
            }, (error) => {
                console.error('Failed to send email:', error);
                toast('Failed to send message. Please try again later.', {
                    type: 'error',
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                })
            });
    }

    return (
        <div className="contact-form">
            <form onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
                </div>
                <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Your Message" required></textarea>
                </div>
                <button type="submit" className="btn">Send Message</button>
            </form>
    </div>
  )
}

export default Form