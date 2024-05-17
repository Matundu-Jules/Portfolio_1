let isMenuEventAdded = false

export function responsiveMenu() {
    // Gestion du menu sur le responsive
    const responsiveMenuBtn = document.querySelector('.hamburger')

    if (!isMenuEventAdded) {
        responsiveMenuBtn.addEventListener('click', (e) => {
            e.preventDefault()
            e.stopPropagation()

            const navElem = document.querySelector('nav')
            navElem.classList.toggle('open')
        })
        isMenuEventAdded = true
    }
}
