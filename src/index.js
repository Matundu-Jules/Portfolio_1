import './styles/styles.scss'
import './index.scss'
import './styles/components/loader.scss'
import { generateServices } from './features/generate_services'
import { loader } from './features/loader'
import { responsiveMenu } from './features/responsive_menu'
import { pageTransition } from './features/page_transition'
import barba from '@barba/core'

// Effets de transition
pageTransition()

let script

// Barba.js hooks pour réinitialisation de scripts spécifiques, si nécessaire
barba.hooks.enter((data) => {
    const namespace = data.next.namespace
    switch (namespace) {
        case 'home':
            script = document.createElement('script')
            script.src = './index.js'
            script.type = 'module'
            document.body.appendChild(script)

            script.onload = () => {
                console.log(
                    'Le script de la page de index a été chargé avec succès.'
                )
                // Ici, vous pouvez initier des fonctions spécifiques définies dans `index.js`
            }

            script.onerror = () => {
                console.error(
                    'Erreur lors du chargement du script de la page de index.'
                )
            }
            break
        case 'about':
            script = document.createElement('script')
            script.src = './about.js'
            script.type = 'module'
            document.body.appendChild(script)

            script.onload = () => {
                console.log(
                    'Le script de la page de about a été chargé avec succès.'
                )
                // Ici, vous pouvez initier des fonctions spécifiques définies dans `about.js`
            }

            script.onerror = () => {
                console.error(
                    'Erreur lors du chargement du script de la page de about.'
                )
            }
            break
        case 'contact':
            script = document.createElement('script')
            script.src = './contact.js'
            script.type = 'module'
            document.body.appendChild(script)

            script.onload = () => {
                console.log(
                    'Le script de la page de contact a été chargé avec succès.'
                )
                // Ici, vous pouvez initier des fonctions spécifiques définies dans `contact.js`
            }

            script.onerror = () => {
                console.error(
                    'Erreur lors du chargement du script de la page de contact.'
                )
            }
            break
        case 'projects':
            script = document.createElement('script')
            script.src = './projects.js'
            script.type = 'module'
            document.body.appendChild(script)

            script.onload = () => {
                console.log(
                    'Le script de la page de projects a été chargé avec succès.'
                )
                // Ici, vous pouvez initier des fonctions spécifiques définies dans `projects.js`
            }

            script.onerror = () => {
                console.error(
                    'Erreur lors du chargement du script de la page de projects.'
                )
            }
            break
    }
})

// Lancement du loader
// loader()

// Générateur de citations
// setInterval(generateServices, 5000)

// Gestion du menu sur le responsive
responsiveMenu()
