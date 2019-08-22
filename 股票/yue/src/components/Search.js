import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./style/search.css";
import data from '../data.json';
import { connect } from "react-redux";

class Search extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            val: ''
        };
    };
    
    render() {
        return (
            <section>
                <header>
                    <span className="back"><Link to="/"> &lt;</Link></span>
                    <span>股票添加</span>
                    <span>.</span>
                </header>
                <div className="iptwrap">
                    <input type="text" className="ipt" placeholder="请输入股票代码/简拼" value={this.state.val} onChange={(e) => this.input(e)} />
                </div>
                <ul>
                    {
                        this.state.list && this.state.list.map((item, i) => {
                            return <li key={i}>
                                <span>{item.name}</span>
                                <span>{item.serail}</span>
                                <span onClick={this.isChoose.bind(this, item)}>{item.flag ? item.btn2 : item.btn1}</span>
                            </li>
                        })
                    }
                </ul>
            </section>
        )
    }
    input = (ev) => {
        let value = ev.target.value;
        this.setState({
            val: value
        })
        if (value) {
            this.setState({
                list: data.filter((item, i) => {
                    return item.name.match(value) != null
                })
            })
        } else {
            this.setState({
                list: []
            })
        }
    }
    isChoose(item) {
        this.props.getData(item)
    }
}
let SearchmapStateToProps = (state) => {
    return {}
}
let SearchmapDispatchToProps = (dispatch) => {
    return {
        getData(item) {

            dispatch({ type: "ADD_MSG", item })
        }
    }
}

export default connect(SearchmapStateToProps, SearchmapDispatchToProps)(Search)
