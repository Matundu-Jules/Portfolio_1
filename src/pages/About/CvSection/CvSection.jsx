import { Element } from 'react-scroll'
import styles from './CvSection.module.scss'
import cv from '../../../assets/documents/CV - 2025.pdf'

function CvSection() {
    return (
        <Element
            name="cv"
            id={styles['cv']}
            role="region"
            aria-labelledby="cv-title"
        >
            <h2 id="cv-title">Mon CV</h2>
            <a
                href={cv}
                className={styles['cv-link']}
                target="_blank"
                rel="noopener noreferrer"
            >
                Télécharger mon CV
            </a>
        </Element>
    )
}

export default CvSection
