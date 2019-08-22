import React, { Component } from "react";

class Father extends Component {
    constructor(props) {
        super(props)
        console.log("constructor")
    }
    render() {
         console.log("render")
        return (
           <div>div</div>
        )
    }
    componentWillMount() {
        console.log("componentWillMount")
    }
    componentDidMount(){
        console.log("componentDidMount")
    }
}

class Son extends Component {

}

export default Father;