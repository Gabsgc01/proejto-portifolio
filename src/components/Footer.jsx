import React from 'react'
import { Link } from 'react-router-dom'
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-info">
          <p>© {new Date().getFullYear()} - Gabriel Ciriaco</p>
          <p className="footer-tagline">Desenvolvedor Full Stack apaixonado por criar soluções inovadoras</p>
        </div>
        
        <div className="footer-menu">
          <h4>Navegação</h4>
          <nav className="footer-nav">
            <Link to="/" className="footer-link">Início</Link>
            <Link to="/projects" className="footer-link">Projetos</Link>
            <Link to="/cursos" className="footer-link">Cursos</Link>
            <Link to="/contact" className="footer-link">Contato</Link>
          </nav>
        </div>
        
        <div className="socials">
          <h4>Redes Sociais</h4>
          <div className="social-links">
            <a href="https://github.com/Gabsgc01" target="_blank" rel="noreferrer" aria-label="GitHub" className="social-link">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gabriel-ciriaco-a43b0a198/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-link">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/ciriaco.gabriel_?igsh=MWNjZ3d3dHE2MXFqbw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" aria-label="Instagram" className="social-link">
            <FaInstagram />
          </a>
          <a href="mailto:gabrielciriaco123@gmail.com" aria-label="Email" className="social-link">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/5511954825043" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-link">
            <FaWhatsapp />
          </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
