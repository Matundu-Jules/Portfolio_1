import barba from '@barba/core'
import gsap from 'gsap'

// Effets de transition
export const pageTransition = () => {
    barba.init({
        transitions: [
            {
                name: 'opacity-transition',
                leave(data) {
                    return gsap.to(data.current.container, {
                        opacity: 0,
                    })
                },
                enter(data) {
                    console.log('456')
                    return gsap.from(data.next.container, {
                        opacity: 0,
                    })
                },
            },
        ],
    })
}
