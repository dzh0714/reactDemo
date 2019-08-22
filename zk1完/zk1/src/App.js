import React, { Component } from 'react';
import './App.css';
// import RightList from "./components/RightList";
import classify from "./mock/classify.json";
import data from "./mock/data.json"


class App extends Component {
  constructor() {
    super()
    this.state = {
      color: 0
    }
  }
  render() {
    return (

      <div className="App">
        <ul className="left">
          {
            classify.map((item, i) => {
              return <li className={this.state.color === i ? "color" : null} key={i}
                onClick={() => {
                  this.setState({
                    color: i
                  })
                }} >{item.tit}</li>
            })
          }
        </ul>

        <div className="rightList">
          {
            data.filter(item => { return item.type === this.state.color }).map((item, i) => {
              return <dl key={i} onClick={this.cc.bind(this, item)}>
                <dt>
                  <img src={item.img} alt="" />
                </dt>
                <dd>{item.alt}</dd>
              </dl>
            })
          }
        </div>
      </div>
    );
  }

  cc(item) {
    alert(item.alt)
  }

}

export default App;


