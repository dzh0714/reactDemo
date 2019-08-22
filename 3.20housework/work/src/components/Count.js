import React, { Component } from "react"

class Count extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className="count">
                <p><input type="text" placeholder="请输入用户名" /></p>
                <p><input type="text" placeholder="请输入密码" /> </p>
                
            </div>
        )
    }
}

export default Count