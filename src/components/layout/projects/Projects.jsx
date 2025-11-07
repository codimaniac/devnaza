import React from "react";
import "./projects.css";
import ProjectCard from "../../ui/project-card/projectCard";
import { motion } from "framer-motion";

const Projects = () => {
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

  return (
    // Projects Section
    <motion.section
      variants={sectionVariants()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="projects"
    >
      <div className="container">
        <motion.h2
          variants={parentVariants("100%")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>
        <motion.div
          variants={parentVariants("2%")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="projects-container"
        >
          <ProjectCard />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;
