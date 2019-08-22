import './App.css';

import React, { Component } from 'react';

import Bill from "./components/Bill.jsx"
import {Provider} from "react-redux"
import logo from './logo.svg';
import store from "./store/store"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Bill></Bill>
        </Provider>
      </div>
    );
  }
}

export default App;
