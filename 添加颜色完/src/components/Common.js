import "./Common.css";

import React, { Component } from "react";

import store from "../store/store";

class Child extends Component {
  constructor(props) {
    super(props);
    // this.state={
    //   value:"",
    //   color:""
    // }
  }
  render() {
    return (
      <div className="Child">
        <span>Name</span>
        <p>
          <input type="text" placeholder="John Doe" ref="msg" />
        </p>
        <span>Favourite color</span>
        <p>
          <input type="text" placeholder="#2e2e2e" ref="color" />
        </p>
        <button className="btns" onClick={this.checkClick.bind(this)}>
          ADD attendee
        </button>
      </div>
    );
  }
  checkClick() {
    let msg = this.refs.msg.value;
    let color = this.refs.color.value;
    store.dispatch({ type: "ADD-MSG", msg: msg, color: color });
    //store.dispatch({type:"ADD-COLOR",color:color})
    this.refs.msg.value = "";
    this.refs.color.value = "";
  }
  // colorClick(color,event){
  //   if(event.keyCode===13){
  //     store.dispatch({type:"ADD-COLOR",color:color})
  //   }
  // }
}
class Child1 extends Component {
  constructor(props) {
    super(props);
    store.subscribe(() => {
      this.setState({});
    });
  }
  render() {
    let list = store.getState().list;

    console.log(list);
    return (
      <div className="Child1" ref="child">
        {list.map((item, index) => {
          return (
            <div
              className="box"
              ref="box"
              key={index}
              style={{ background: item.color }}
            >
              <div className="div">
                <div className="div-top">
                  <h1>Hello</h1>
                  <p>my name is</p>
                </div>
                <div className="div-bottom">{item.msg}</div>
              </div>
              <button onClick={() => {
                this.removeClick(index)
              }}>删除</button>
            </div>
          );
        })}
      </div>
    );
  }
  removeClick(index) {

    store.dispatch({ type: "ENpoty", index: index })
  }
}
class Common extends Component {
  render() {
    return (
      <div className="Common">
        <header className="header">Attendes</header>
        <main className="main">
          <Child />
          <Child1 />
        </main>
      </div>
    );
  }
}

export default Common;
