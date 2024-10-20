import styles from './Footer.module.scss'

function Footer() {
    return (
        <footer className={styles.footer}>
            <p>© 2024 Matundu Jules-Langa. Tous droits réservés.</p>
            <div className={styles['footer-social']}>
                <a
                    href="https://github.com/Matundu-Jules"
                    className={styles.github}
                >
                    <i className="fa-brands fa-github"></i>
                </a>
                <a
                    href="https://www.linkedin.com/in/jules-langa-matundu/"
                    className="linkedin"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
            </div>
        </footer>
    )
}

export default Footer
