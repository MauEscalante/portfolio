
import { useEffect } from 'react';
import styles from '../Style/Project.module.css';
import { useLocation } from 'react-router-dom';

const Project = () => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);
    const data = location.state?.data;
    if (!data) return <div className={styles.projectContainer}><h2>No hay datos del proyecto.</h2></div>;
    let iconSrc = data.icon;
    if (iconSrc && iconSrc.startsWith('/assets/')) {
        try {
            iconSrc = require(`../assets/${iconSrc.replace('/assets/', '')}`);
        } catch (e) {
            iconSrc = null
        }
    }
    return (
        <div className={styles.projectContainer}>
            <header className={styles.projectHeader}>
                <div>
                    <div className={styles.projectTitleRow}>
                        {iconSrc && (
                            <img src={iconSrc} alt="icono proyecto" className={styles.projectIcon} />
                        )}
                        <div className={styles.projectTitle} style={{ color: data.colores.title }}>{data.titulo}</div>
                    </div>
                    <div className={styles.projectIdea}>{data.idea}</div>
                </div>
            </header>
            <section className={styles.projectSection}>
                <h2 style={{ color: data.colores.text }}>Descripcción</h2>
                <p>{data.descripcion}</p>
            </section>
            <section className={styles.projectSection}>
                <h2 style={{ color: data.colores.text }}>Tecnologías</h2>
                <ul className={styles.projectTechList}>
                    {data.tecnologias && data.tecnologias.map((tech, idx) => (
                        <li key={idx}>{tech}</li>
                    ))}
                </ul>
            </section>
            <section className={styles.projectSection}>
                <h2  style={{ color: data.colores.text }}>Características</h2>
                <ul className={styles.projectFeaturesList}>
                    {data.caracteristicas && data.caracteristicas.map((car, idx) => (
                        <li key={idx}>{car}</li>
                    ))}
                </ul>
            </section>

            <section className={styles.projectSection}>
                <h2 style={{ color: data.colores.text }}>Repositorios</h2>
                <ul className={styles.projectFeaturesList}>
                    {data.frontend && (
                        <li>
                            <span className={styles.repoLabel} style={{ color: data.colores.text }}>Frontend: </span>
                            <a
                                href={data.frontend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.repoLink}
                            >
                                {data.frontend}
                            </a>
                        </li>
                    )}
                    {data.backend && (
                        <li>
                            <span className={styles.repoLabel} style={{ color: data.colores.text }}>Backend: </span>
                            <a
                                href={data.backend}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.repoLink}
                            >
                                {data.backend}
                            </a>
                        </li>
                    )}
                     {data.despliegue && (
                        <li>
                            <span className={styles.repoLabel} style={{ color: data.colores.text }}>Producción: </span>
                            <a
                                href={data.despliegue}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.repoLink}
                            >
                                {data.despliegue}
                            </a>
                            <span className={styles.repoLabel} style={{ color: data.colores.text, fontSize: '0.99rem' }}> (puede tardar un momento en cargar)</span>
                        </li>
                    )}
                </ul>
            </section>
        </div>
    );
};

export default Project;
