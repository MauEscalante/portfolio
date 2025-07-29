import ahorrando from '../assets/ahorrando.png'
import redmedia from '../assets/redmedia.png';
import gimnasio from '../assets/gimnasio.png';
import { useNavigate } from 'react-router-dom';
import ahorrandoData from '../proyectos/ahorrando.json';
import redmediaData from '../proyectos/redmedia.json';
import gimnasioData from '../proyectos/gimnasioPOO.json';
import styles from '../Style/AboutMe.module.css'
import fotoCv from '../assets/fotoCv.jpeg';

const AboutMe = () => {
  const navigate = useNavigate();
  const handleProjectClick = (project) => {
    navigate('/project', { state: { data: project } });
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
          <li>Metodologías y Principios: SOLID, SCRUM</li>
          <li>Otros: API RESTful, Estructuras de Datos, Git, GitHub</li>
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
          <div className={styles.resourceCard} onClick={() => handleProjectClick(redmediaData)}>
            <img src={redmedia} alt="Red Social" />
            <div className={styles.resourceTitle}>Red Social Mobile</div>
          </div>
          <div className={styles.resourceCard} onClick={() => handleProjectClick(ahorrandoData)}>
            <img src={ahorrando} alt="Scrapper Ahorrando" />
            <div className={styles.resourceTitle}>Scrapper Ahorrando</div>
          </div>
          <div className={styles.resourceCard} onClick={() => handleProjectClick(gimnasioData)}>
            <img src={gimnasio} alt={gimnasioData.titulo} />
            <div className={styles.resourceTitle}>{gimnasioData.titulo}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
