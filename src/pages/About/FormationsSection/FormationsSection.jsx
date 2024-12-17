import { Element } from 'react-scroll'
import styles from './FormationsSection.module.scss'

function FormationsSection() {
    return (
        <Element
            name="degrees"
            id={styles.degrees}
            role="region"
            aria-labelledby="degrees-title"
        >
            <h2 id="degrees-title">Mes Formations</h2>
            <ul>
                <li>
                    <p>
                        <strong>2012-2014</strong> <br /> Bac Professionnel
                        Systèmes Électroniques Numériques option
                        Télecommunications et Réseaux
                    </p>
                </li>
                <li>
                    <p>
                        <strong>2014-2016</strong> <br /> BTS Systèmes
                        Numériques
                    </p>
                </li>
                <li>
                    <p>
                        <strong>2015</strong> <br /> BAFA + Certification
                        d&rsquo;animateur club enfant en village vacances (École
                        The Village)
                    </p>
                </li>
                <li>
                    <p>
                        <strong>2022</strong> <br /> Développeur Web
                        (OpenClassrooms - Niveau 5 | Bac +2)
                    </p>
                </li>
                <li>
                    <p>
                        <strong>2023</strong> <br /> Technicien
                        d&rsquo;intervention télécoms (Campus Numériques de
                        Montereau - Niveau 4 | Bac)
                    </p>
                </li>
                <li>
                    <p>
                        <strong>2024-2025</strong> <br /> Étudiant en 3ème année
                        - Bachelor of Engineering (SUPINFO Paris - Niveau 6 |
                        Bac + 3)
                    </p>
                </li>
            </ul>
        </Element>
    )
}

export default FormationsSection
