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
                </div>
        
            </div>
        )
    }
}