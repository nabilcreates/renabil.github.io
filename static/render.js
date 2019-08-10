async function renderBody(repo){
    let body = document.getElementById('body')

    // Append to the body
    body.innerHTML += `
        <div id='repo-${repo.name}' class='repo'>
            <h3>${new Date(repo.created_at).toDateString()}</h3>
            <h1>${repo.name}</h1>
            <p>${repo.description}</p>

            <div id="links-${repo.name}" class="links"></div>
        </div>
    `
}

async function renderLinks(repo){
    let linkDiv = document.getElementById(`links-${repo.name}`)

    linkDiv.innerHTML = `
        <button>
            <a href="https://github.com/renabil/${repo.name}">
                Repository
            </a>
        </button>
    `

    if(repo.has_pages){
        linkDiv.innerHTML += `
            <button>
                <a href="https://renabil.github.io/${repo.name}">
                    Page
                </a>
            </button>
        `
    }
}