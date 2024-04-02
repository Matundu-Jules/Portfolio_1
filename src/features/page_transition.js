import barba from '@barba/core'
import barbaCss from '@barba/css'
import gsap from 'gsap'

// Effets de transition
export const pageTransition = () => {
    barba.init({
        transitions: [
            {
                name: 'default',
                to: {
                    namespace: ['home', 'about', 'contact', 'projects'],
                },
                leave(data) {
                    console.log(data)
                    return gsap.to(data.current.container, {
                        opacity: 0,
                    })
                },
                enter(data) {
                    console.log(data)

                    return gsap.from(data.next.container, {
                        opacity: 1,
                    })
                },
            },
        ],
    })
}

// Écouteur pour l'événement avant d'entrer dans une nouvelle page
// barba.hooks.beforeEnter((data) => {
//     console.log('beforeEnter', {
//         nextNamespace: data.next.namespace,
//         currentNamespace: data.current.namespace,
//     })
// })

// Écouteur pour l'événement après être entré dans une nouvelle page
// barba.hooks.afterEnter((data) => {
//     console.log('afterEnter', {
//         nextNamespace: data.next.namespace,
//         currentNamespace: data.current.namespace,
//     })
// })

// Écouteur pour l'événement avant de quitter la page actuelle
// barba.hooks.beforeLeave((data) => {
//     console.log('beforeLeave', {
//         nextNamespace: data.next.namespace,
//         currentNamespace: data.current.namespace,
//     })
// })

// Écouteur pour l'événement après avoir quitté la page actuelle
// barba.hooks.afterLeave((data) => {
//     console.log('afterLeave', {
//         nextNamespace: data.next.namespace,
//         currentNamespace: data.current.namespace,
//     })
// })
