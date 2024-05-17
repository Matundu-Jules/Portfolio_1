import '/styles/styles.scss'
import '/index.scss'
import { responsiveMenu } from '/features/responsive_menu'
import { customScroll } from '/features/scroll'
import { displayHomeProjects } from '/features/display-projects'
import { projects } from '/features/all-projects'

// Gestion du menu sur le responsive
responsiveMenu()

// Défilement au scroll
document.addEventListener('wheel', customScroll, { passive: false })

// Affichage des projets
displayHomeProjects(projects)

export function init() {
    // Gestion du menu sur le responsive
    responsiveMenu()

    // Défilement au scroll
    document.addEventListener('wheel', customScroll, { passive: false })

    // Affichage des projets
    const projectGallery = document.querySelectorAll('.project-card')

    projectGallery.forEach((projectCard, index) => {
        if (projectCard.childElementCount === 0) {
            displayHomeProjects(projects)
        } else {
            return
        }
    })
}
