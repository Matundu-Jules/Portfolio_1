import { Element } from 'react-scroll'
import styles from './AboutSection.module.scss'
import profilImg from '../../../assets/images/img_profil.png'
import bannerVideo from '../../../assets/videos/test.mp4'

function AboutSection() {
    return (
        <Element
            name="about"
            id={styles['about-section-container']}
            role="region"
            aria-labelledby="presentation-title"
        >
            <div className={styles['presentation-content']}>
                <div className={styles['video-banner']}>
                    <video id="video" autoPlay loop muted playsInline>
                        <source src={bannerVideo} type="video/mp4" />
                        <p>
                            Votre navigateur ne prend pas en charge les vidéos
                            HTML5.
                        </p>
                    </video>
                    <h1 id="presentation-title">
                        Portfolio de Jules-Langa Matundu
                    </h1>
                </div>
                <section id={styles.about}>
                    <div className={styles['about-container']}>
                        <div className={styles['about-img-container-main']}>
                            <div className={styles['about-img-container']}>
                                <img
                                    src={profilImg}
                                    alt="Photo de Matundu Jules-Langa"
                                    className={styles['about-img']}
                                />
                            </div>
                        </div>

                        <div className={styles['about-txt-container']}>
                            <h2>À propos de moi</h2>
                            <p>
                                Bonjour, je m&rsquo;appelle Jules-Langa Matundu,{' '}
                                <br /> En alternance au Campus Numérique de
                                Montereau, je combine les rôles de développeur
                                et formateur en réseaux LAN, vidéosurveillance
                                et IoT, tout en poursuivant mes études en
                                informatique à SUPINFO Paris.
                            </p>
                            <p>
                                J&rsquo;ai lancé mon auto-entreprise, Digital
                                Challenge, où je propose des services en
                                développement web, formation et solutions
                                informatiques, avec l&rsquo;objectif de créer
                                des solutions techniques innovantes et
                                efficaces.
                            </p>
                        </div>
                    </div>
                </section>
            </div>
        </Element>
    )
}

export default AboutSection
