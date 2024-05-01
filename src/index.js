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
// responsiveMenu()

// // Défilement au scroll
// document.addEventListener(
//     'wheel',
//     (e) => {
//         e.preventDefault()

//         const sections = document.querySelectorAll(
//             '.banner-container, #skills, #projects, #contact'
//         )

//         const scrollDirection = e.deltaY > 0 ? 1 : -1
//         let currentSection = getCurrentSection(sections)

//         let currentIndex = Array.from(sections).indexOf(currentSection)
//         let nextIndex = currentIndex + scrollDirection

//         if (nextIndex === 0) {
//             // Si l'utilisateur défile vers le haut à partir de la première section
//             console.log('AAAA')
//             window.scrollTo({ top: 0, behavior: 'smooth' })
//         } else if (nextIndex >= 0 && nextIndex < sections.length) {
//             sections[nextIndex].scrollIntoView({ behavior: 'smooth' })
//         }
//     },
//     { passive: false }
// )

// function getCurrentSection(sections) {
//     const headerHeight = 80

//     let maxVisibleHeight = 0
//     let mostVisibleSection = sections[0]

//     for (let section of sections) {
//         const rect = section.getBoundingClientRect()
//         const visibleHeight =
//             Math.min(rect.bottom, window.innerHeight) -
//             Math.max(rect.top, headerHeight)

//         if (
//             visibleHeight > maxVisibleHeight &&
//             rect.top < window.innerHeight &&
//             rect.bottom > headerHeight
//         ) {
//             maxVisibleHeight = visibleHeight
//             mostVisibleSection = section
//         }
//     }
//     return mostVisibleSection
// }
