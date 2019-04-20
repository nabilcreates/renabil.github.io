import React from 'react';

class Repo extends React.Component{
    render(){
        let repo = this.props.repo

        return(
            <div id='repo'>

                <div id='container' >

                {repo.license !== null ? <h6>{repo.license.name}</h6> : <h6>Unlicensed</h6>}

                <h1>{repo.name}</h1>
                    <p>{repo.description}</p>
                    <a href={repo.html_url}>Repository</a>

                    {repo.has_pages ? <a href={`https://renabil.github.io/${repo.name}`}>Page</a> : null}
                </div>
                
            </div>
        )
    }
}

export default Repo