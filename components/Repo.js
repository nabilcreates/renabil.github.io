// Component to render out a Repo

class Repo extends React.Component{
    render(){

        // Console log the repo prop gotten
        console.log(this.props.repo)

        // for the sake of simplicity, let the prop repo become a variable
        let repo =  this.props.repo

        return(
            <div>
                <h1>{repo.name}</h1>
                <a href={repo.html_url}>Repository</a>
            </div>
        )
    }
}