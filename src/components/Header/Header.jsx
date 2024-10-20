import styles from './Header.module.scss'
import logo from '../../assets/images/header-logo.png'

function Header() {
    return (
        <header className={styles.header}>
            <a
                href="#"
                className={styles['logo-container']}
                title="Retour à la page d'accueil"
            >
                <img src={logo} alt="Logo du portfolio de Matundu Jules" />
                Matundu Jules
            </a>

            {/* <button className="hamburger" aria-label="Menu">
                <i className="fa-solid fa-bars"></i>
            </button> */}

            <nav>
                <a id="home-nav-link" href="/index.html">
                    Accueil
                </a>
                <a id="about-nav-link" href="/pages/about/about.html">
                    A propos
                </a>
                <a id="projects-nav-link" href="/pages/projects/projects.html">
                    Mes projets
                </a>
                <a id="blog-nav-link" href="https://blog.julesmatundu.com/">
                    Mon Blog
                </a>
                <a id="contact-nav-link" href="/pages/contact/contact.html">
                    Contact
                </a>
            </nav>
        </header>
    )
}

export default Header
