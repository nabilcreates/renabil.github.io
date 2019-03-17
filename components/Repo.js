// Component to render out a Repo

class Repo extends React.Component{
    render(){

        // Access the props using this.props
        return(
            <div>
                <h1>{this.props.repo}</h1>
                <p>https://fakegit.git/{this.props.repo}</p>
            </div>
        )
    }
}