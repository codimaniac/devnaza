import { motion } from "framer-motion";
import "./about.css";
import DevPFP from "../../../assets/images/dev-naza-pfp.webp";
import Project from "../../ui/project-card/projects.json";
import { AiOutlineTrophy } from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

const About = () => {
  const sectionVariants = () => {
    const variants = {
      hidden: { opacity: 0 },
      show: { opacity: 1, transition: { delayChildren: 0.25 } },
    };

    return variants;
  };

  const parentVariants = (displace) => {
    const variants = {
      hidden: { opacity: 0, transform: `translateY(${displace})` },
      show: {
        opacity: 1,
        transform: `translateY(0%)`,
        transition: { ease: "easeOut", delayChildren: 0.25, duration: 1 },
      },
    };

    return variants;
  };

  const childVariants = (childPosition) => {
    const variants = {
      hidden: { opacity: 0, transform: `scale(0.5)` },
      show: {
        opacity: 1,
        transform: `scale(1)`,
        transition: { duration: 0.5 * childPosition },
      },
    };

    return variants;
  };

  const sectionTitleVariants = (displace) => {
    const variants = {
      hidden: { opacity: 0, transform: `translateY(${displace})` },
      show: { opacity: 1, transform: 'translateY(0%)', transition: { ease: "easeOut", duration: 1 } }
    }

    return variants
  };

  return (
    // About Section
    <motion.section
      id="about"
      variants={sectionVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="container">
        <motion.h2
          variants={sectionTitleVariants("100%")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}
        >
          About Me
        </motion.h2>
        <motion.div
          variants={parentVariants("30%")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="about-content"
        >
          <div className="about-image">
            <img src={DevPFP} alt="Anthony Chinaza" />
          </div>
          <div className="about-text">
            <h3>Frontend React Developer Based in Nigeria</h3>
            <p>
              I build modern, responsive websites and web applications using the
              latest technologies. With over 2 years of hands-on experience
              creating real-world digital products, I’m here to help bring your
              ideas to life with clean, scalable solutions.
            </p>
            <p>
              My approach combines technical expertise with creative
              problem-solving to deliver solutions that are not only functional
              but also visually appealing and user-friendly.
            </p>
            <div className="experience">
              <motion.div
                variants={childVariants(1)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="experience-item"
              >
                <h4>{Project.length}</h4>
                <p>Projects Completed</p>
                <AiOutlineTrophy
                  className="icon-shake icon-shake-hover icon-shake-slow"
                  size={22}
                />
              </motion.div>
              <motion.div
                variants={childVariants(2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="experience-item"
              >
                <h4>2+</h4>
                <p>Years Experience</p>
                <BsBriefcase
                  className="icon-shake icon-shake-hover icon-shake-slow"
                  size={22}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
