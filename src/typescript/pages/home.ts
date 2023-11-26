import '../../scss/components/loader.scss'
import '../../scss/main.scss'
import '../../scss/pages/home.scss'
import { generateServices } from '../features/generate_services'
import { loader } from '../features/loader'
import { responsiveMenu } from '../features/responsive_menu'

// Lancement du loader
loader()

// Générateur de citations
setInterval(generateServices, 5000)

// Gestion du menu sur le responsive
responsiveMenu()
