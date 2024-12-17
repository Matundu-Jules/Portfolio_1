import { Element } from 'react-scroll'
import styles from './ExpSection.module.scss'

function ExpSection() {
    return (
        <Element
            name="experiences"
            id={styles['experiences']}
            role="region"
            aria-labelledby="experiences-title"
        >
            <h2 id="experiences-title">Mes expériences</h2>
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
                    {
                        role: 'Auto-entrepreneur',
                        year: 'Novembre 2024',
                        img: 'auto.webp',
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
        </Element>
    )
}

export default ExpSection
