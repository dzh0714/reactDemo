import React, { Component } from 'react';
import { BrowserRouter as Router, NavLink } from "react-router-dom"
import './App.css';
import RouterView from "./router/routerView"
import routerConfig from "./router/routerConfig"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">

          <RouterView data={routerConfig.routes}></RouterView>

          <footer>
            <NavLink to="/look">宝宝看</NavLink>
            <NavLink to="/listen">宝宝听</NavLink>
            <NavLink to="/mine">我的</NavLink>
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;
