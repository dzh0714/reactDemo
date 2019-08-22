import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink } from "react-router-dom";
import RouterView from "./router/routerView";
import routerConfig from "./router/routerConfig";
import { Provider } from "react-redux";
import { store, perSist } from "./store/store";
import { PersistGate } from 'redux-persist/es/integration/react'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Provider store={store}>
            <PersistGate persistor={perSist}>
              <RouterView data={routerConfig.routes}></RouterView>
              <footer>
                <span>首页</span>
                <span>行情</span>
                <NavLink to="/">自选</NavLink>
                <span>交易</span>
                <span>资讯</span>
              </footer>
            </PersistGate>
          </Provider>

        </div>
      </Router>
    );
  }
}

export default App;
