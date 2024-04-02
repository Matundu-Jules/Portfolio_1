export function loader() {
    // Loader
    window.onload = () => {
        const loader = document.querySelector('.loader-wrapper')
        const content = document.querySelector('.hidden-content')

        if (loader) {
            loader.style.opacity = '0'
            loader.style.visibility = 'hidden'
            loader.style.transition = 'opacity 3s, visibility 3s'
            content.style.display = 'block'

            setTimeout(() => {
                // Suppression du loader
                loader.remove()

                // Affichez le contenu principal
                if (content) {
                    content.style.opacity = '1'
                    content.style.visibility = 'visible'
                    content.style.transition = 'opacity 3s, visibility 3s'
                }
            }, 3000)
        }
    }
}
