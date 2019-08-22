import React, { Component } from "react"
import Child1 from "./components1/child1";
import Child2 from "./components1/child2"
import "./App1.css"

class App1 extends Component{
    constructor(props){
        super()
    }
    render(){
        return (
            <div className="App1">
                <Child1 />
                <Child2 />
            </div>
        )
    }
}

export default App1