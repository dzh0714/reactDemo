import React, { Component } from 'react'
import Child from "./Child"

class Input extends Component {
    constructor(props) {
        super(props)
        this.state = { //定义数据
            name: "lili",
            pwd: "12345"
        }
    }
    render() {
        return (
            <div className="wrap">
                <Child  chuan={this.chuans} />
            </div>
        )
    }
    chuans = (name1, pwd1) => {
        if (this.state.name === name1 && this.state.pwd === pwd1) {
            alert("成功")
        } else {
            alert("失败")
        }
    }
}

export default Input