// Component to render out a Repo

class Repo extends React.Component{
    render(){

        // Console log the repo prop gotten
        console.log(this.props.repo)

        // for the sake of simplicity, let the prop repo become a variable
        let repo =  this.props.repo

        let renderGithubPages;

        if(repo.has_pages){
            renderGithubPages = <a className='pageLink' href={`https://renabil.github.io/` + repo.name}>Page</a>
        }
        
        return(
            <div className='repo'>
                <div className='container'>
                    <h1>{repo.name}</h1>
                    <p>{repo.description}</p>
                    <a className='repoLink' href={repo.html_url}>Repository</a>
                    {renderGithubPages}
                </div>
            </div>
        )
    }
}