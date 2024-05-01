import '/styles/styles.scss'
import '/index.scss'
import { responsiveMenu } from '/features/responsive_menu'
import { customScroll } from '/features/scroll'

// Gestion du menu sur le responsive
responsiveMenu()

// Défilement au scroll
document.addEventListener('wheel', customScroll, { passive: false })

export function init() {
    // Gestion du menu sur le responsive
    responsiveMenu()

    // Défilement au scroll
    document.addEventListener('wheel', customScroll, { passive: false })
}
