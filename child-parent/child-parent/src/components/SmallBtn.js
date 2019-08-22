import React, { Component } from 'react';
import "./SmallBtn.css"

class SmallBtn extends Component {
    constructor(props){
        super()
       
    }
    render() {
        return (
          
                <span className="smallTag">{this.props.name}</span>
           
        );
    }
}

export default SmallBtn;
