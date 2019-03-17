// Component for Main App

class App extends React.Component {

    constructor() {
        super();

        // This is the repo list (should be undefined)
        this.state = {
            repos: ['Holla', 'Dragonistas']
        }

        this.getRepos = this.getRepos.bind(this)
    }

    // Method to get REPOS
    getRepos() {

        // Real function

        // fetch('https://api.github.com/users/renabil/repos?sort=recent&per_page=1000')
        //     .then(response => response.json())
        //     .then(json => {
        //     })

        // Fake function
        this.setState({
            repos: ['Holla', 'Dragonistas']
        })
    }

    render() {

        // Return Repos as I cant just return <Repo /> because I need to iterate over this.state.repos
        let returnRepos = this.state.repos.map((repo) => {
            return <Repo repo={repo} />
        })
        
        // Return returnRepos
        return(
            returnRepos
        )
    }
}