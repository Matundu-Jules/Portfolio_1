import styles from './CvSection.module.scss'

function CvSection() {
    return (
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
    )
}

export default CvSection
