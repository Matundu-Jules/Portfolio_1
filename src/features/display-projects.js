export function displayProjects(projects) {
    const projectGallery = document.querySelector('#project-gallery')

    // Trier le tableau
    const sortedProjects = sortProjects(projects)

    sortedProjects.forEach((project) => {
        // Card
        const projectCard = document.createElement('div')
        projectCard.className = 'project-card'

        // Contenu
        const projectCardContent = document.createElement('div')
        projectCardContent.className = 'project-card-content'
        projectCard.appendChild(projectCardContent)

        // Container img
        const projectCardImgContainer = document.createElement('div')
        projectCardImgContainer.className = 'project-card-img-container'

        // img
        const projectCardImage = document.createElement('img')
        projectCardImage.className = 'project-card-img'
        projectCardImage.src = project.image
        projectCardImage.alt = `Logo de ${project.title}`
        projectCardImgContainer.appendChild(projectCardImage)

        // Container body
        const projectCardBody = document.createElement('div')
        projectCardBody.className = 'project-card-body'

        // Container details
        const projectCardDetails = document.createElement('div')
        projectCardDetails.className = 'project-card-details'

        // p categorie
        const projectCardCategory = document.createElement('p')
        projectCardCategory.className = 'project-card-domain'
        projectCardCategory.textContent = project.category

        // p date
        const projectCardYear = document.createElement('p')
        projectCardYear.className = 'project-card-date'
        projectCardYear.textContent = project.year

        // ajout contenu => detail
        projectCardDetails.append(projectCardCategory, projectCardYear)

        // title
        const projectCardTitle = document.createElement('h2')
        projectCardTitle.className = 'project-card-title'
        projectCardTitle.innerHTML = project.title

        // subtitle
        const projectCardSubtitle = document.createElement('h3')
        if (project.subtitle) {
            projectCardSubtitle.className = 'project-card-subtitle'
            projectCardSubtitle.innerHTML = project.subtitle
        }
        // description
        const projectCardDescription = document.createElement('p')
        projectCardDescription.className = 'project-card-description'
        projectCardDescription.innerHTML = project.description

        // url
        const projectCardUrl = document.createElement('a')
        if (project.url) {
            projectCardUrl.className = 'project-card-link'
            projectCardUrl.href = project.url
            projectCardUrl.target = '_blank'
            projectCardUrl.textContent = 'Voir le projet'
        }

        // ajout contenu => body
        if (project.url && project.subtitle) {
            projectCardBody.append(
                projectCardDetails,
                projectCardTitle,
                projectCardSubtitle,
                projectCardDescription,
                projectCardUrl
            )
        } else if (!project.url && !project.subtitle) {
            projectCardBody.append(
                projectCardDetails,
                projectCardTitle,
                projectCardDescription
            )
        } else if (!project.url) {
            projectCardBody.append(
                projectCardDetails,
                projectCardTitle,
                projectCardSubtitle,
                projectCardDescription
            )
        } else if (!project.subtitle) {
            projectCardBody.append(
                projectCardDetails,
                projectCardTitle,
                projectCardDescription,
                projectCardUrl
            )
        }

        // ajout contenu => Contenu
        projectCardContent.append(projectCardImgContainer, projectCardBody)
        projectGallery.appendChild(projectCard)
    })
}

// Trier les projets par date et par ordre alphabétique
function sortProjects(projects) {
    return projects.sort((a, b) => {
        // par année
        const yearCompare = b.year.localeCompare(a.year)

        if (yearCompare !== 0) {
            return yearCompare
        }

        // Si l'année est la même comparer par ordre alphabétique
        // Si subtitle trier en fonction de celui-ci sinon du titre
        const aCriteria = a.subtitle || a.title
        const bCriteria = b.subtitle || b.title

        return aCriteria.localeCompare(bCriteria)
    })
}

export function displayHomeProjects(projects) {
    const homeProjects = document.querySelectorAll('.project-home-card')

    // Trier le tableau
    const sortedProjects = sortProjects(projects)

    homeProjects.forEach((projectCard, index) => {
        // Contenu
        const projectCardContent = document.createElement('div')
        projectCardContent.className = 'project-home-card-content'
        projectCard.appendChild(projectCardContent)

        // Container img
        const projectCardImgContainer = document.createElement('div')
        projectCardImgContainer.className = 'project-home-card-img-container'

        // img
        const projectCardImage = document.createElement('img')
        projectCardImage.className = 'project-home-card-img'
        projectCardImage.src = sortedProjects[index].image
        projectCardImage.alt = `Logo de ${sortedProjects[index].title}`
        projectCardImgContainer.appendChild(projectCardImage)

        // Container body
        const projectCardBody = document.createElement('div')
        projectCardBody.className = 'project-home-card-body'

        // Container details
        const projectCardDetails = document.createElement('div')
        projectCardDetails.className = 'project-home-card-details'

        // p categorie
        const projectCardCategory = document.createElement('p')
        projectCardCategory.className = 'project-home-card-domain'
        projectCardCategory.textContent = sortedProjects[index].category

        // p date
        const projectCardYear = document.createElement('p')
        projectCardYear.className = 'project-home-card-date'
        projectCardYear.textContent = sortedProjects[index].year

        // ajout contenu => detail
        projectCardDetails.append(projectCardCategory, projectCardYear)

        // title
        const projectCardTitle = document.createElement('h2')
        projectCardTitle.className = 'project-home-card-title'
        projectCardTitle.innerHTML = sortedProjects[index].title

        // subtitle
        const projectCardSubtitle = document.createElement('h3')
        if (sortedProjects[index].subtitle) {
            projectCardSubtitle.className = 'project-home-card-subtitle'
            projectCardSubtitle.innerHTML = sortedProjects[index].subtitle
        }
        // description
        const projectCardDescription = document.createElement('p')
        projectCardDescription.className = 'project-home-card-description'
        projectCardDescription.innerHTML = sortedProjects[index].description

        // url
        const projectCardUrl = document.createElement('a')
        if (sortedProjects[index].url) {
            projectCardUrl.className = 'project-home-card-link'
            projectCardUrl.href = sortedProjects[index].url
            projectCardUrl.target = '_blank'
            projectCardUrl.textContent = 'Voir le projet'
        }

        // ajout contenu => body
        if (sortedProjects[index].url && sortedProjects[index].subtitle) {
            projectCardBody.append(
                projectCardDetails,
                projectCardTitle,
                projectCardSubtitle,
                projectCardDescription,
                projectCardUrl
            )
        } else if (
            !sortedProjects[index].url &&
            !sortedProjects[index].subtitle
        ) {
            projectCardBody.append(
                projectCardDetails,
                projectCardTitle,
                projectCardDescription
            )
        } else if (!sortedProjects[index].url) {
            projectCardBody.append(
                projectCardDetails,
                projectCardTitle,
                projectCardSubtitle,
                projectCardDescription
            )
        } else if (!sortedProjects[index].subtitle) {
            projectCardBody.append(
                projectCardDetails,
                projectCardTitle,
                projectCardDescription,
                projectCardUrl
            )
        }

        // ajout contenu => Contenu
        projectCardContent.append(projectCardImgContainer, projectCardBody)
    })
}
