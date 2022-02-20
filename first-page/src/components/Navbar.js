import React from "react"
import reactLogo from "../styles/reactjs-icon.png"
function Navbar() {
    return(
        <nav>
            <div id="head-left">
                <img src={reactLogo} alt="react"></img>
                <h3>ReactFacts</h3>
            </div>
            <div id="head-right">
                <h4>React Course - Project 1</h4>
            </div>
        </nav>
    )
}

export default Navbar