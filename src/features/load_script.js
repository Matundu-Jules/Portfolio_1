export function loadScript(name) {
    // console.log(`Tentative de chargement du script pour la page ${name}...`)
    // Suppression des scripts précédemment chargés, sauf index.js
    let existingScripts = document.querySelectorAll(
        'script[type="module"][src*=".js"]'
    )
    existingScripts.forEach((script) => {
        if (!script.src.includes('index.js')) {
            // console.log(`Suppression du script existant : ${script.src}`)
            script.parentNode.removeChild(script)
        }
    })

    // Importation dynamique du script basé sur le namespace
    import(`../pages/${name}/${name}.js`)
        .then((module) => {
            // console.log(
            //     `Le module pour la page ${name} a été importé avec succès.`
            // )
            if (typeof module.init === 'function') {
                module.init()
                console.log(
                    `Le script de la page de ${name} a été chargé avec succès.`
                )
            } else {
                // console.error(
                //     `Erreur : la fonction 'init' n'est pas définie dans le module pour la page ${name}.`
                // )
            }
        })
        .catch((err) => {
            console.error(
                `Erreur lors du chargement du script de la page de ${name} : `,
                err
            )
        })
}
