import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="brand">
        <Link to="/">Gabriel Ciriaco</Link>
      </div>
      <nav>
        <NavLink to="/" end className={({isActive}) => isActive ? 'active' : ''}>Início</NavLink>
        <a href="#formacao" className="nav-scroll">Formação</a>
        <a href="#sobre" className="nav-scroll">Sobre</a>
        <a href="#experiencia" className="nav-scroll">Experiência</a>
        <NavLink to="/cursos" className={({isActive}) => isActive ? 'active' : ''}>Cursos</NavLink>
        <NavLink to="/projects" className={({isActive}) => isActive ? 'active' : ''}>Projetos</NavLink>
        <NavLink to="/contact" className={({isActive}) => isActive ? 'active' : ''}>Contato</NavLink>
      </nav>
    </header>
  )
}
