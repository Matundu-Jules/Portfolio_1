// Suppression de l'event scroll
export function cleanUpScrollEvent() {
    document.removeEventListener('wheel', customScroll, { passive: false })
}

// Fonction event scroll
export function customScroll(e) {
    e.preventDefault()

    const sections = document.querySelectorAll(
        '.banner-container, #skills, #projects, #contact'
    )

    const scrollDirection = e.deltaY > 0 ? 1 : -1
    let currentSection = getCurrentSection(sections)

    let currentIndex = Array.from(sections).indexOf(currentSection)
    let nextIndex = currentIndex + scrollDirection

    if (nextIndex === 0) {
        // Si l'utilisateur défile vers le haut à partir de la première section
        window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (nextIndex >= 0 && nextIndex < sections.length) {
        sections[nextIndex].scrollIntoView({ behavior: 'smooth' })
    }
}

// Récupérer la section en cours
function getCurrentSection(sections) {
    const headerHeight = 80

    let maxVisibleHeight = 0
    let mostVisibleSection = sections[0]

    for (let section of sections) {
        const rect = section.getBoundingClientRect()
        const visibleHeight =
            Math.min(rect.bottom, window.innerHeight) -
            Math.max(rect.top, headerHeight)

        if (
            visibleHeight > maxVisibleHeight &&
            rect.top < window.innerHeight &&
            rect.bottom > headerHeight
        ) {
            maxVisibleHeight = visibleHeight
            mostVisibleSection = section
        }
    }
    return mostVisibleSection
}
