import '../../scss/main.scss'
import '../../scss/pages/home.scss'
import { generateQuote } from '../features/generate_quote'

// Générateur de citations
setInterval(generateQuote, 5000)
