import ahorrando from '../assets/ahorrando.png'
import redmedia from '../assets/redmedia.png';
import gimnasio from '../assets/gimnasio.png';
import { useNavigate } from 'react-router-dom';
import ahorrandoData from '../proyectos/ahorrando.json';
import redmediaData from '../proyectos/redmedia.json';
import gimnasioData from '../proyectos/gimnasioPOO.json';
import styles from '../Style/AboutMe.module.css'
import fotoCv from '../assets/fotoCv.jpeg';
import signalinkData from '../proyectos/signalink.json';
import signalink from '../assets/signalink.png';

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
          Actualmente estoy en el cuarto año de la Licenciatura en Sistemas. A lo largo de la carrera no solo adquirí conocimientos en bases de datos, lenguajes de programacion, APIs y en diversas tecnologías, sino que también entendí la importancia de la organización, la comunicación, documentación y el trabajo en equipo en un proyecto.
        </p>
      </section>
      <section className={styles.section}>
        <h2>Educación</h2>
        <ul>
          <li><strong>Universidad Argentina de la Empresa</strong> (2021 - actualidad, 33 materias aprobadas)<br />Licenciatura en Gestión de Tecnología de la Información</li>
        </ul>
      </section>
      <section className={styles.section}>
        <h2>Habilidades Técnicas</h2>
        <ul>
          <li>Lenguajes y Frameworks: JavaScript, React, React Native, Node.js, Express, Python</li>
          <li>Bases de Datos: SQL Server, MongoDB</li>
          <li>Metodologías y Principios: SOLID, SCRUM</li>
          <li>Otros: API RESTful, Postman, Estructuras de Datos, Git, GitHub</li>
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
          <a href="mailto:escalantemauricio2002@gmail.com">escalantemauricio2002@gmail.com</a> | 11 6295-3547 | Bernal Oeste, Quilmes
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
          <div className={styles.resourceCard} onClick={() => handleProjectClick(signalinkData)}>
            <img src={signalink} alt={signalinkData.titulo} />
            <div className={styles.resourceTitle}>{signalinkData.titulo}</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
