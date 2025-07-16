import React from 'react'
import './skill-category.css'
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as IoIcons from 'react-icons/io';
import * as DiIcons from 'react-icons/di'; // Add more if needed

const iconLibraries = {
  Fa: FaIcons,
  Si: SiIcons,
  Io: IoIcons,
  Di: DiIcons
};

const SkillCategory = ({category, categoryIcon, skills}) => {
    const prefix = categoryIcon.slice(0, 2); // e.g., 'Fa', 'Si'
    const Icon = iconLibraries[prefix]?.[categoryIcon];
  return (
    <div className="skill-category">
        <h3>{Icon && <Icon size={24} />} {category}</h3>
        <div className="skill-items">
            {skills.map(({ name, icon }) => {
                const prefix = icon.slice(0, 2); // e.g., 'Fa', 'Si'
                const IconComponent = iconLibraries[prefix]?.[icon];

                return (                    
                    <span className="skill-item" key={name}>{IconComponent && <IconComponent size={18} />} {name}</span>
                );
            })}
            {/* <span className="skill-item"><i className="fab fa-html5"></i> HTML5</span> */}
        </div>
    </div>
  )
}

export default SkillCategory