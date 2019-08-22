import React, { Component } from 'react';
import Watch from "../watch"

let watch=new Watch();
class Child1 extends Component {
    componentDidMount() {
        
    }
    constructor(props){
        super(props)
        this.clicks=this.clicks.bind(this);
    }
    render() {
        return (
            <div className="child1">
                    <button onClick={this.clicks}></button>
            </div>
        );
    }
    clicks(){
        watch.on("resp","呵呵")
    }

}

export default Child1;
