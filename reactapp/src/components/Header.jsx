import React from "react";

class Header extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            count: 0, 
            theme: "dark" }
    }

    //lifecycle methods

    render(){
        const { linkText, linkUrl } = this.props
        return(
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href={linkUrl} target="_blank" rel="noopener noreferrer">
                    {linkText}
                </a>
                <span>
                    You have clicked on the button {this.state.count} times!
                </span>
                <button onClick={() => this.setState({ count : this.state.count + 1})}>
                    Increment Count
                </button>
            </header>
        )
    }
}

export default Header