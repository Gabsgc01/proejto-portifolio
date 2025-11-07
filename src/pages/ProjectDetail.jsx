import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt, FaArrowLeft } from 'react-icons/fa'
import projects from '../data/projects'

export default function ProjectDetail(){
  const { id } = useParams()
  const project = projects.find(p => p.id === id)

  if(!project) return (
    <div className="project-detail-page">
      <div className="section">
        <h2>Projeto não encontrado</h2>
        <Link to="/projects" className="btn-primary">
          <FaArrowLeft />
          Voltar aos projetos
        </Link>
      </div>
    </div>
  )

  return (
    <div className="project-detail-page">
      <div className="section">
        <Link to="/projects" className="back-link">
          <FaArrowLeft />
          Voltar aos projetos
        </Link>
        
        <div className="project-header">
          <h1>{project.title}</h1>
          <div className="project-actions">
            <a href={project.github || project.url} target="_blank" rel="noopener noreferrer" className="btn-primary">
              <FaGithub />
              Ver código
            </a>
            {project.demo && (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="btn-secondary">
                <FaExternalLinkAlt />
                Ver demo
              </a>
            )}
          </div>
        </div>
        
        <div className="project-content">
          <p className="project-description">{project.description}</p>
          
          {project.technologies && (
            <div className="technologies-section">
              <h3>Tecnologias Utilizadas</h3>
              <div className="technologies">
                {project.technologies.map(tech => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          )}
          
          {project.features && (
            <div className="features-section">
              <h3>Funcionalidades</h3>
              <ul className="features-list">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
