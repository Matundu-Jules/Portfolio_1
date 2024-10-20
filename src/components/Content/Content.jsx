import { Element, scroller } from 'react-scroll'
import { useCallback, useEffect, useRef, useState } from 'react'
import { format } from 'date-fns'
import { fr, is } from 'date-fns/locale'
import styles from './Content.module.scss'
import webdevImg from '../../assets/images/banner/webdesign.jpg'
import profilImg from '../../assets/images/img_profil.jpg'
import projects from '../../assets/scripts/all-projects.js'

const recentProjects = projects
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Trie par date complète
    .slice(0, 2)

function Content() {
    const [currentSection, setCurrentSection] = useState(0)
    const [isDesktop, setIsDesktop] = useState(true)
    const sectionNames = ['about', 'skills', 'projects', 'contact']
    const isTrottled = useRef(false)
    const headerHeight = 101

    // detect size of screen
    useEffect(() => {
        const handleResize = () => {
            setIsDesktop(window.innerWidth > 1024)
        }

        handleResize()
        window.addEventListener('resize', handleResize)
    }, [])

    const scrollToSection = useCallback(
        (index) => {
            const offset = index === 0 ? -headerHeight : 0

            scroller.scrollTo(sectionNames[index], {
                smooth: 'easeInOutQuint',
                duration: 1000,
                delay: 0,
                offset: offset,
            })
        },
        [sectionNames, headerHeight]
    )

    // Manual scroll management with the wheel
    const handleScroll = useCallback(
        (event) => {
            if (isTrottled.current || !isDesktop) return

            if (event.deltaY > 0 && currentSection < sectionNames.length - 1) {
                setCurrentSection((prev) => prev + 1)
            } else if (event.deltaY < 0 && currentSection > 0) {
                setCurrentSection((prev) => prev - 1)
            }

            isTrottled.current = true
            setTimeout(() => {
                isTrottled.current = false
            }, 500)
        },
        [currentSection, sectionNames.length, isDesktop]
    )

    // Triggers scrolling to current section
    useEffect(() => {
        if (isDesktop) scrollToSection(currentSection)
    }, [currentSection, scrollToSection, isDesktop])

    // Add the event listener for the scroll
    useEffect(() => {
        if (isDesktop)
            window.addEventListener('wheel', handleScroll, { passive: false })
        else window.removeEventListener('wheel', handleScroll)

        return () => {
            window.removeEventListener('wheel', handleScroll)
        }
    }, [handleScroll, isDesktop])

    return (
        <main className={styles['home-container']}>
            {/* Section 1: About */}
            <Element name="about">
                <section className={styles['presentation-container']}>
                    <div className={styles['banner-container']}>
                        <img
                            src={webdevImg}
                            alt="Image de création de sites web"
                            className={`${styles['banner-img']} ${styles['banner-fade']}`}
                        />
                        <div className={styles['banner-text-block']}>
                            <p
                                className={`${styles['banner-title']} ${styles['banner-fade']}`}
                            >
                                Création de sites web
                            </p>
                        </div>
                    </div>
                    <div className={styles['presentation-content']}>
                        <h1>Portfolio de Jules-Langa Matundu</h1>

                        <section id={styles.about}>
                            <h2>À propos de moi</h2>
                            <div className={styles['about-container']}>
                                <div className={styles['about-img-container']}>
                                    <img
                                        src={profilImg}
                                        alt="Photo de Matundu Jules-Langa"
                                        className={styles['about-img']}
                                    />
                                </div>
                                <div className={styles['about-txt-container']}>
                                    <p>
                                        Bonjour, je m'appelle Jules-Langa
                                        Matundu,
                                        <br />
                                        <br />
                                        Actuellement en alternance au Campus
                                        Numérique de Montereau, je combine les
                                        rôles de formateur en réseaux LAN,
                                        vidéosurveillance et IoT, et de
                                        développeur d'une plateforme de
                                        e-learning. Je poursuis également mes
                                        études en informatique à SUPINFO Paris,
                                        avec une solide expérience en
                                        développement web, notamment en
                                        JavaScript.
                                        <br />
                                        <br />
                                        En parallèle, je suis en train de lancer
                                        mon auto-entreprise, où je proposerai
                                        des services en développement web,
                                        formation et solutions informatiques.
                                        Mon parcours diversifié dans les
                                        systèmes, réseaux et développement web
                                        reflète mon désir d'innover et de créer
                                        des solutions techniques créatives et
                                        efficaces. <br />
                                        Prêt à relever de nouveaux défis, je
                                        mets mon expertise et mes compétences au
                                        service de projets innovants et
                                        stimulants.
                                    </p>
                                </div>
                            </div>
                        </section>
                    </div>
                </section>
            </Element>
            {/* Section 2: Skills */}
            <Element name="skills">
                <section id={styles.skills}>
                    <h2>Compétences Techniques</h2>
                    <div className={styles['skills-container']}>
                        <div className="skill-card">
                            <h3>Développement Web</h3>
                            <ul>
                                <li>
                                    <p>HTML, CSS, SASS</p>
                                </li>
                                <li>
                                    <p>JavaScript, Node.js, React</p>
                                </li>
                                <li>
                                    <p>Mongo DB, PostgreSQL</p>
                                </li>
                                <li>
                                    <p>SEO, Optimisation, Accessibilité web</p>
                                </li>
                                <li>
                                    <p>No-code, Wordpress</p>
                                </li>
                                <li>
                                    <p>Tests (Mocha, Assert, Supertest)</p>
                                </li>
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h3>Réseaux Informatiques</h3>
                            <ul>
                                <li>
                                    <p>Linux, Ubuntu, Windows</p>
                                </li>
                                <li>
                                    <p>
                                        Adressage IP, Routage, Cisco Packet
                                        Tracer
                                    </p>
                                </li>
                                <li>
                                    <p>Virtualisation</p>
                                </li>
                                <li>
                                    <p>IoT, Home Assistant</p>
                                </li>
                                <li>
                                    <p>
                                        Installation de caméras de
                                        vidéo-surveillance
                                    </p>
                                </li>
                                <li>
                                    <p>Protocoles de communications sans fil</p>
                                </li>
                            </ul>
                        </div>
                        <div className="skill-card">
                            <h3>Fibre optique</h3>
                            <ul>
                                <li>
                                    <p>
                                        Raccordement aérien, souterrain,
                                        aero-souterrain
                                    </p>
                                </li>
                                <li>
                                    <p>SAV, PLP</p>
                                </li>
                                <li>
                                    <p>Règlementations (ARCEP, ARCOM)</p>
                                </li>
                                <li>
                                    <p>Diagnostics et réflectométrie</p>
                                </li>
                                <li>
                                    <p>
                                        CACES R486 Nacelle, Habilitation
                                        électrique
                                    </p>
                                </li>
                                <li>
                                    <p>AIPR, Habilitation travaux en hauteur</p>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <a
                        href="/pages/about/about.html"
                        className={styles['home-btn']}
                    >
                        Plus d'information sur mon parcours
                    </a>
                </section>
            </Element>
            {/* Section 3: Projects */}
            <Element name="projects">
                <section id={styles.projects}>
                    <h2>Mes Projets</h2>

                    <div className={styles['project-home-gallery']}>
                        {recentProjects.map((project, index) => (
                            // console.log(project)
                            <div
                                key={project.title}
                                className="project-home-card"
                            >
                                <div className="project-home-card-content">
                                    {/* Image */}
                                    <div className="project-home-card-img-container">
                                        <img
                                            src={project.image}
                                            alt={`Logo de ${project.title}`}
                                            className="project-home-card-img"
                                        />
                                    </div>

                                    {/* Project Detail */}
                                    <div className="project-home-card-body">
                                        <div className="project-home-card-details">
                                            {/* Category */}
                                            <p className="project-home-card-domain">
                                                {project.category}
                                            </p>

                                            {/* Date */}
                                            <p className="project-home-card-date">
                                                {format(
                                                    new Date(project.date),
                                                    'd MMM yyyy',
                                                    { locale: fr }
                                                )}
                                            </p>
                                        </div>

                                        {/* Title */}
                                        <h2 className="project-home-card-title">
                                            {project.title}
                                        </h2>

                                        {/* Sub-title / Optional */}
                                        {project.subtitle && (
                                            <h3 className="project-home-card-subtitle">
                                                {project.subtitle}
                                            </h3>
                                        )}

                                        {/* Description */}
                                        <p className="project-home-card-description">
                                            {project.description}
                                        </p>

                                        {/* URL */}
                                        {project.url && (
                                            <a
                                                href={project.url}
                                                className="project-home-card-link"
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

                    <a
                        href="/pages/projects/projects.html"
                        className={styles['home-btn']}
                    >
                        Voir tout mes projets
                    </a>
                </section>
            </Element>
            {/* Section 4: Contact */}
            <Element name="contact">
                <section id={styles.contact}>
                    <h2>Contactez-moi</h2>
                    <div className={styles['contact-details']}>
                        <div className={styles['details-container']}>
                            <p className={styles['contact-name']}>
                                <i className="fa-solid fa-user"></i>
                                Matundu Jules-Langa
                            </p>
                            <p className={styles['contact-email']}>
                                <i className="fa-solid fa-envelope"></i>
                                <a href="mailto:matundu.pro@gmail.com?subject=From website">
                                    matundu.pro@gmail.com
                                </a>
                            </p>
                            <p className={styles['contact-location']}>
                                <i className="fa-solid fa-location-dot"></i>
                                Région Île-de-France
                            </p>
                        </div>
                        <div className={styles['socials-container']}>
                            <p className={styles['contact-linkedin']}>
                                <i className="fa-brands fa-linkedin"></i>
                                <a
                                    href="https://www.linkedin.com/in/jules-langa-matundu"
                                    className={styles['contact-social-links']}
                                >
                                    Jules-Langa Matundu
                                </a>
                            </p>
                            <p className={styles['contact-github']}>
                                <i className="fa-brands fa-square-github"></i>
                                <a
                                    href="https://github.com/Matundu-Jules?tab=repositories"
                                    className={styles['contact-social-links']}
                                >
                                    Matundu-Jules
                                </a>
                            </p>
                        </div>
                    </div>
                    <p className={styles['contact-text']}>
                        Veuillez me contacter par email afin de convenir d'un
                        rendez-vous téléphonique.
                    </p>
                </section>
            </Element>
        </main>
    )
}

export default Content
