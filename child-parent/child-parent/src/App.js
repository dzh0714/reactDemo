import React, { Component } from 'react';
import Button from './components/button'
import Show from "./components/Show"
import {findDOMNode} from "react-dom"
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      name:null
    }
  }
  jisuan=()=>{
    this.setState({
        name:this.state.name
    })
  }
  render() {
    return (
      // <div className="App" ref={(aaa)=>{
      //     console.log(aaa)
      // }} >
      //   <Show />
      //   <Button />
      // </div>
      <div className="App" >
        <Show />
        <Button />
      </div>
    )
  }

  componentDidMount(){
    console.log(findDOMNode(this));
    
    // console.log(this.refs.aaa)
  }
}

export default App;
