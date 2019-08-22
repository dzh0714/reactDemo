import React, { Component } from 'react';
import './App.css';
import Index from "./store1/index"
// import Index2 from "./store2/index2"


class App extends Component {
  render() {
    return (
      <div className="App">
          <Index/>
        {/* <Index2 /> */}

      </div>
    );
  }
}

export default App;
