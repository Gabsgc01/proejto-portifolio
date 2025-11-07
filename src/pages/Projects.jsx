import React, { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import projectsData from '../data/projects'

function ProjectCard({project}){
  return (
    <article className="project-card">
      <h3>{project.title}</h3>
      <p className="project-description">{project.short}</p>
      {project.technologies && (
        <div className="technologies">
          {project.technologies.slice(0, 4).map(tech => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
      )}
      <div className="project-links">
        <a href={project.github || project.url} target="_blank" rel="noopener noreferrer" className="project-link">
          <FaGithub />
          Ver código
        </a>
        <Link to={`/projects/${project.id}`} className="project-link primary">
          <FaExternalLinkAlt />
          Ver detalhes
        </Link>
      </div>
    </article>
  )
}

export default function Projects(){
  const [query, setQuery] = useState('')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if(!q) return projectsData
    return projectsData.filter(p => p.title.toLowerCase().includes(q) || p.short.toLowerCase().includes(q))
  }, [query])

  return (
    <div className="projects-page">
      <div className="section">
        <h1>Projetos</h1>
        <p className="subtitle">Conheça alguns dos meus projetos mais recentes</p>
        
        <input
          type="text"
          placeholder="Buscar projetos..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          aria-label="Buscar projetos"
          className="search-bar"
        />

        <div className="projects-grid">
          {filtered.length === 0 ? (
            <p className="no-results">Nenhum projeto localizado</p>
          ) : (
            filtered.map(p => <ProjectCard key={p.id} project={p} />)
          )}
        </div>
      </div>
    </div>
  )
}
