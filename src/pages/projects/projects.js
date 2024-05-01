import '/styles/styles.scss'
import '/pages/projects/projects.scss'
import { responsiveMenu } from '/features/responsive_menu'
import { customScroll } from '../../home'

// Gestion du menu sur le responsive
responsiveMenu()

// Désactivation du scroll de la homepage
document.removeEventListener('wheel', customScroll, { passive: true })

console.log('PROJECT')
