export function loadScript(name) {
    // Suppression des scripts précédemment chargés, sauf index.js
    let existingScripts = document.querySelectorAll(
        'script[type="module"][src*=".js"]'
    )
    existingScripts.forEach((script) => {
        if (!script.src.includes('index.js')) {
            script.parentNode.removeChild(script)
        }
    })

    // Importation dynamique du script basé sur le namespace
    import(`../pages/${name}/${name}.js`)
        .then((module) => {
            module.init()
            console.log(
                `Le script de la page de ${name} a été chargé avec succès.`
            )
        })
        .catch((err) => {
            console.error(
                `Erreur lors du chargement du script de la page de ${name} : `,
                err
            )
        })
}
