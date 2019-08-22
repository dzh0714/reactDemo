import React, { Component } from 'react';
import Watch from './watch'
let watch=new Watch()
class Child1 extends Component {
  constructor(props) {
    super(props)
    this.binds=this.binds.bind(this)
  }
  render() {
   
    return (
      <div className="child1">
        <button onClick={this.binds} ref="aaa">点我</button>
      </div>
    );
  }
  binds(){
    //发布
    watch.emit("sodl","hehe");
    console.log(this.refs.aaa);
    
  }
 

}
class Child2 extends Component {

  constructor(props) {
    super(props);
   this.state={
     msg:""
   }
   //接受
    watch.on("sodl",(msg)=>{
      this.setState({
        msg:msg
      })
    })
  }
  render() {
    return (
      <div className="child2">
          <p>{this.state.msg}</p>
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Child1/>
        <Child2/>

      </div>
    );
  }
}

export default App;
