import { Element } from 'react-scroll'
import styles from './IntroSection.module.scss'

function IntroSection() {
    return (
        <Element
            name="about"
            id={styles['about-intro']}
            role="region"
            aria-labelledby="about-title"
        >
            <h1 className={styles['about-main-title']} id="about-title">
                À propos de moi
            </h1>

            <div className={styles['about-img-text-container']}>
                <div className={styles['about-intro-img-container']}>
                    <img
                        src="/src/assets/images/img_profil.png"
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
                    Numérique de Montereau, où j&rsquo;interviens comme
                    formateur en réseaux LAN, vidéosurveillance et IoT, et
                    développe des automatisations et outils digitaux pour
                    optimiser les processus internes, comme la gestion des
                    questionnaires, inscriptions et réunions.
                    <br />
                    <br />
                    J&rsquo;ai également créé mon auto-entreprise, &quot;Digital
                    Challenge&quot;, où je propose des services en développement
                    web et solutions informatiques sur mesure.
                    <br />
                    <br />
                    Mon parcours polyvalent me permet d’imaginer et réaliser des
                    solutions techniques innovantes et adaptées.
                </p>
            </div>
        </Element>
    )
}

export default IntroSection
