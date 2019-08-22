import React, { Component } from "react";
import "./style/zixuan.css"
import { Link } from "react-router-dom";
import { connect } from "react-redux"


class Zixuan extends Component {
    render() {
        return (
            <section>
                <header>
                    <span>...</span>
                    <span>自选</span>
                    <span><Link to="/search" style={{ color: 'white' }}>搜索</Link></span>
                </header>
                <nav>
                    <span>编辑</span>
                    <span>最新</span>
                    <span>涨幅</span>
                    <span>涨跌</span>
                </nav>
                {
                    this.props.list.length ? this.props.list.map((item, i) => {
                        return <p key={i}>{item.name}</p>
                    }) : <div className="btn">
                            <Link to="/search"><button>+</button></Link>
                            <p>暂无股票 点击添加</p>
                        </div>
                }
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.list
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Zixuan)
