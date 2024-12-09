import { Element } from 'react-scroll'
import styles from './ContactSection.module.scss'

function ContactSection() {
    return (
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
                        <p className={styles['contact-entreprise']}>
                            <i
                                className={
                                    styles['logo-contact-digital-challenge']
                                }
                            ></i>
                            <a
                                href="https://digital-challenge.fr"
                                className={styles['contact-social-links']}
                            >
                                Digital Challenge
                            </a>
                        </p>
                    </div>
                </div>
                <p className={styles['contact-text']}>
                    Veuillez me contacter par email afin de convenir d&rsquo;un
                    rendez-vous téléphonique.
                </p>
            </section>
        </Element>
    )
}

export default ContactSection
