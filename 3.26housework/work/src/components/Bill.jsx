import "../App.css"

import {NavLink, Route, BrowserRouter as Router} from "react-router-dom"
import React, { Component } from 'react';

import RouterConfig from "../routers/RouterConfig"
import RouterView from "../routers/RouterView"

class Bill extends Component {
  render() {
    return (
     
        <Router>
          <div className="Bill">
            <RouterView data={RouterConfig.routes}></RouterView>
          
          </div>
          
        </Router>
    
    );
  }
}

export default Bill;