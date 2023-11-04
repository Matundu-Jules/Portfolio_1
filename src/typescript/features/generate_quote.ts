// Création des  citations à afficher
interface Quote {
    quote: string
    author: string
}

let aristoteQuote: Quote = {
    quote: 'Ce que nous devons apprendre à faire, nous l’apprendrons en le faisant.',
    author: 'Aristote',
}
let socrateQuote: Quote = {
    quote: 'Tout ce que je sais, c’est que je ne sais rien.',
    author: 'Socrate',
}
let jordanQuote: Quote = {
    quote: "Le grand but de la vie n'est pas le savoir mais l'action.",
    author: 'Thomas Huxley',
}

let allQuotes = [aristoteQuote, socrateQuote, jordanQuote]
let index = 1

// Afficher les citaions toutes les 5 secondes
export function generateQuote() {
    let quoteElement = document.querySelector('.quote')
    let authorElement = document.querySelector('.quote-author')

    // Remplacer la citation suivante
    if (quoteElement && authorElement) {
        // Retirer la classe pour l'effet de transition
        quoteElement?.classList.remove('quote-fade')
        authorElement?.classList.remove('quote-fade')

        // Changement de citation et effet de transition fondu
        setTimeout(() => {
            requestAnimationFrame(() => {
                // Changer la citation et l'auteur
                quoteElement!.textContent = allQuotes[index].quote
                authorElement!.textContent = allQuotes[index].author

                // Ajout de la classe pour l'effet de transition
                quoteElement?.classList.add('quote-fade')
                authorElement?.classList.add('quote-fade')
            })
        }, 225)
    }

    // Passer à la citation suivante et revenir au début si on a atteint la fin du tableau
    index = (index + 1) % allQuotes.length
}
