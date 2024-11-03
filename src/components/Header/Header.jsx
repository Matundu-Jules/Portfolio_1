import styles from './Header.module.scss'
import logo from '../../assets/images/header-logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <header className={styles.header}>
            <NavLink
                to="/"
                className={styles['logo-container']}
                title="Retour à la page d'accueil"
            >
                <img src={logo} alt="Logo du portfolio de Matundu Jules" />
                Matundu Jules
            </NavLink>

            {/* <button className="hamburger" aria-label="Menu">
                <i className="fa-solid fa-bars"></i>
            </button> */}

            <nav>
                <NavLink
                    to="/"
                    id="home-nav-link"
                    className={({ isActive }) =>
                        isActive ? styles.active : ''
                    }
                    end
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    id="about-nav-link"
                    className={({ isActive }) =>
                        isActive ? styles.active : ''
                    }
                >
                    A propos
                </NavLink>
                <NavLink
                    to="/projects"
                    id="projects-nav-link"
                    className={({ isActive }) =>
                        isActive ? styles.active : ''
                    }
                >
                    Mes projets
                </NavLink>
                <NavLink to="https://blog.julesmatundu.com/" id="blog-nav-link">
                    Mon blog
                </NavLink>
                <NavLink
                    to="/contact"
                    id="contact-nav-link"
                    className={({ isActive }) =>
                        isActive ? styles.active : ''
                    }
                >
                    Contact
                </NavLink>

                {/* <a id="home-nav-link" href="/index.html">
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
                </a> */}
            </nav>
        </header>
    )
}

export default Header
