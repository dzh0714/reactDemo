import React, { Component } from "react"
import "./css/header.css";


class Header extends Component {
    constructor(props) {
        super()
    }
    render(){
        return(
            <div className="header">
                <input type="text"/>
            </div>
        )
    }
}

export default Header