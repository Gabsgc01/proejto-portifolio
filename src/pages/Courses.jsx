import React from 'react'

export default function Courses() {
  const courses = [
    {
      title: 'Inglês Geral – 2015/2019',
      institution: 'Fisk',
      image: 'https://img.icons8.com/?size=100&id=15532&format=png&color=000000'
    },
    {
      title: 'Treinamento SAP-SD - 30 Horas',
      institution: 'Santander Open Academy',
      image: 'https://img.icons8.com/?size=100&id=44026&format=png&color=000000'
    },
    {
      title: 'Microsoft Power BI – 8 Horas',
      institution: 'Santander Open Academy',
      image: 'https://img.icons8.com/?size=100&id=qYfwpsRXEcpc&format=png&color=000000'
    },
    {
      title: 'Python – 8 Horas',
      institution: 'Santander Open Academy',
      image: 'https://img.icons8.com/?size=100&id=13441&format=png&color=000000'
    },
    {
      title: 'Inglês – 2019/2024',
      institution: 'Sunshine English School',
      image: 'https://img.icons8.com/?size=100&id=15532&format=png&color=000000'
    },
    {
      title: 'Iniciação em Robótica - 2019/2020',
      institution: 'Cruzeiro do Sul',
      image: 'https://img.icons8.com/?size=100&id=12142&format=png&color=000000'
    },
    {
      title: 'Espanhol Básico – Jan/2025-Fev/2025',
      institution: 'Sunshine English School',
      image: 'https://img.icons8.com/?size=100&id=13057&format=png&color=000000'
    },
    {
      title: 'Liderança Ágil: Aprimoramento de Soft Skills – 8 Horas',
      institution: 'Alura/FIAP',
      image: 'https://img.icons8.com/?size=100&id=15345&format=png&color=000000'
    },
    {
      title: 'Lógica de Programação - 6 Horas',
      institution: 'Alura/FIAP',
      image: 'https://img.icons8.com/?size=100&id=108784&format=png&color=000000'
    }
  ]

  return (
    <div className="courses-page">
      <div className="section">
        <h1>Cursos Complementares</h1>
        <div className="courses-grid">
          {courses.map((course, index) => (
            <div key={index} className="course-card">
              <img src={course.image} alt={course.title} />
              <h3>{course.title}</h3>
              <p className="institution">{course.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}