import '../assets/styles/styles.scss'
import './about.scss'
import { responsiveMenu } from '../assets/javascripts/responsive_menu'
// import { pageTransition } from '../assets/javascripts/page_transition'
// import barba from '@barba/core'
// import { gsap } from 'gsap'

// Gestion du menu sur le responsive
responsiveMenu()

// Effets de transition
// barba.init({
//     transitions: [
//         {
//             name: 'opacity-transition',
//             leave(data: ITransitionData) {
//                 console.log('123')
//                 return gsap.to(data.current.container, {
//                     opacity: 0,
//                 })
//             },
//             enter(data: ITransitionData) {
//                 console.log('456')
//                 return gsap.from(data.next.container, {
//                     opacity: 0,
//                 })
//             },
//         },
//     ],
// })

// pageTransition()
