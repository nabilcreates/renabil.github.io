async function return_recent_repos(username) {
    let return_array = [];

    await fetch('https://api.github.com/users/' + username + '/repos?sort=updated&per_page=100')
        .then(response => response.json())
        .then(json => {

            for(let i = 0; i < 3; i ++){
                return_array.push(json[i])
            }

        })

        return return_array;
}

async function return_repos(username) {
    let return_array = [];

    await fetch('https://api.github.com/users/' + username + '/repos?sort=updated&per_page=100')
        .then(response => response.json())
        .then(json => {
            return_array = json;
        })

        return return_array;
}