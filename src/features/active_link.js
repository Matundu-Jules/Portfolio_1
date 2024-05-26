export function setActiveLink(currentNamespace, oldNamespace, oldURL) {
    let currentLink = document.querySelector(`#${currentNamespace}-nav-link`)
    currentLink.removeAttribute('href')
    currentLink.classList.add('active')

    if (
        oldNamespace === 'entertainer' ||
        oldNamespace === 'fiber' ||
        oldNamespace === 'hiphop' ||
        oldNamespace === 'webdev'
    ) {
        let oldLink = document.querySelector(`#about-nav-link`)
        oldLink.href = 'http://localhost:5173/pages/about/about.html'
        oldLink.classList.remove('active')
    } else {
        let oldLink = document.querySelector(`#${oldNamespace}-nav-link`)
        oldLink.href = oldURL
        oldLink.classList.remove('active')
    }
}
