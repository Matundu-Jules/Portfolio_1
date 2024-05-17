import '/styles/styles.scss'
import '/pages/projects/projects.scss'
import { responsiveMenu } from '/features/responsive_menu'
import { cleanUpScrollEvent } from '/features/scroll'
import { projects } from '/features/all-projects'
import { displayProjects } from '/features/display-projects'

// Gestion du menu sur le responsive
responsiveMenu()

// Désactivation du scroll de la homepage
cleanUpScrollEvent()

// Affichage des projets
displayProjects(projects)

export function init() {
    // Gestion du menu sur le responsive
    responsiveMenu()

    // Désactivation du scroll de la homepage
    cleanUpScrollEvent()

    // Affichage des projets
    const projectGallery = document.querySelector('#project-gallery')
    if (projectGallery.childElementCount === 0) {
        displayProjects(projects)
    }
}
