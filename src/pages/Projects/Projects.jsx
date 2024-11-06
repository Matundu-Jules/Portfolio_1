import styles from './Projects.module.scss'
import projects from '../../assets/scripts/all-projects.js'

function Projects() {
    // Fonction de tri des projets
    const sortedProjects = projects.sort((a, b) => {
        const dateA = a.date || ''
        const dateB = b.date || ''
        const dateCompare = dateB.localeCompare(dateA)

        if (dateCompare !== 0) return dateCompare

        const aCriteria = a.subtitle || a.title
        const bCriteria = b.subtitle || b.title
        return aCriteria.localeCompare(bCriteria)
    })

    return (
        <main className={styles['projects-container']}>
            <h1 className={styles['project-main-title']}>Mes projets</h1>
            <section className={styles['project-gallery']} id="project-gallery">
                {sortedProjects.map((project, index) => (
                    <div key={index} className={styles['project-card']}>
                        <div className={styles['project-card-content']}>
                            {/* Image du projet */}
                            <div
                                className={styles['project-card-img-container']}
                            >
                                <img
                                    src={project.image}
                                    alt={`Logo de ${project.title}`}
                                    className={styles['project-card-img']}
                                />
                            </div>

                            {/* Détails du projet */}
                            <div className={styles['project-card-body']}>
                                <div className={styles['project-card-details']}>
                                    <p
                                        className={
                                            styles['project-card-domain']
                                        }
                                    >
                                        {project.category}
                                    </p>
                                    <p className={styles['project-card-date']}>
                                        {project.date}
                                    </p>
                                </div>
                                <h2 className={styles['project-card-title']}>
                                    {project.title}
                                </h2>
                                {project.subtitle && (
                                    <h3
                                        className={
                                            styles['project-card-subtitle']
                                        }
                                    >
                                        {project.subtitle}
                                    </h3>
                                )}
                                <p
                                    className={
                                        styles['project-card-description']
                                    }
                                >
                                    {project.description}
                                </p>
                                {project.url && (
                                    <a
                                        href={project.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={styles['project-card-link']}
                                    >
                                        Voir le projet
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Projects
