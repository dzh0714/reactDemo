import React, { Component } from 'react';
import Child1 from "./components/child1"
// import Child2 from "./components/child2"

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "lili"
    }
  }
  render() {
    return (
      <div className="App">
        <button onClick={() => {
          this.setState({
            name: "wowo"
          })
        }}>点击</button>
        <Child1 name={this.state.name} />
      </div>
    );
  }

}

export default App;
