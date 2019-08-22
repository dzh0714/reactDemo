import React, { Component } from "react";

import { BrowserRouter as Router, NavLink } from "react-router-dom";

export default class Play extends Component{
    render(){
        return(
            <div>playPage</div>
        )
    }
    componentDidMount(){
        console.log(this.props.location.state)
    }
}