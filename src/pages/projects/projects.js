import '/styles/styles.scss'
import '/pages/projects/projects.scss'
import { responsiveMenu } from '/features/responsive_menu'
import { cleanUpScrollEvent } from '/features/scroll'

export function init() {
    // Gestion du menu sur le responsive
    responsiveMenu()

    // Désactivation du scroll de la homepage
    cleanUpScrollEvent()
}
