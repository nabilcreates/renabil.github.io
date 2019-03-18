class Header extends React.Component{

    // ALLOWS THE CODE TO UPDATE OR REMOUNT EVERY SECOND
    // componentDidMount() {
    //     this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    // }

    // componentWillUnmount() {
    //   clearInterval(this.interval);
    // }

    render(){
        let date = new Date().toLocaleTimeString()
    
        return(
            <div className='header'>
                <div className='container'>
                    
                    <div className='top-header'>

                        <div className='top-top-header'>
                            <img className='profilepic' src='./static/profilepic.jpg'></img>
                        </div>
                    
                        <div className='top-center-header'>

                            <h2>"RE"NABIL</h2>

                            <p>PROFILE IS {new Date().getFullYear() - new Date('2018-10-27T05:30:28Z').getFullYear()} YEAR(S) OLD</p>
                            <p>TOTAL OF {this.props.lengthOfRepos} REPOSITORIES</p>

                            <div className='linkButtons'>

                                <a href='https://github.com/renabil'><i className="fa fa-github linkicon"></i></a>

                                <a href='https://instagram.com/nab1lll'><i className="fa fa-instagram linkicon"></i></a>

                                <a href='https://renabil.github.io'><i className="fa fa-pencil-square linkicon"></i></a>
                            
                            </div>
                        </div>
                        
                    </div>

                    
                </div>
        
            </div>
        )
    }
}