import React, { Component } from 'react'
import axios from 'axios';

export default function widthScription(WrapperComponent) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                list: null
            }
        }
        componentDidMount() {
            axios.get('/data.json').then((res) => {
                this.setState({
                    list: res.data
                })
            })
        }
        render() {
            const str = {
                a: "我是高阶函数",
                list: this.state.list
            }
            return <WrapperComponent {...str}>
                    <h1>H1哈哈</h1>
                    <h4>H2呵呵</h4>
                </WrapperComponent>
        }
    }
}