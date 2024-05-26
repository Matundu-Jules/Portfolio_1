let isMenuEventAdded = false

export function responsiveMenu() {
    // Gestion du menu sur le responsive
    const responsiveMenuBtn = document.querySelector('.hamburger')
    const navElem = document.querySelector('.header-menu')
    const navLinks = document.querySelectorAll('.header-menu a')

    if (!isMenuEventAdded) {
        responsiveMenuBtn.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()

            const navElem = document.querySelector('nav')
            navElem.classList.toggle('open')
        })

        // Fermer le menu lorsque l'on clique n'importe où sur la page
        document.addEventListener('click', (e) => {
            if (
                navElem.classList.contains('open') &&
                !navElem.contains(e.target) &&
                !responsiveMenuBtn.contains(e.target)
            ) {
                navElem.classList.remove('open')
            }
        })

        // Fermer le menu lorsque l'on clique sur un lien de navigation
        navLinks.forEach((link) => {
            link.addEventListener('click', () => {
                if (navElem.classList.contains('open')) {
                    navElem.classList.remove('open')
                }
            })
        })

        isMenuEventAdded = true
    }
}
