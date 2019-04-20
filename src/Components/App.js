import React from 'react';
import Repo from './Repo.js'
import Header from './Header.js'

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            data: false,
        }
    }
    
    componentDidMount(){
        this.getRepos()
    }

    getRepos(){
        fetch('https://api.github.com/users/renabil/repos?sort=updated&per_page=1000')
            .then(response => response.json())
            .then(json => {
                this.setState({
                    data: json
                })
            })
    }
    
    render(){
        return(
            <div>

                <Header />

                <div id='repo-wrapper'>
                    {this.state.data !== false
                    ? this.state.data.map(d => {
                        console.log(d)
                        return(
                            <Repo repo={d} />
                        )
                    })
                    : null}
                </div>
                
            </div>
        )
    }
}

export default App