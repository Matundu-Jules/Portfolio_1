import '../../scss/style.scss'
import typescriptLogo from '/images/typescript.svg'

document.querySelector<HTMLDivElement>('#header')!.innerHTML = `
  <header>
    <img class="header-logo" src="${typescriptLogo}" alt="Logo du portfolio de Matundu Jules" />
    <nav>
        <li>Accueil</li>
        <li>A Propos</li>
        <li>Mes projets</li>
        <li>Contact</li>
    </nav>
  </header>
`
