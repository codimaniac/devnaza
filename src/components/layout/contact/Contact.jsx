import { motion } from 'framer-motion';
import './contact.css'
import Form from '../../ui/form/Form'
import { MdEmail, MdLocationPin, MdWhatsapp } from 'react-icons/md';

const Contact = () => {
  const sectionVariants = () => {
    const variants = {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { delayChildren: 0.25 } },
    };

    return variants;
  };

  const parentVariants = (displace) => {
    const variants = {
      hidden: { opacity: 0, transform: `translateX(${displace})` },
      show: {
        opacity: 1,
        transform: `translateX(0%)`,
        transition: { ease: "easeOut", delayChildren: 0.25, duration: 1 },
      },
    };

    return variants;
  };

  const childVariants = (childPosition) => {
    const variants = { 
      hidden: { opacity: 0, transform: `translateX(-100%)` }, 
      show: { opacity: 1, transform: `translateX(0%)`, transition: { duration: 0.25 * childPosition } } 
    }

    return variants
  };

  const sectionTitleVariants = {
    hidden: { opacity: 0, transform: 'translateY(100%)' },
    show: { opacity: 1, transform: 'translateY(0%)', transition: { ease: "easeOut", duration: 1 } },
  };

  return (
    // Contact Section
    <motion.section variants={sectionVariants()} initial="hidden" whileInView="show" viewport={{ once: true }} id="contact">
        <div className="container">
            <motion.h2 variants={sectionTitleVariants}>Get In Touch</motion.h2>
            <div className="contact-container">
                <motion.div variants={parentVariants("-100%")} initial="hidden" whileInView="show" viewport={{ once: true }} className="contact-info">
                    <motion.h3 variants={childVariants(1)}>Let's talk about your project</motion.h3>
                    <motion.p variants={childVariants(2)}>I'm currently available for freelance work and full-time positions. Feel free to reach out for collaborations or just to say hello!</motion.p>
                    <motion.div variants={childVariants(3)} className="contact-item">
                        <i className="fas fa-envelope"></i>
                        <div>
                            <h4 className="center-items"><MdEmail /> Email</h4>
                            <p>simplyanthony007@gmail.com</p>
                        </div>
                    </motion.div>
                    <motion.div variants={childVariants(4)} className="contact-item">
                        <i className="fas fa-phone"></i>
                        <div>
                            <h4 className="center-items"><MdWhatsapp /> WhatsApp</h4>
                            <p>+234 81 4185 5245</p>
                        </div>
                    </motion.div>
                    <motion.div variants={childVariants(5)} className="contact-item">
                        <i className="fas fa-map-marker-alt"></i>
                        <div>
                            <h4 className="center-items"><MdLocationPin /> Location</h4>
                            <p>Federal Capital Territory, Abuja.</p>
                        </div>
                    </motion.div>
                </motion.div>
                <Form />
            </div>
        </div>
    </motion.section>
  )
}

export default Contact