import './assets/styles/styles.scss'
import './index.scss'
import './assets/styles/components/loader.scss'
import { generateServices } from './assets/javascripts/generate_services'
import { loader } from './assets/javascripts/loader'
import { responsiveMenu } from './assets/javascripts/responsive_menu'

// Lancement du loader
loader()

// Générateur de citations
setInterval(generateServices, 5000)

// Gestion du menu sur le responsive
responsiveMenu()
