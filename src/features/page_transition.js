import barba from '@barba/core'
import gsap from 'gsap'

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
                            loadScript('index')
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
        ],
    })
}

function loadScript(name) {
    let script = document.createElement('script')

    if (name === 'index') {
        script.src = `../${name}.js`
    } else {
        script.src = `./${name}.js`
    }

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
