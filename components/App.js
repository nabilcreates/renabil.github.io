// Component for Main App

class App extends React.Component {

    constructor() {
        super();

        // This is the initial state
        this.state = {
            repos: 'none',
            loadedData: false,
        }

    }

    // This method will run after this component (APP) is displayed on screen
    componentDidMount(){

        // Fetch API Data
        fetch('https://api.github.com/users/renabil/repos?sort=updated&per_page=1000')
            .then(response => response.json())
            .then(json => {

                // Sets state of repos to the api payload and the boolean to true (for later on)
                this.setState({
                    repos: json,
                    loadedData: true
                })
            })
        }
        
        render() {
        
            // let this become a variable for conditional rendering
            let renderRepos;
        
            // Checks the current state and see if it is true
            if(this.state.loadedData){

                // if true set the variable renderRepos to iterate each repo from the state and map them, return as a external element (called Repo) and it accepts a prop called repo which is the individual repo form the state
                renderRepos = this.state.repos.map((repo) => {
                    return <Repo repo={repo} key={repo.id} />
                })
            }

            // finally, render the renderRepos in a div so i can use {}
            return (
                <div>
                    <Header />

                    {/* Conditional Rendering */}
                    {/* If loadedData, then render the renderRepos which is a map of all repos, else render a h1 with the text Loading... inside. */}
                    {this.state.loadedData ? renderRepos : <h1>Loading...</h1>}
                </div>
            )
    }
}