import React, { Component } from "react"

class Child extends Component {
    constructor(props){
        super();
    }
    render() {
        const {
            chuan
        } = this.props;
        return (
            <div>
                <p>输入用户名<input type="text" placeholder="用户名" ref="name"/>  </p>
                <p>输入密码 <input type="text" placeholder="密码" ref="pwd"/> </p>
                <button onClick={
                    ()=>{
                        let name=this.refs.name.value;
                        let pwd=this.refs.pwd.value;
                        chuan(name,pwd)
                    }
                }>提交</button>
            
            </div>
        )
    }
   
}

export default Child