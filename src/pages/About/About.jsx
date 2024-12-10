import styles from './About.module.scss'
import skills from '../../assets/scripts/skills.js'

function About() {
    return (
        <main className={styles['about-container']}>
            <h1 className={styles['about-main-title']}>À propos de moi</h1>

            {/* Introduction */}
            <section id={styles['about-intro']}>
                <div className={styles['about-intro-img-container']}>
                    <img
                        src="/src/assets/images/img_profil.jpg"
                        alt="Photo de profil"
                        className={styles['about-intro-img']}
                    />
                </div>
                <p>
                    Bonjour !<br />
                    Je suis Jules-Langa Matundu, basé en région Île-de-France.
                    <br />
                    <br />
                    Actuellement en alternance, je combine mes études en
                    informatique à SUPINFO Paris avec un poste au Campus
                    Numérique de Montereau, où j&rsquo;interviens en tant que
                    formateur sur des modules de réseaux LAN, vidéosurveillance
                    et IoT, et où je développe également une plateforme de
                    e-learning.
                    <br />
                    <br />
                    En parallèle, je gère mon auto-entreprise, où je propose des
                    services en développement web, formation, et solutions
                    informatiques.
                    <br />
                    <br />
                    Mon parcours diversifié en systèmes numériques, réseaux et
                    développement web me permet d&rsquo;innover dans des
                    solutions techniques créatives et efficaces.
                    <br />
                    <br />
                    Toujours motivé à relever de nouveaux défis, je suis prêt à
                    mettre mon expertise et mes compétences au service de
                    projets innovants et stimulants.
                </p>
            </section>

            {/* Formations */}
            <section className={styles['degrees-container']}>
                <h2>Mes Formations</h2>
                <ul>
                    <li>
                        <strong>2012-2014</strong> <br /> Bac Professionnel
                        Systèmes Électroniques Numériques option
                        Télecommunications et Réseaux
                    </li>
                    <li>
                        <strong>2014-2016</strong> <br /> BTS Systèmes
                        Numériques
                    </li>
                    <li>
                        <strong>2015</strong> <br /> BAFA + Certification
                        d&rsquo;animateur club enfant en village vacances (École
                        The Village)
                    </li>
                    <li>
                        <strong>2022</strong> <br /> Développeur Web
                        (OpenClassrooms - Niveau 5 | Bac +2)
                    </li>
                    <li>
                        <strong>2023</strong> <br /> Technicien
                        d&rsquo;intervention télécoms (Campus Numériques de
                        Montereau - Niveau 4 | Bac)
                    </li>
                    <li>
                        <strong>2024-2025</strong> <br /> Étudiant en 3ème année
                        - Bachelor of Engineering (SUPINFO Paris - Niveau 6 |
                        Bac + 3)
                    </li>
                </ul>
            </section>

            {/* Expériences */}
            <section className={styles['experiences-container']}>
                <h2>Mes expériences</h2>
                <ul className={styles['experiences-list']}>
                    {[
                        {
                            role: 'Animateur en centre de loisirs et village vacances',
                            year: '2016-2022',
                            img: 'entertainer.jpg',
                        },
                        {
                            role: 'Instructeur de danse hip-hop',
                            year: '2016-2019',
                            img: 'dance.jpg',
                        },
                        {
                            role: 'Agent recenseur',
                            year: '2020',
                            img: 'recensement.webp',
                        },
                        {
                            role: 'Développeur Web',
                            year: '2022',
                            img: 'webdev.jpg',
                        },
                        {
                            role: 'Technicien Fibre Optique (D3)',
                            year: '2023-2024',
                            img: 'fiber.jpg',
                        },
                        {
                            role: 'Formateur en Réseaux & IoT',
                            year: 'Août - Septembre 2024',
                            img: 'instructor.webp',
                        },
                        {
                            role: 'Développeur et Formateur en Réseaux & IoT en alternance',
                            year: '2024 - 2025',
                            img: 'dev-instructor.webp',
                        },
                    ].map((experience, index) => (
                        <li key={index} className={styles['experiences-card']}>
                            <div
                                className={`${styles['exp-img-container']} ${styles[`exp-${experience.role.toLowerCase().replace(/ /g, '')}`]}`}
                            >
                                <img
                                    src={`/src/assets/images/exp-thumbnail/${experience.img}`}
                                    alt={`Photo de mon expérience de ${experience.role.toLowerCase()}`}
                                    className={styles['exp-card-img']}
                                />
                            </div>
                            <div className={styles['exp-card-content']}>
                                <p>{experience.role}</p>
                                <p>{experience.year}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* Compétences Techniques */}
            <section id={styles['about-skills']}>
                <h2>Compétences Techniques</h2>
                <div className={styles['about-skills-container']}>
                    {skills.map((skillCategory, index) => (
                        <div
                            key={index}
                            className={styles['about-skill-category']}
                        >
                            <h3>{skillCategory.category}</h3>
                            <ul>
                                {skillCategory.skills.map((skill, i) => (
                                    <li key={i}>
                                        <p>{skill}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* CV Section */}
            <section className={styles['cv-container']}>
                <h2>Mon CV</h2>
                <a
                    href="/assets/documents/CV_Matundu-Jules_Alternance-Admin-sys.pdf"
                    className={styles['cv-link']}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Télécharger mon CV
                </a>
            </section>
        </main>
    )
}

export default About
