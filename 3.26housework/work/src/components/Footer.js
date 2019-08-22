import "../App.css"

import {NavLink, Route, BrowserRouter as Router} from "react-router-dom"
import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <footer className="footer">
            <NavLink to="/add">添加账单</NavLink>
            <NavLink to="/look">查看账单</NavLink>
      </footer>
    );
  }
}

export default App;
