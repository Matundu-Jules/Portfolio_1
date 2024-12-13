import styles from './IntroSection.module.scss'

function IntroSection() {
    return (
        <section id={styles['about-intro']}>
            <div className={styles['about-intro-img-container']}>
                <img
                    src="/src/assets/images/img_profil.jpg"
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
                informatique à SUPINFO Paris avec un poste au Campus Numérique
                de Montereau, où j&rsquo;interviens en tant que formateur sur
                des modules de réseaux LAN, vidéosurveillance et IoT, et où je
                développe également une plateforme de e-learning.
                <br />
                <br />
                En parallèle, je gère mon auto-entreprise, où je propose des
                services en développement web, formation, et solutions
                informatiques.
                <br />
                <br />
                Mon parcours diversifié en systèmes numériques, réseaux et
                développement web me permet d&rsquo;innover dans des solutions
                techniques créatives et efficaces.
                <br />
                <br />
                Toujours motivé à relever de nouveaux défis, je suis prêt à
                mettre mon expertise et mes compétences au service de projets
                innovants et stimulants.
            </p>
        </section>
    )
}

export default IntroSection
