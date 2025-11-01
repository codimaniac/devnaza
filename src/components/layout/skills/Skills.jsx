import React from 'react'
import './skills.css'
import SkillCategory from '../../ui/skill-category/SkillCategory'
import frontendSkills from '../../ui/skill-category/frontend-skills.json';
import backendSkills from '../../ui/skill-category/backend-skills.json';
import dbTools from '../../ui/skill-category/database-and-tools.json';

const Skills = () => {
  return (
    // Skills Section
    <section id="skills">
        <div className="container">
            <h2>My Skills</h2>
            <div className="skills-container">
                <SkillCategory category="Frontend Stack" categoryIcon="FaCode" skills={frontendSkills} />
                <SkillCategory category="Backend Stack" categoryIcon="FaServer" skills={backendSkills} />
                <SkillCategory category="Database & Tools" categoryIcon="FaDatabase" skills={dbTools} />
            </div>
        </div>
    </section>
  )
}

export default Skills