import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";

class Index extends Component {
    render() {
        return (
                <nav>
                    <div style={{ background: "blue" }}>顺序练习</div>
                    <div style={{ background: "orange" }}><Link to="/moni">模拟考试</Link></div>
                    <div style={{ background: "green" }}>随机练习</div>
                    <div style={{ background: "pink" }}>章节练习</div>
                    <div style={{ background: "blue" }}>错题练习</div>
                    <div style={{ background: "green" }}>收藏练习</div>
                </nav>
                
        )
    }
}

export default Index