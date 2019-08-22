import React, { Component } from "react";
import "./style/billStyle.css"
import { connect } from "react-redux";


class Bill extends Component {
    constructor(props) {
        super(props);
        this.state = {
            accounts: "请选择",
            money: '',
            txt: ''
        }
    }
    render() {
        let account = this.state.accounts
        return (
            <section className="billwrap">
                <div>
                    <p>选择账目
                        <select value={this.state.accounts} onChange={(e) => { this.selectAccount(e) }}>
                            <option value="请选择" disabled>请选择</option>
                            <option value="工资">工资</option>
                            <option value="租房">租房</option>
                            <option value="通勤">通勤</option>
                            <option value="吃饭">吃饭</option>
                        </select>
                    </p>
                </div>
                <div>
                    填入费用<input type="number" name="" id="" value={this.state.money} onChange={(e) => { this.money(e) }} />
                </div>

                <div>
                    <textarea cols="50" rows="10" placeholder="填写备注" value={this.state.txt} onChange={(e) => { this.txt(e) }}></textarea>
                </div>
                <div className="btns">
                    <button className="save" onClick={this.save.bind(this)}>保存</button>
                    <button className="cancel">取消</button>
                </div>
            </section>
        )
    }

    selectAccount(e) {
        console.log(e.target.value)
        this.setState({
            accounts: e.target.value
        })
    }
    money(e) {
        console.log(e.target.value)
        this.setState({
            money: e.target.value
        })
    }

    txt(e) {
        console.log(e.target.value)
        this.setState({
            txt: e.target.value
        })
    }
    save() {
        this.props.add(this.state.accounts,this.state.money,this.state.txt)
    }

}

let initMapStateToProps = (state) => {
    return {
        
    }
}
let initMapDispatchToProps = (dispatch) => {
    return {
        add(accounts,money,txt) {
            dispatch({ type: "ADD_ACCOUNT", account:accounts,money:money,txt:txt })
        }
    }
}


export default connect(initMapStateToProps, initMapDispatchToProps)(Bill)