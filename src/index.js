import '/styles/styles.scss'
import '/index.scss'
import '/styles/components/loader.scss'
import { generateServices } from '/features/generate_services'
import { loader } from '/features/loader'
import { responsiveMenu } from '/features/responsive_menu'
import { pageTransition } from '/features/page_transition'
import barba from '@barba/core'

// Effets de transition
pageTransition()

// Lancement du loader
// loader()

// Générateur de citations
setInterval(generateServices, 5000)

// Gestion du menu sur le responsive
responsiveMenu()
