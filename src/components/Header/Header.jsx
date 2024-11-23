import { useState, useEffect } from 'react'
import styles from './Header.module.scss'
import logo from '../../assets/images/header-logo.png'
import { NavLink } from 'react-router-dom'

function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false)

    // Gestion de l'ouverture/fermeture du menu
    const toggleMenu = () => {
        setMenuOpen((prevState) => !prevState)
    }

    // Fermeture du menu en cliquant ailleurs
    useEffect(() => {
        const handleClickOutside = (event) => {
            const menu = document.querySelector(`.${styles['header-menu']}`)
            const hamburger = document.querySelector(`.${styles.hamburger}`)

            if (
                isMenuOpen &&
                menu &&
                !menu.contains(event.target) &&
                !hamburger.contains(event.target)
            ) {
                setMenuOpen(false)
            }
        }

        document.addEventListener('click', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
        }
    }, [isMenuOpen])

    return (
        <header className={styles.header}>
            {/* Logo */}
            <NavLink
                to="/"
                className={styles['logo-container']}
                title="Retour à la page d'accueil"
            >
                <img src={logo} alt="Logo du portfolio de Matundu Jules" />
                Matundu Jules
            </NavLink>

            {/* Bouton hamburger */}
            <button
                className={`${styles.hamburger} ${
                    isMenuOpen ? styles.open : ''
                }`}
                aria-label="Menu"
                onClick={toggleMenu}
            >
                <i className="fa-solid fa-bars"></i>
            </button>

            {/* Navigation */}
            <nav
                className={`${styles['header-menu']} ${
                    isMenuOpen ? styles.open : ''
                }`}
            >
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                    onClick={() => setMenuOpen(false)}
                    end
                >
                    Accueil
                </NavLink>
                <NavLink
                    to="/about"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                    onClick={() => setMenuOpen(false)}
                >
                    A propos
                </NavLink>
                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                    onClick={() => setMenuOpen(false)}
                >
                    Mes projets
                </NavLink>
                <NavLink
                    to="https://blog.julesmatundu.com/"
                    className={styles.navLink}
                    onClick={() => setMenuOpen(false)}
                >
                    Mon blog
                </NavLink>
                <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                        `${styles.navLink} ${isActive ? styles.active : ''}`
                    }
                    onClick={() => setMenuOpen(false)}
                >
                    Contact
                </NavLink>
            </nav>
        </header>
    )
}

export default Header
