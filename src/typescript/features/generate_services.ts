// Création des service à afficher sur la banière
interface Services {
    title: string
}

let websiteService: Services = {
    title: 'Création de sites web',
}
let iotService: Services = {
    title: 'Installation et Configuration de Maison Connectée',
}
let computerAssistService: Services = {
    title: 'Assistance et Formation Informatique Personnalisée',
}
let lanService: Services = {
    title: 'Configuration et Installation de Réseaux Locaux Professionnels et Particuliers',
}
let fiberService: Services = {
    title: 'Technicien Fibre Optique',
}

let allServices = [
    websiteService,
    iotService,
    computerAssistService,
    lanService,
    fiberService,
]

let srcBannerImg = [
    '/images/banner/webdesign.jpg',
    '/images/banner/iot1.jpg',
    '/images/banner/it-support.jpg',
    '/images/banner/lan.jpg',
    '/images/banner/fiber41.jpg',
]

let index = 1

// Afficher les services toutes les 5 secondes
export function generateServices() {
    let bannerTitleElem = document.querySelector('.banner-title')
    let imgBannerElem = document.querySelector(
        '.banner-img'
    ) as HTMLImageElement

    // Passer au service suivant
    if (bannerTitleElem) {
        // Retirer la classe pour l'effet de transition
        bannerTitleElem?.classList.remove('banner-fade')
        imgBannerElem?.classList.remove('banner-fade')

        // Changement de service et effet de transition fondu
        setTimeout(() => {
            requestAnimationFrame(() => {
                // Changer la citation et l'auteur
                bannerTitleElem!.textContent = allServices[index].title
                imgBannerElem!.src = srcBannerImg[index]

                // Ajout de la classe pour l'effet de transition
                bannerTitleElem?.classList.add('banner-fade')
                imgBannerElem?.classList.add('banner-fade')
            })
        }, 225)
    }

    // Passer à la citation suivante et revenir au début si on a atteint la fin du tableau
    index = (index + 1) % allServices.length
}
