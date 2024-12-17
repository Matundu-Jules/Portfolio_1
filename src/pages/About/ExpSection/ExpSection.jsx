import { Element } from 'react-scroll'
import styles from './ExpSection.module.scss'
import experiences from '../../../assets/scripts/all-exp.js'

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
                {experiences.map((experience, index) => (
                    <li key={index} className={styles['experiences-card']}>
                        <div
                            className={`${styles['exp-img-container']} ${styles[`exp-${experience.role.toLowerCase().replace(/ /g, '')}`]}`}
                        >
                            <img
                                src={experience.img}
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
