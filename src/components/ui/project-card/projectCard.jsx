import React from 'react'
import './projectcard.css'
import Button from '../../ui/button/Button'
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import projects from './projects.json'

const ProjectCard = () => {
    const iconLibraries = {
      Fa: FaIcons,
      Si: SiIcons,
    };
    return (
        <>
            {projects.map(({ id, title, description, image, tags, liveDemo, code }) => (
                <div className="project-card" key={id}>
                    <div className="project-image">
                        <img src={image} alt={title} />
                    </div>
                    <div className="project-info">
                        <h3>{title}</h3>
                        <p>{description}</p>
                        <div className="project-tags">
                            {tags.map(({ tag, icon }) => {
                                const prefix = icon.slice(0, 2); // e.g., 'Fa', 'Si'
                                const IconComponent = iconLibraries[prefix]?.[icon];
                                const isEmailJs = tag === "EmailJS"
                                return (
                                    <span className="project-tag" key={tag}>
                                        {IconComponent && <IconComponent style={ isEmailJs ? {transform: 'rotate(45deg)'} : undefined} />} {tag}
                                    </span>
                                );
                            })}
                        </div>
                        <div className="project-links">
                            <Button cta={true} label="Live Demo" href={liveDemo} target='_blank' />
                            <Button cta={false} label="Code" href={code} target='_blank' />
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

export default ProjectCard