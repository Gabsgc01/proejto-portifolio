import React from 'react'
import { FaDownload } from 'react-icons/fa'
import StarField from '../components/StarField'

export default function Home(){
  return (
    <div className="home">
      <section id="home" className="hero-section">
        <StarField />
        <div className="hero-container">
          <div className="hero-content">
            <h1 className="hero-title">Gabriel Ciriaco de Oliveira Silva</h1>
            <p className="hero-subtitle">Desenvolvedor e analista de sistemas apaixonado por tecnologia e inovação</p>
            
            <div className="hero-features">
              <div className="feature-item">✓ Paixão e Foco em Tecnologia</div>
              <div className="feature-item">✓ Potencial de Crescimento</div>
              <div className="feature-item">✓ Mentalidade Colaborativa e Inovadora</div>
              <div className="feature-item">✓ Formação Acadêmica em Andamento e Concluída</div>
              <div className="feature-item">✓ Versatilidade e Experiência Profissional</div>
            </div>

            <div className="hero-buttons">
              <a 
                href="/curriculo.pdf" 
                target="_blank" 
                rel="noreferrer"
                className="btn-primary"
                download="Curriculo_Gabriel_Ciriaco.pdf"
              >
                <FaDownload />
                Download CV
              </a>
              <a href="#contato" className="btn-secondary">Entre em contato</a>
            </div>
          </div>
          
          <div className="hero-image">
            <img 
              src="/foto3x4.png" 
              alt="Gabriel Ciriaco" 
              className="profile-photo"
            />
            <div className="photo-label">Desenvolvedor</div>
          </div>
        </div>
      </section>

      <section className="why-hire-section">
        <h2>Por que me contratar?</h2>
        <p>
          Sou um profissional com uma base sólida em tecnologia, habilidades práticas relevantes 
          e uma mentalidade voltada para o crescimento e a colaboração. Minha combinação de experiência 
          profissional, formação acadêmica e cursos complementares me tornam um candidato promissor e preparado 
          para contribuir significativamente em projetos desafiadores.
        </p>
        <p>
          Acredito que me contratar seria uma excelente escolha para empresas que buscam talentos motivados, 
          versáteis e com potencial para crescer junto com a organização. Estou pronto para enfrentar novos 
          desafios, aprender continuamente e agregar valor aos projetos em que estiver envolvido. 🚀
        </p>
      </section>

      <section id="formacao" className="section education-section">
        <h2>Formação Acadêmica</h2>
        <div className="education-items">
          <div className="education-card">
            <img src="https://sindicomunitario.org.br/wp-content/uploads/2022/08/Cruzeiro-do-Sul-Site.png" alt="Cruzeiro do Sul" />
            <h3>Cruzeiro do Sul</h3>
            <p className="course">Ensino Médio Técnico em Informática</p>
            <p className="period">Janeiro/2019 a Dezembro/2022</p>
          </div>
          
          <div className="education-card">
            <img src="https://i0.wp.com/saopaulo.wordcamp.org/2016/files/2016/10/unicid_pref_pos.png?resize=1000%2C373&ssl=1" alt="UNICID" />
            <h3>UNICID</h3>
            <p className="course">Análise e Desenvolvimento de Sistemas</p>
            <p className="period">Janeiro/2023 a Dezembro/2024</p>
          </div>
          
          <div className="education-card">
            <img src="https://avatars.githubusercontent.com/u/79948663?s=200&v=4" alt="FIAP" />
            <h3>FIAP</h3>
            <p className="course">Engenharia de Software</p>
            <p className="period">Fevereiro/2025 - Cursando</p>
          </div>
        </div>
      </section>

      <section id="sobre" className="section about-section">
        <h2>Sobre Mim</h2>
        <p>
          Sou Gabriel Ciriaco de Oliveira Silva, um profissional apaixonado por tecnologia e desenvolvimento de sistemas. 
          Com formação em Análise e Desenvolvimento de Sistemas pela UNICSUL e atualmente cursando Engenharia de Software 
          na FIAP, tenho me dedicado a aprimorar minhas habilidades em programação, análise de dados e desenvolvimento de 
          soluções inovadoras.
        </p>
        <p>
          Minha experiência inclui trabalhos em áreas como vendas, atendimento ao cliente e logística, o que me proporcionou 
          uma visão ampla e habilidades interpessoais essenciais para trabalhar em equipe. Além disso, possuo conhecimentos 
          práticos em ferramentas como SQL, Excel, JavaScript e Python, complementados por cursos em Power BI, SAP-SD e robótica.
        </p>
        <p>
          Sou movido por desafios, tenho uma mentalidade colaborativa e estou sempre em busca de aprendizado e crescimento. 
          Meu objetivo é contribuir para projetos significativos, aplicando minha paixão por tecnologia e minha capacidade 
          de resolver problemas de forma criativa e eficiente.
        </p>
        
        <div className="values-grid">
          <div className="value-item">
            <h3>Missão</h3>
            <p>Utilizar meus conhecimentos e habilidades em tecnologia para desenvolver soluções inovadoras que impactem positivamente a vida das pessoas e contribuam para o avanço tecnológico das organizações.</p>
          </div>
          
          <div className="value-item">
            <h3>Visão</h3>
            <p>Ser reconhecido como um profissional de referência na área de tecnologia, destacando-me pela excelência técnica, capacidade de inovação e contribuição para projetos transformadores.</p>
          </div>
          
          <div className="value-item full-width">
            <h3>Meus Valores</h3>
            <div className="values-list">
              <div className="value-point">
                <span className="number">1</span>
                <div>
                  <h4>Paixão pela tecnologia</h4>
                  <p>Buscar constantemente o aprendizado e a aplicação de novas ferramentas e metodologias.</p>
                </div>
              </div>
              <div className="value-point">
                <span className="number">2</span>
                <div>
                  <h4>Colaboração</h4>
                  <p>Trabalhar em equipe, compartilhar conhecimentos e contribuir para um ambiente produtivo.</p>
                </div>
              </div>
              <div className="value-point">
                <span className="number">3</span>
                <div>
                  <h4>Inovação</h4>
                  <p>Encarar desafios com criatividade e buscar soluções que agreguem valor.</p>
                </div>
              </div>
              <div className="value-point">
                <span className="number">4</span>
                <div>
                  <h4>Comprometimento</h4>
                  <p>Dedicar-me com responsabilidade e ética a cada projeto, garantindo qualidade.</p>
                </div>
              </div>
              <div className="value-point">
                <span className="number">5</span>
                <div>
                  <h4>Crescimento contínuo</h4>
                  <p>Manter uma mentalidade de aprendizado constante, evoluindo pessoal e profissionalmente.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experiencia" className="section experience-section">
        <h2>Experiências Profissionais</h2>
        <div className="experience-items">
          <div className="experience-item">
            <div className="period">Março/2023 – Abril/2024</div>
            <h3>Vendedor de automóveis</h3>
            <h4>JJ AUTOMARCAS</h4>
            <ul>
              <li>Atendimento a clientes, apresentação de veículos e negociação de condições de venda.</li>
              <li>Elaboração de propostas comerciais e acompanhamento de processos de financiamento e documentação.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="period">Fevereiro/2020 – Dezembro/2021</div>
            <h3>Atendimento ao cliente</h3>
            <h4>EMPÓRIO DO PÃO</h4>
            <ul>
              <li>Atendimento direto ao público, oferecendo suporte na escolha de produtos e fechamento de vendas.</li>
              <li>Organização de prateleiras e apoio no controle de qualidade dos produtos em exposição.</li>
            </ul>
          </div>

          <div className="experience-item">
            <div className="period">Janeiro/2019 – Dezembro/2019</div>
            <h3>Auxiliar de Logística</h3>
            <h4>GUINA - Materiais de construção</h4>
            <ul>
              <li>Responsável pela organização e controle de estoque de materiais de construção.</li>
              <li>Auxílio no carregamento e descarregamento de mercadorias, garantindo a integridade dos produtos.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
