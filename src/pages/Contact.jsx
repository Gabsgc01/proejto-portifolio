import React, { useState } from 'react'
import { FaInstagram, FaEnvelope, FaWhatsapp, FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa'

export default function Contact(){
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e){
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e){
    e.preventDefault()
    alert(`Contato enviado:\n${JSON.stringify(form, null, 2)}`)
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="contact-page">
      <div className="section">
        <h1>Contato e Redes Sociais</h1>
        
        <div className="contact-grid">
          <div className="contact-links">
            <a href="https://www.instagram.com/ciriaco.gabriel_?igsh=MWNjZ3d3dHE2MXFqbw%3D%3D&utm_source=qr" target="_blank" rel="noreferrer" className="contact-link instagram">
              <FaInstagram />
              <span>@ciriaco.gabriel_</span>
            </a>
            
            <a href="mailto:gabrielciriaco123@gmail.com" className="contact-link email">
              <FaEnvelope />
              <span>gabrielciriaco123@gmail.com</span>
            </a>
            
            <a href="https://wa.me/5511954825043" target="_blank" rel="noreferrer" className="contact-link whatsapp">
              <FaWhatsapp />
              <span>(11) 95482-5043</span>
            </a>
            
            <a href="https://www.linkedin.com/in/gabriel-ciriaco-a43b0a198/" target="_blank" rel="noreferrer" className="contact-link linkedin">
              <FaLinkedin />
              <span>Gabriel Ciriaco</span>
            </a>
            
            <a href="https://github.com/Gabsgc01" target="_blank" rel="noreferrer" className="contact-link github">
              <FaGithub />
              <span>Gabsgc01</span>
            </a>
          </div>
          
          <div className="contact-text">
            <h3>Vamos conversar!</h3>
            <p>
              Estou aberto a novas oportunidades e parcerias. Se meu perfil combina com o que você procura, entre em contato!
            </p>
            <div className="contact-actions">
              <a href="mailto:gabrielciriaco123@gmail.com" className="btn-primary">Enviar e-mail</a>
              <a href="/curriculo.pdf" target="_blank" rel="noreferrer" className="btn-secondary" download="Curriculo_Gabriel_Ciriaco.pdf">
                <FaDownload />
                Baixar CV
              </a>
            </div>
          </div>
        </div>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <h3>Ou envie uma mensagem</h3>
          <label>
            Nome
            <input name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input name="email" type="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Mensagem
            <textarea name="message" value={form.message} onChange={handleChange} required />
          </label>
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  )
}
