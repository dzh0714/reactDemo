import React, { Component } from "react";
import "./style/moni.css";

import { connect } from "react-redux";


class Moni extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }
    render() {
        return (
            <div className="moni">
                <header>
                    <span>&lt;</span>
                    <span>科一模拟考试</span>
                    <span>1/100</span>
                </header>
                <section>
                    {
                        

                    }
                </section>
                <footer>
                    <span>上一题</span>
                    <span>点击交卷</span>
                    <span>收藏</span>
                    <span>下一题</span>
                </footer>
            </div>
        )
    }
    choose(answer) {

    }
}

export default Moni