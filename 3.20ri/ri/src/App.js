import React, { Component } from 'react';
import Child from "./components/child"
// import CommentList from "./components/CommentList"
import './App.css';

class App extends Component {

    // constructor(props) {
    //     super()
      
    // }

    // render(){
    //   return(
    //     <div className="App">
    //       <CommentList/>
    //     </div>
    //   )
    // }



    constructor(props){
      super()
      
    }
    render() {
      return (
        <div className="App">
          <h2 onClick={this.pick}></h2>
          <button>选择你要的数据</button>
          
          <Child />
        </div>
      );
    }
    pick(){

    }
}
export default App;