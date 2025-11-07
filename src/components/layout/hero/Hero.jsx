import { motion } from "framer-motion";
import "./hero.css";
import Button from "../../ui/button/Button";
import HeroImage from "../../../assets/images/hero-svg.svg";
import SocialLinks from "../../ui/social-links/SocialLinks";
import { IoMailOutline } from "react-icons/io5";
import { FiFolder } from "react-icons/fi";

const Hero = () => {
  const sectionVariants = () => {
    const variants = { 
      hidden: { opacity: 0 }, 
      show: { opacity: 1, transition: { delayChildren: 0.25 } } 
    }

    return variants
  }

  const parentVariants = (displace) => {
    const variants = { 
      hidden: { opacity: 0, transform: `translateX(${displace})` }, 
      show: { opacity: 1, transform: `translateX(0%)`, transition: { ease: "easeOut", delayChildren: 0.25, duration: 1 } } 
    }

    return variants
  }

  const childVariants = (childPosition) => {
    const variants = { 
      hidden: { opacity: 0, transform: `translateX(-100%)` }, 
      show: { opacity: 1, transform: `translateX(0%)`, transition: { duration: 0.25 * childPosition } } 
    }

    return variants
  }

  return (
    // Hero Section
    <section id="hero">
      <div className="container">
        <motion.div variants={sectionVariants()} initial="hidden" animate="show" className="hero-content">
          <motion.div variants={parentVariants("-100%")} className="hero-text">            
            <motion.p variants={childVariants(1)} className="hero-greeting">HEY THERE! 👋</motion.p>
            <motion.h1 variants={childVariants(2)}>I'm Anthony Chinaza Akachukwu</motion.h1>
            <motion.h2 variants={childVariants(3)}>Frontend Developer | React & UX Engineer</motion.h2>
            <motion.p variants={childVariants(4)}>
              I build fast, responsive, and user-centered web experiences using
              React, Node.js, and modern JavaScript.
            </motion.p>

            <motion.p variants={childVariants(5)}>
              Crafting digital products that look great, feel smooth, and solve
              real problems.
            </motion.p>

            <motion.p variants={childVariants(6)}>Let’s create something amazing.</motion.p>
            <motion.div variants={childVariants(7)} className="hero-btns">
              <Button cta={false} label={<><FiFolder /> View My Works</>} href="#projects" />
              <Button cta={true} label={<><IoMailOutline /> Contact Me</>} href="#contact" />
            </motion.div>
            <SocialLinks variants={childVariants(8)} />
          </motion.div>
          <motion.div variants={parentVariants("100%")}
            className="hero-image"
          >
            <img src={HeroImage} alt="Developer working" decoding="sync" loading="eager" fetchPriority="high" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
