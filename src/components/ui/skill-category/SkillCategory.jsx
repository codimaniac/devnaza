import { motion } from "framer-motion";
import "./skill-category.css";
import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaSass,
  FaGithub,
  FaServer
} from "react-icons/fa";
import { 
  SiAppwrite,
  SiAxios, 
  SiExpress, 
  SiFigma, 
  SiFirebase, 
  SiFramer, 
  SiGit, 
  SiMui, 
  SiNetlify, 
  SiNodedotjs, 
  SiNpm, 
  SiShadcnui, 
  SiTailwindcss, 
  SiTypescript, 
  SiVite 
} from "react-icons/si";

export const iconMap = {
  "FaHtml5": FaHtml5,
  "FaCss3": FaCss3,
  "FaJs": FaJs,
  "FaReact": FaReact,
  "FaBootstrap": FaBootstrap,
  "FaSass": FaSass,
  "FaGithub": FaGithub,
  "FaServer": FaServer,
  "SiAppwrite": SiAppwrite,
  "SiAxios": SiAxios, 
  "SiExpress": SiExpress, 
  "SiFigma": SiFigma, 
  "SiFirebase": SiFirebase, 
  "SiFramer": SiFramer, 
  "SiGit": SiGit, 
  "SiMui": SiMui,
  "SiNetlify": SiNetlify,
  "SiNodedotjs": SiNodedotjs, 
  "SiNpm": SiNpm,
  "SiShadcnui": SiShadcnui,
  "SiTailwindcss": SiTailwindcss, 
  "SiTypescript": SiTypescript, 
  "SiVite": SiVite 
};


const SkillCategory = ({ category, categoryIcon, skills, delayFactor }) => {
  const Icon = iconMap[categoryIcon];
  return (
    <motion.div initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.125 * delayFactor, ease: "easeInOut" }} className="skill-category">
      <h3>
        {Icon && <Icon size={24} />} {category}
      </h3>
      <div className="skill-items">
        {skills.map(({ name, icon }) => {
          const IconComponent = iconMap[icon];

          return (
            <span className="skill-item" key={name}>
              {IconComponent && <IconComponent size={18} />} {name}
            </span>
          );
        })}
      </div>
      
    </motion.div>
  );
};

export default SkillCategory;
