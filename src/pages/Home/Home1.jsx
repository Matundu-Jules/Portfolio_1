import { Element, scroller } from 'react-scroll'
import { useCallback, useEffect, useRef, useState, useMemo } from 'react'
import { format } from 'date-fns'
import { fr } from 'date-fns/locale'
import styles from './Home.module.scss'
import profilImg from '../../assets/images/img_profil.png'
import projects from '../../assets/scripts/all-projects.js'

const recentProjects = projects
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Trie par date complète
    .slice(0, 2)

function Home() {
    const [currentSection, setCurrentSection] = useState(0)
    const [isDesktop, setIsDesktop] = useState(true)
    const sectionNames = useMemo(
        () => ['about', 'skills', 'projects', 'contact'],
        []
    )
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
                    <div className={styles['presentation-content']}>
                        <h1>Portfolio de Jules-Langa Matundu</h1>

                        <section id={styles.about}>
                            <div className={styles['about-container']}>
                                <div
                                    className={
                                        styles['about-img-container-main']
                                    }
                                >
                                    <div
                                        className={
                                            styles['about-img-container']
                                        }
                                    >
                                        <img
                                            src={profilImg}
                                            alt="Photo de Matundu Jules-Langa"
                                            className={styles['about-img']}
                                        />
                                    </div>
                                </div>

                                <div className={styles['about-txt-container']}>
                                    <h2>À propos de moi</h2>
                                    <p>
                                        Bonjour, je m&rsquo;appelle Jules-Langa
                                        Matundu, <br /> En alternance au Campus
                                        Numérique de Montereau, je combine les
                                        rôles de développeur et formateur en
                                        réseaux LAN, vidéosurveillance et IoT,
                                        tout en poursuivant mes études en
                                        informatique à SUPINFO Paris.
                                    </p>
                                    <p>
                                        J&rsquo;ai lancé mon auto-entreprise,
                                        Digital Challenge, où je propose des
                                        services en développement web, formation
                                        et solutions informatiques, avec
                                        l&rsquo;objectif de créer des solutions
                                        techniques innovantes et efficaces.
                                    </p>
                                    {/* <p className={styles['about-txt-1']}>
                                        Bonjour, je m&rsquo;appelle Jules-Langa
                                        Matundu,
                                        <br />
                                        <br />
                                        Actuellement en alternance au Campus
                                        Numérique de Montereau, je combine les
                                        rôles de formateur en réseaux LAN,
                                        vidéosurveillance et IoT, et de
                                        développeur d&rsquo;une plateforme de
                                        e-learning. Je poursuis également mes
                                        études en informatique à SUPINFO Paris,
                                        avec une solide expérience en
                                        développement web, notamment en
                                        JavaScript.
                                    </p>
                                    <p className={styles['about-txt-2']}>
                                        En parallèle, je suis en train de lancer
                                        mon auto-entreprise, où je proposerai
                                        des services en développement web,
                                        formation et solutions informatiques.
                                        Mon parcours diversifié dans les
                                        systèmes, réseaux et développement web
                                        reflète mon désir d&rsquo;innover et de
                                        créer des solutions techniques créatives
                                        et efficaces. <br />
                                        Prêt à relever de nouveaux défis, je
                                        mets mon expertise et mes compétences au
                                        service de projets innovants et
                                        stimulants.
                                    </p> */}
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
                        Plus d&rsquo;information sur mon parcours
                    </a>
                </section>
            </Element>
            {/* Section 3: Projects */}
            {/*<Element name="projects" id={styles.projects}>
                 <section id={styles.projects}>
                    <h2>Mes Projets</h2>
                    <div className={styles['project-home-gallery']}>
                        {recentProjects.map((project) => (
                            <div
                                key={project.title}
                                className={styles['project-home-card']}
                            >
                                <div
                                    className={
                                        styles['project-home-card-inner']
                                    }
                                >
                                    <div
                                        className={
                                            styles['project-home-card-front']
                                        }
                                    >
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
                                                    styles[
                                                        'project-home-card-img'
                                                    ]
                                                }
                                            />
                                        </div>

                                        <h2
                                            className={
                                                styles[
                                                    'project-home-card-title'
                                                ]
                                            }
                                        >
                                            {project.title}
                                        </h2>

                                        {project.subtitle && (
                                            <h3
                                                className={
                                                    styles[
                                                        'project-home-card-subtitle'
                                                    ]
                                                }
                                            >
                                                {project.subtitle}
                                            </h3>
                                        )}
                                    </div>

                                    <div
                                        className={
                                            styles['project-home-card-back']
                                        }
                                    >
                                        <div
                                            className={
                                                styles[
                                                    'project-home-card-details'
                                                ]
                                            }
                                        >
                                            <p
                                                className={
                                                    styles[
                                                        'project-home-card-domain'
                                                    ]
                                                }
                                            >
                                                {project.category}
                                            </p>

                                            <p
                                                className={
                                                    styles[
                                                        'project-home-card-date'
                                                    ]
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
                                                styles[
                                                    'project-home-card-description'
                                                ]
                                            }
                                        >
                                            {project.description}
                                        </p>

                                        {project.url && (
                                            <a
                                                href={project.url}
                                                className={
                                                    styles[
                                                        'project-home-card-link'
                                                    ]
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
                    <a
                        href="/pages/projects/projects.html"
                        className={styles['home-btn']}
                    >
                        Voir tout mes projets
                    </a>
                </section> 
            </Element>*/}
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
                                                styles[
                                                    'project-home-card-subtitle'
                                                ]
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
                                                styles[
                                                    'project-home-card-domain'
                                                ]
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
                                            styles[
                                                'project-home-card-description'
                                            ]
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
                <a
                    href="/pages/projects/projects.html"
                    className={styles['home-btn']}
                >
                    Voir tout mes projets
                </a>
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
                        Veuillez me contacter par email afin de convenir
                        d&rsquo;un rendez-vous téléphonique.
                    </p>
                </section>
            </Element>
        </main>
    )
}

export default Home
