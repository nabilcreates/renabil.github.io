let body = document.getElementById('body')

return_repos('renabil')
.then(datas => {
    datas.forEach(data => {

        // log the data
        console.log(data)

        // Append to the body
        body.innerHTML += `
            <div id='${data.name}' class='repo'>
                <h1>${data.name}</h1>
                <p>${data.description}</p>
                
                <div id='links-${data.name}' class='links>
                    <a href='https://github.com/renabil/${data.name}'>Repository</a>
                </div>
            </div>
        `

        // Check if repo has github pages
        if(data.has_pages){

            // select repo by the id (given at the body,innerHTML above)
            let repo = document.getElementById(`links-${data.name}`)
            repo.innerHTML += `
                <a href='https://renabil.github.io/${data.name}'>
                    Page
                </a>
            `
        }
    })
})