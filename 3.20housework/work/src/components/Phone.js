import React, { Component } from "react"

class Phone extends Component {
    constructor(props) {
        super()
        this.state = {
            count: 0,
            isClick: true
        }
        this.init = this.init.bind(this)

    }
    render() {
        return (
            <div className="phone">
                <p><input type="text" placeholder="请输入手机号" ref="phoneNum" /></p>
                <p><input type="text" placeholder="请输入验证码" /> <button className="yan" onClick={this.init} disabled={this.isClick}>
                    {this.state.count <= 0 ? "获取验证码" : this.state.count}
                </button></p>
            </div>
        )
    }
    yan() {
        let phoneNum = this.refs.phoneNum.value;
        if (phoneNum.trim().length === 2 && !isNaN(phoneNum)) {

            let num = 5
            let timer = setInterval(() => {
                // this.yan.bind(this)
                num--;
                this.setState({
                    count: num,
                    isClick: false
                })
                if (num <= 0) {
                    clearInterval(timer)
                    this.setState({
                        isClick: true
                    })
                }
            }, 1000);

        } else {
            alert("格式不对")
        }
    }

    init() {
        // let {sendMsg}=this.props
        let { isClick } = this.state;
        if (!isClick) {
            return
        }
        this.yan()
    }

}

export default Phone