import { motion } from "framer-motion";
import "./hero.css";
import Button from "../../ui/button/Button";
import HeroImage from "../../../assets/images/hero-svg.svg";
import SocialLinks from "../../ui/social-links/SocialLinks";

const Hero = () => {
  return (
    // Hero Section
    <section id="hero">
      <div className="container">
        <motion.div
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { delayChildren: 0.25 } },
          }}
          initial="hidden"
          animate="show"
          className="hero-content"
        >
          <motion.div
            variants={{ hidden: { opacity: 0, transform: `translateX(-100%)` }, show: { opacity: 1, transform: `translateX(0%)`, transition: { delayChildren: 0.5, duration: 1 } } }}
            className="hero-text"
          >
            <motion.h1 variants={{ hidden: { opacity: 0, transform: `translateX(-100%)` }, show: { opacity: 1, transform: `translateX(0%)`, transition: { duration: 0.25 } } }}>Anthony Akachukwu</motion.h1>
            <motion.h2 variants={{ hidden: { opacity: 0, transform: `translateX(-100%)` }, show: { opacity: 1, transform: `translateX(0%)`, transition: { duration: 0.5 } } }}>Frontend Developer | React & UX Engineer</motion.h2>
            <motion.p variants={{ hidden: { opacity: 0, transform: `translateX(-100%)` }, show: { opacity: 1, transform: `translateX(0%)`, transition: { duration: 0.75 } } }}>
              I build fast, responsive, and user-centered web experiences using
              React, Node.js, and modern JavaScript.
            </motion.p>

            <motion.p variants={{ hidden: { opacity: 0, transform: `translateX(-100%)` }, show: { opacity: 1, transform: `translateX(0%)`, transition: { duration: 1 } } }}>
              Crafting digital products that look great, feel smooth, and solve
              real problems.
            </motion.p>

            <motion.p variants={{ hidden: { opacity: 0, transform: `translateX(-100%)` }, show: { opacity: 1, transform: `translateX(0%)`, transition: { duration: 1.25 } } }}>Let’s create something amazing.</motion.p>
            <motion.div variants={{ hidden: { opacity: 0, transform: `translateX(-100%)` }, show: { opacity: 1, transform: `translateX(0%)`, transition: { duration: 1.5 } } }} className="hero-btns">
              <Button cta={false} label="View My Works" href="#projects" />
              <Button cta={true} label="Contact Me" href="#contact" />
            </motion.div>
            <SocialLinks variants={{ hidden: { opacity: 0, transform: `translateX(-100%)` }, show: { opacity: 1, transform: `translateX(0%)`, transition: { duration: 1.75 } } }} />
          </motion.div>
          <motion.div
            variants={{ hidden: { opacity: 0, transform: `translateX(100%)` }, show: { opacity: 1, transform: `translateX(0%)`, transition: { duration: 1 } } }}
            className="hero-image"
          >
            <img src={HeroImage} alt="Developer working" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
