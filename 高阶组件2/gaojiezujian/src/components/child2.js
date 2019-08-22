import React, { Component } from 'react';
import Watch from "../watch"


let watch=new Watch();

class Child2 extends Component {
    componentDidMount() {

    }
    constructor(props){
        super(props);
        console.log(watch.emit("resp"))
    }
    render() {
        return (
            <div className="child2">

            </div>
        );
    }
}

export default Child2;
