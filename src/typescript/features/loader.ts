export function loader() {
    // Loader
    document.addEventListener('DOMContentLoaded', () => {
        const loader = document.querySelector('.loader-wrapper') as HTMLElement
        if (loader) {
            loader.style.opacity = '0'
            loader.style.visibility = 'hidden'
            loader.style.transition = 'opacity 3s, visibility 3s'

            setTimeout(() => {
                loader.remove()
                const content = document.querySelector(
                    '.hidden-content'
                ) as HTMLElement
                if (content) {
                    content.style.opacity = '1'
                }
            }, 3000)
        }
    })

    // Affichez le contenu principal
    window.onload = () => {
        const content = document.querySelector('.hidden-content') as HTMLElement
        if (content) {
            // Utilisez 'fadeOut' pour une transition plus douce si vous le souhaitez

            content.style.display = 'block'

            setTimeout(() => {
                content.style.opacity = '1'
            }, 5000)
        }
    }
}
