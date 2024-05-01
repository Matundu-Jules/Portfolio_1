import '/styles/styles.scss'
import '/index.scss'
import '/styles/components/loader.scss'
import { generateServices } from '/features/generate_services'
import { pageTransition } from '/features/page_transition'
import { loader } from '/features/loader'

// Effets de transition
pageTransition()

// Lancement du loader
// loader()

// Générateur de citations
setInterval(generateServices, 5000)
