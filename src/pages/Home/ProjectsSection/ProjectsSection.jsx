import { Element } from 'react-scroll'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import styles from './ProjectsSection.module.scss'
import projects from '../../../assets/scripts/all-projects.js'

const recentProjects = projects
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, 2)

function ProjectsSection() {
    return (
        <Element
            name="projects"
            id={styles.projects}
            role="region"
            aria-labelledby="projects-title"
        >
            <h2 id="projects-title">Mes Projets</h2>
            <div className={styles.cardsContainer}>
                {recentProjects.map((project) => (
                    <div key={project.title} className={styles.card}>
                        <div className={styles.cardInner}>
                            {/* Face avant */}
                            <div className={styles.cardFront}>
                                <div
                                    className={
                                        styles[
                                            'project-home-card-img-container'
                                        ]
                                    }
                                >
                                    <img
                                        src={project.image}
                                        alt={`Logo de ${project.title}`}
                                        className={
                                            styles['project-home-card-img']
                                        }
                                    />
                                </div>
                            </div>
                            {/* Face arrière */}
                            <div className={styles.cardBack}>
                                <h3
                                    className={
                                        styles['project-home-card-title']
                                    }
                                >
                                    {project.title}
                                </h3>
                                {project.subtitle && (
                                    <h4
                                        className={
                                            styles['project-home-card-subtitle']
                                        }
                                    >
                                        {project.subtitle}
                                    </h4>
                                )}

                                <div
                                    className={
                                        styles['project-home-card-details']
                                    }
                                >
                                    <p
                                        className={
                                            styles['project-home-card-domain']
                                        }
                                    >
                                        {project.category}
                                    </p>

                                    <p
                                        className={
                                            styles['project-home-card-date']
                                        }
                                    >
                                        {format(
                                            new Date(project.date),
                                            'd MMM yyyy',
                                            { locale: fr }
                                        )}
                                    </p>
                                </div>

                                <p
                                    className={
                                        styles['project-home-card-description']
                                    }
                                >
                                    {project.description}
                                </p>

                                {project.url && (
                                    <a
                                        href={project.url}
                                        className={
                                            styles['project-home-card-link']
                                        }
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        Voir le projet
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <a href="/pages/projects/projects.html" className="home-btn">
                Voir tout mes projets
            </a>
        </Element>
    )
}

export default ProjectsSection
