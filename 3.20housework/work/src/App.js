import React, { Component } from 'react';
import './App.css';
import Count from "./components/Count"
import Phone from "./components/Phone"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <span><Link to="/count">账号密码登录</Link></span>
            <span><Link to="/phone">手机验证登录</Link></span>
          </header>
          <section>
            {/* <Count></Count> */}
            {/* <Phone></Phone> */}
            <Route path="/count" component={Count}></Route>
            <Route path="/phone" component={Phone}></Route>
          </section>

          <footer>
            <button className="signUp">登录</button>
            <button className="signLogin">注册</button>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
