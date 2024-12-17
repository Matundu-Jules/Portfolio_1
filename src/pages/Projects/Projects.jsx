// import styles from './Projects.module.scss'
// import projects from '../../assets/scripts/all-projects.js'

// function Projects() {
//     // Fonction de tri des projets
//     const sortedProjects = projects.sort((a, b) => {
//         const dateA = a.date || ''
//         const dateB = b.date || ''
//         const dateCompare = dateB.localeCompare(dateA)

//         if (dateCompare !== 0) return dateCompare

//         const aCriteria = a.subtitle || a.title
//         const bCriteria = b.subtitle || b.title
//         return aCriteria.localeCompare(bCriteria)
//     })

//     return (
//         <main className={styles['projects-container']}>
//             <h1 className={styles['project-main-title']}>Mes projets</h1>
//             <section className={styles['project-gallery']} id="project-gallery">
//                 {sortedProjects.map((project, index) => (
//                     <div key={index} className={styles['project-card']}>
//                         <div className={styles['project-card-content']}>
//                             {/* Image du projet */}
//                             <div
//                                 className={styles['project-card-img-container']}
//                             >
//                                 <img
//                                     src={project.image}
//                                     alt={`Logo de ${project.title}`}
//                                     className={styles['project-card-img']}
//                                 />
//                             </div>

//                             {/* Détails du projet */}
//                             <div className={styles['project-card-body']}>
//                                 <div className={styles['project-card-details']}>
//                                     <p
//                                         className={
//                                             styles['project-card-domain']
//                                         }
//                                     >
//                                         {project.category}
//                                     </p>
//                                     <p className={styles['project-card-date']}>
//                                         {project.date}
//                                     </p>
//                                 </div>
//                                 <h2 className={styles['project-card-title']}>
//                                     {project.title}
//                                 </h2>
//                                 {project.subtitle && (
//                                     <h3
//                                         className={
//                                             styles['project-card-subtitle']
//                                         }
//                                     >
//                                         {project.subtitle}
//                                     </h3>
//                                 )}
//                                 <p
//                                     className={
//                                         styles['project-card-description']
//                                     }
//                                 >
//                                     {project.description}
//                                 </p>
//                                 {project.url && (
//                                     <a
//                                         href={project.url}
//                                         target="_blank"
//                                         rel="noopener noreferrer"
//                                         className={styles['project-card-link']}
//                                     >
//                                         Voir le projet
//                                     </a>
//                                 )}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </section>
//         </main>
//     )
// }

// export default Projects

import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
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
        <section id={styles.projects}>
            <h2 id="projects-title">Mes Projets</h2>
            <div className={styles.cardsContainer}>
                {sortedProjects.map((project) => (
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
        </section>
    )
}

export default Projects
