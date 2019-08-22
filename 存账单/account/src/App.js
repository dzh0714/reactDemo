import React, { Component } from 'react';
import { BrowserRouter as Router,  NavLink } from "react-router-dom"
import './App.css';
import RouterView from "./router/routerView"
import RouterConfig from "./router/routerConfig"


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <RouterView data={RouterConfig.routes} />
          <footer>
            <NavLink to="/bill">添加账单</NavLink>
            <NavLink to="/checkout">检查账单</NavLink>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
