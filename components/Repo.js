// Component to render out a Repo

class Repo extends React.Component{
    render(){

        // for the sake of simplicity, let the prop repo become a variable
        let repo =  this.props.repo

        let renderGithubPages;
        let repodate;

        repodate = new Date(repo.created_at).toDateString().toLocaleUpperCase().slice(4)

        
        return(
            <div className='repo'>
                <div className='container'>
                    <h1>{repo.name}</h1>
                    <p>{repo.description}</p>
                    <p className='repodate'>CREATED ON {repodate}</p>
                    <a className='repoLink' href={repo.html_url}>Repository</a>

                    {/* Conditional Rendering */}
                    {/* format: condition ? conditionMet : conditionNotMet */}
                    {repo.has_pages ? <a className='pageLink' href={`https://renabil.github.io/` + repo.name}>Page</a> : <a></a>}
                </div>
            </div>
        )
    }
}