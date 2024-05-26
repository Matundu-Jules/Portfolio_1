import '/styles/styles.scss'
import '/index.scss'
import '/styles/components/loader.scss'
import { generateServices } from '/features/generate_services'
import { pageTransition } from '/features/page_transition'

// Effets de transition
pageTransition()

// Générateur de citations
setInterval(generateServices, 5000)
