import styles from './Contact.module.scss'

function Contact() {
    return (
        <main className={styles['contact-container']}>
            <h1>Contactez-moi</h1>

            <div className={styles['contact-details']}>
                {/* Détails du contact */}
                <div className={styles['details-container']}>
                    <p className={styles['contact-name']}>
                        <i className="fa-solid fa-user"></i>Matundu Jules-Langa
                    </p>
                    <p className={styles['contact-email']}>
                        <i className="fa-solid fa-envelope"></i>
                        <a href="mailto:matundu.pro@gmail.com?subject=From website">
                            matundu.pro@gmail.com
                        </a>
                    </p>
                    <p className={styles['contact-location']}>
                        <i className="fa-solid fa-location-dot"></i>Région
                        Île-de-France
                    </p>
                </div>

                {/* Réseaux sociaux */}
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

            {/* Message de contact */}
            <p className={styles['contact-text']}>
                Veuillez me contacter par email afin de convenir d&rsquo;un
                rendez-vous téléphonique.
            </p>
        </main>
    )
}

export default Contact
