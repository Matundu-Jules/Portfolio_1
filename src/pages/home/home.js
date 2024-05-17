import '/styles/styles.scss'
import '/index.scss'
import { responsiveMenu } from '/features/responsive_menu'
import { updateScrollBehavior } from '/features/scroll'
import { displayHomeProjects } from '/features/display-projects'
import { projects } from '/features/all-projects'

// Gestion du menu sur le responsive
responsiveMenu()

// Initialiser le comportement de défilement
updateScrollBehavior()

// Ajouter les événements de redimensionnement et de chargement
window.addEventListener('resize', updateScrollBehavior)
window.addEventListener('load', updateScrollBehavior)

// Affichage des projets
displayHomeProjects(projects)

export function init() {
    // Gestion du menu sur le responsive
    responsiveMenu()

    // Défilement au scroll
    updateScrollBehavior()

    // Affichage des projets
    const projectGallery = document.querySelectorAll('.project-card')

    projectGallery.forEach((projectCard) => {
        if (projectCard.childElementCount === 0) {
            displayHomeProjects(projects)
        } else {
            return
        }
    })
}
