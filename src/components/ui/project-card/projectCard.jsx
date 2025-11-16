import { motion } from 'framer-motion';
import './projectcard.css'
import Button from '../../ui/button/Button'
import { 
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaBootstrap,
  FaEnvelopeOpen,
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
import projects from './projects.json'
import { IoCode, IoLink } from 'react-icons/io5';

export const iconMap = {
  "FaHtml5": FaHtml5,
  "FaCss3": FaCss3,
  "FaJs": FaJs,
  "FaReact": FaReact,
  "FaEnvelopeOpen": FaEnvelopeOpen,
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

const ProjectCard = () => {
    return (
        <>
            {projects.map(({ id, title, description, image, tags, liveDemo, code }) => (
                <motion.div className="project-card" key={id} initial={{ scale: 0.5, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.125 * id, ease: [0.42, 0, 0.58, 1] }}>
                    <div className="project-image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="project-info">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="project-tags">
                            {tags.map(({ tag, icon }) => {
                                const Icon = iconMap[icon];
                                const isEmailJs = tag === "EmailJS"
                                return (
                                    <span className="project-tag" key={tag}>
                                        {Icon && <Icon style={ isEmailJs ? {transform: 'rotate(45deg)'} : undefined} />} {tag}
                                    </span>
                                );
                            })}
                        </div>
                        <div className="project-links">
                            <Button cta={true} label={<><IoCode /> Code</>} href={code} target='_blank' />
                            <Button cta={false} label={<><IoLink /> Live Demo</>} href={liveDemo} target='_blank' />
                        </div>
                    </div>
                </motion.div>
            ))}
        </>
    )
}

export default ProjectCard