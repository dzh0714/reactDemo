import React, { Component } from 'react';
import './App.css';
import Child1 from "./components/Child1";
import Child2 from "./components/Child2";
import PropTypes from "prop-types"

class App extends Component {

  render() {
    return (
      <div className="App">
        {/* <Child1 />
        <Child2 /> */}
        <Child3 msg={"jhuu"} />
      </div>
    );
  }
}

class Child3 extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div >{this.props.msg}</div>
    )
  }
}
Child3.propTypes = {
  msg:PropTypes.string
}



export default App;
