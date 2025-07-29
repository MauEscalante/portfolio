import ahorrando from '../assets/ahorrando.png'
import { useNavigate } from 'react-router-dom';
import ahorrandoData from '../proyectos/ahorrando.json';
import styles from '../Style/AboutMe.module.css'
import fotoCv from '../assets/fotoCv.jpeg';

const AboutMe = () => {
  const navigate = useNavigate();
  const handleProjectClick = () => {
    navigate('/project', { state: { data: ahorrandoData } });
  };
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <div className={styles.headerPhoto}>
            <img src={fotoCv} alt="Foto currículum" />
          </div>
          <div className={styles.headerText}>
            <h1>Mauricio Escalante</h1>
            <p><strong>Estudiante de Licenciatura en gestión de tecnología de la información. </strong></p>
          </div>
        </div>
      </header>
      <section className={styles.section}>
        <h2>Sobre mi</h2>
        <p>
          Soy un profesional apasionado por la tecnología y el desarrollo de software, con un fuerte enfoque en la resolución de problemas y la optimización de procesos. Poseo un alto nivel de compromiso con el aprendizaje continuo y la mejora de habilidades técnicas.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Educación</h2>
        <ul>
          <li><strong>Universidad Argentina de la Empresa</strong> (2021 - actualidad, 32 materias aprobadas)<br />Licenciatura en Gestión de Tecnología de la Información</li>
          <li><strong>Instituto Manuel Belgrano</strong> (2014 - 2020)<br />Secundario Completo</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Habilidades Técnicas</h2>
        <ul>
          <li>Lenguajes y Frameworks: JavaScript, React, React Native, Node.js, Express</li>
          <li>Bases de Datos: SQL Server, MongoDB</li>
          <li>Metodologías y Principios: SOLID, Git, GitHub</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Habilidades Blandas</h2>
        <ul>
          <li>Organización</li>
          <li>Compromiso</li>
          <li>Trabajo en equipo</li>
          <li>Resolución de problemas</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Idiomas</h2>
        <p>Español (nativo), Inglés (básico)</p>
      </section>

      <section className={styles.section}>
        <div className={styles.contactLine}>
          <h2>Contacto:</h2>
          <a href="mailto:escalantemauricio2002@gmail.com">escalantemauricio2002@gmail.com</a> | 11 6295-3547 | Montevideo 1218, Bernal Oeste
        </div>
      </section>
      
      <section className={styles.resourcesSection}>
        <h2>Proyectos</h2>
        <div className={styles.resourcesGrid}>
          <a className={styles.resourceCard} href="https://hiringroom.com/" target="_blank" rel="noopener noreferrer">
            <img src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80" alt="Red Social" />
            <div className={styles.resourceTitle}>Red Social Mobile</div>
          </a>
          <div className={styles.resourceCard} onClick={handleProjectClick}>
            <img src={ahorrando} alt="Scrapper Ahorrando" />
            <div className={styles.resourceTitle}>Scrapper Ahorrando</div>
          </div>
          <a className={styles.resourceCard} href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
            <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Canales Telegram" />
            <div className={styles.resourceTitle}>Canales Telegram</div>
          </a>
          <a className={styles.resourceCard} href="#vacantes2025" target="_blank" rel="noopener noreferrer">
            <img src="https://raw.githubusercontent.com/mauricioxyz/portfolio/main/public/logo192.png" alt="Vacantes 2025"/>
            <div className={styles.resourceTitle}>Vacantes 2025</div>
          </a>
          <a className={styles.resourceCard} href="#listaempresas" target="_blank" rel="noopener noreferrer">
            <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Lista Empresas" />
            <div className={styles.resourceTitle}>Lista Empresas</div>
          </a>
          <a className={styles.resourceCard} href="#whatsapp" target="_blank" rel="noopener noreferrer">
            <img src="https://images.unsplash.com/photo-1465101178521-c1a4c8a0f8a6?auto=format&fit=crop&w=400&q=80" alt="WhatsApp Channel Empleos" />
            <div className={styles.resourceTitle}>WhatsApp Channel Empleos</div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
