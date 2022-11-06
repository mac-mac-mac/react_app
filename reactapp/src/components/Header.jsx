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
            <header className={`App-header ${this.state.theme}`}>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        )
    }
}

export default Header