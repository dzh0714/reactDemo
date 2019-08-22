import React, { Component } from 'react';
import './App.css';
import Child1 from "./components/child1";
import Child2 from "./components/child2";

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      flag:false
    }
  }
  render() {

    return (
      <div className="App">
        <button onClick={()=>{this.setState({flag:!this.state.flag})}}>点击切换</button>
          {this.state.flag ? <Child1 /> : <Child2 />}
      </div>
    );
  }

}

export default App;

