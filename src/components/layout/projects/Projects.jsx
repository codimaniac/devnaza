import React from 'react'
import './projects.css'
import ProjectCard from '../../ui/project-card/projectCard'

const Projects = () => {
  return (
    // Projects Section
    <section id="projects">
        <div className="container">
            <h2>My Projects</h2>
            <div className="projects-container">
                <ProjectCard />
            </div>
        </div>
    </section>
  )
}

export default Projects