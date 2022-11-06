import React from "react";
import MainBody from "./MainBody";

class Header extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            count: 0, 
            theme: window.matchMedia('prefers-color-scheme: dark').matches ? "dark" : "light",
            name: ""
        }
    }

    //lifecycle methods

    render(){
        const { linkText, linkUrl } = this.props
        const name = this.state.name
        return(
            <header className={`App-header ${this.state.theme}`}>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a className="App-link" href={linkUrl} target="_blank" rel="noopener noreferrer">
                    {linkText}
                </a>
                <div>
                    <h3> Your stateful name is: <i>{name}</i></h3>
                    <input type="text" value={name} onChange={(e) => this.setState({name : e.target.value})}/>
                </div>
                <span>
                    You have clicked on the button {this.state.count} times!
                </span>
                <button onClick={() => this.setState({ count : this.state.count + 1})}>
                    Increment Count
                </button>
                <MainBody />
            </header>
        )
    }
}

export default Header