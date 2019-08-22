import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class Child extends Component {
  render() {
    return (
      <div className="child">
            <ul>
                {
                    this.props.list.map((item,i)=>{
                        return <li key={i}>
                            <Link to={this.props.path +item.path}>{item.subNavTitle}</Link>
                        </li>
                    })
                }
            </ul>
      </div>
    );
  }
}

export default Child;
