import { motion } from "framer-motion";
import "./skills.css";
import SkillCategory from "../../ui/skill-category/SkillCategory";
import frontendSkills from "../../ui/skill-category/frontend-skills.json";
import backendSkills from "../../ui/skill-category/backend-skills.json";
import dbTools from "../../ui/skill-category/database-and-tools.json";

const Skills = () => {
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
    // Skills Section
    <motion.section
      variants={sectionVariants()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      id="skills"
    >
      <div className="container">
        <motion.h2
          variants={parentVariants("100%")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          Tech Stack
        </motion.h2>
        <motion.div
          variants={parentVariants("10%")}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="skills-container"
        >
          <SkillCategory
            category="Frontend Stack"
            categoryIcon="FaCode"
            skills={frontendSkills}
            delayFactor={1}
          />
          <SkillCategory
            category="Backend Stack"
            categoryIcon="FaServer"
            skills={backendSkills}
            delayFactor={2}
          />
          <SkillCategory
            category="Database & Tools"
            categoryIcon="FaDatabase"
            skills={dbTools}
            delayFactor={3}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
