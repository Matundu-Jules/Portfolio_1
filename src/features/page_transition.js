import barba from '@barba/core'
import gsap from 'gsap'
import { loadScript } from '/features/load_script'
import { setActiveLink } from '/features/active_link'

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
                    const currentNamespace = data.next.namespace
                    const oldNamespace = data.current.namespace
                    const oldURL = data.current.url.href

                    window.scrollTo(0, 0)
                    loadScript(currentNamespace)

                    switch (currentNamespace) {
                        case 'home':
                        case 'about':
                        case 'contact':
                        case 'projects':
                            setActiveLink(
                                currentNamespace,
                                oldNamespace,
                                oldURL
                            )
                            break
                        default:
                    }
                },
                enter(data) {
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
