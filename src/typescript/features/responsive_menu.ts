export function responsiveMenu() {
    // Gestion du menu sur le responsive
    const responsiveMenu = document.querySelector('.hamburger')

    responsiveMenu?.addEventListener('click', () => {
        document.querySelector('nav')?.classList.toggle('open')
    })
}
