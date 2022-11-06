import React from "react";

class Header extends React.Component{

    constructor(props){
        super(props)
        this.state= {
            theme: window.matchMedia('prefers-color-scheme: dark').matches ? "dark" : "light"
        }
    }

    render(){
        return(
            <header className={`App-header ${this.state.theme}`} id="home">
                <h1> Mac Barron </h1>
                <code> Front End Web Developer </code>
                <h4> Columbus, GA </h4>
            </header>
        )
    }
}

export default Header