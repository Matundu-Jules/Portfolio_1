import { Element } from 'react-scroll'
import styles from './AboutSection.module.scss'
import profilImg from '../../../assets/images/img_profil.jpg'

function AboutSection() {
    return (
        <Element name="about">
            <section className={styles['presentation-container']}>
                <div className={styles['presentation-content']}>
                    <h1>Portfolio de Jules-Langa Matundu</h1>

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
                                    Bonjour, je m&rsquo;appelle Jules-Langa
                                    Matundu, <br /> En alternance au Campus
                                    Numérique de Montereau, je combine les rôles
                                    de développeur et formateur en réseaux LAN,
                                    vidéosurveillance et IoT, tout en
                                    poursuivant mes études en informatique à
                                    SUPINFO Paris.
                                </p>
                                <p>
                                    J&rsquo;ai lancé mon auto-entreprise,
                                    Digital Challenge, où je propose des
                                    services en développement web, formation et
                                    solutions informatiques, avec
                                    l&rsquo;objectif de créer des solutions
                                    techniques innovantes et efficaces.
                                </p>
                                {/* <p className={styles['about-txt-1']}>
                                        Bonjour, je m&rsquo;appelle Jules-Langa
                                        Matundu,
                                        <br />
                                        <br />
                                        Actuellement en alternance au Campus
                                        Numérique de Montereau, je combine les
                                        rôles de formateur en réseaux LAN,
                                        vidéosurveillance et IoT, et de
                                        développeur d&rsquo;une plateforme de
                                        e-learning. Je poursuis également mes
                                        études en informatique à SUPINFO Paris,
                                        avec une solide expérience en
                                        développement web, notamment en
                                        JavaScript.
                                    </p>
                                    <p className={styles['about-txt-2']}>
                                        En parallèle, je suis en train de lancer
                                        mon auto-entreprise, où je proposerai
                                        des services en développement web,
                                        formation et solutions informatiques.
                                        Mon parcours diversifié dans les
                                        systèmes, réseaux et développement web
                                        reflète mon désir d&rsquo;innover et de
                                        créer des solutions techniques créatives
                                        et efficaces. <br />
                                        Prêt à relever de nouveaux défis, je
                                        mets mon expertise et mes compétences au
                                        service de projets innovants et
                                        stimulants.
                                    </p> */}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </Element>
    )
}

export default AboutSection
