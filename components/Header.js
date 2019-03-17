class Header extends React.Component{

    // ALLOWS THE CODE TO UPDATE OR REMOUNT EVERY SECOND
    componentDidMount() {
        this.interval = setInterval(() => this.setState({ time: Date.now() }), 1000);
    }

    componentWillUnmount() {
      clearInterval(this.interval);
    }

    render(){
        let date = new Date().toLocaleTimeString()
    
        return(
            <div className='header'>
                <div className='container'>
                    <p>{date}</p>
                    <h1>NABIL</h1>

                    <div className='linkButtons'>
                    
                    <a href='https://github.com/renabil'><i className="fa fa-github linkicon" ariaHidden='true'></i></a>

                    <a href='https://instagram.com/nab1lll'><i className="fa fa-instagram linkicon" ariaHidden='true'></i></a>

                    <a href='https://renabil.github.io'><i className="fa fa-pencil-square linkicon" ariaHidden='true'></i></a>
                    
                    </div>
                    
                </div>
        
            </div>
        )
    }
}