import React, { Component } from "react";
import store from "./store"

class Index extends Component {
    constructor(props) {
        super(props)
        store.subscribe(()=>{
            this.setState({})
        })
    }
    render() {
        let num=store.getState();
        return (
            <div>
                <div>{num}</div>
                <button onClick={this.add.bind(this)} style={{background:"green"}}>加加加</button>
                <button onClick={this.reduce.bind(this)} style={{ background: "orange" }}>减减减</button>
                <button onClick={this.cls.bind(this)} style={{ background: "red" }}>归零</button>

            </div>
        )
    }
    add(){
        store.dispatch({type:"add"})
    }
    reduce() {
        store.dispatch({ type: "reduce" })
    }
    cls() {
        store.dispatch({ type: "cls" })
    }


}
export default Index