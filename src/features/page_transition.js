import barba from '@barba/core'
import gsap from 'gsap'
import { customScroll } from '../home'

// Effets de transition
export const pageTransition = () => {
    barba.init({
        transitions: [
            {
                name: 'home',
                to: {
                    namespace: [
                        'home',
                        'about',
                        'contact',
                        'projects',
                        'entertainer',
                        'entertainer_degree',
                        'fiber',
                        'hiphop',
                        'webdev',
                        'webdev_degree',
                        'sen',
                        'telecom_degree',
                    ],
                },
                leave(data) {
                    return gsap.to(data.current.container, {
                        opacity: 0,
                    })
                },
                beforeEnter(data) {
                    window.scrollTo(0, 0)

                    const currentNamespace = data.next.namespace
                    const oldNamespace = data.current.namespace

                    const oldURL = data.current.url.href

                    switch (currentNamespace) {
                        case 'home':
                            loadScript('home')
                            setActiveLink(
                                currentNamespace,
                                oldNamespace,
                                oldURL
                            )
                            break
                        case 'about':
                            loadScript('about')
                            setActiveLink(
                                currentNamespace,
                                oldNamespace,
                                oldURL
                            )
                            break
                        case 'contact':
                            loadScript('contact')
                            setActiveLink(
                                currentNamespace,
                                oldNamespace,
                                oldURL
                            )
                            break
                        case 'projects':
                            loadScript('projects')
                            setActiveLink(
                                currentNamespace,
                                oldNamespace,
                                oldURL
                            )
                            break
                        case 'entertainer':
                            loadScript('entertainer')
                            break
                        case 'fiber':
                            loadScript('fiber')
                            break
                        case 'hiphop':
                            loadScript('hiphop')
                            break
                        case 'webdev':
                            loadScript('webdev')
                            break
                        default:
                    }
                },
                enter(data) {
                    console.log('ENTER DATA : ', data)
                    gsap.fromTo(
                        data.next.container,
                        { opacity: 0 },
                        {
                            opacity: 1,
                            duration: 0.8,
                        }
                    )
                },
            },
            // Ajout d'une 2eme transition pour charger le loader sur la page d'accueil (beforeEnter ou enter ? à tester)
        ],
    })
}

function loadScript(name) {
    // Suppression des scripts précédemment chargés, sauf index.js
    let existingScripts = document.querySelectorAll(
        'script[type="module"][src*=".js"]'
    )
    console.log(existingScripts)
    existingScripts.forEach((script) => {
        if (!script.src.includes('index.js')) {
            script.parentNode.removeChild(script)
        }
    })

    // Création et ajout du nouveau script
    let script = document.createElement('script')
    script.src = `./${name}.js`
    script.type = 'module'
    document.body.appendChild(script)

    script.onload = () => {
        console.log(`Le script de la page de ${name} a été chargé avec succès.`)
    }

    script.onerror = () => {
        console.error(
            `Erreur lors du chargement du script de la page de ${name}.`
        )
    }
}

function setActiveLink(currentNamespace, oldNamespace, oldURL) {
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

function setActiveLinkSubPage(currentNamespace, oldNamespace, oldURL) {}
