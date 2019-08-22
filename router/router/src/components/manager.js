import React, { Component } from "react"
import Child from "./child"

class Manager extends Component {
    render() {
        return (
            <div>
                <Child list={this.props.subNavs} path={this.props.path}/>

               
                {/* <Right></Right> */}
            </div>
        )
    }
}

export default Manager