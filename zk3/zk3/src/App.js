import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import routerConfig from './router/routerConfig';
import RouterView from "./router/routerView";
import { connect, Provider } from "react-redux";
import store from "./store/store";
import axios from "axios";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Provider store={store}>
            <RouterView data={routerConfig.routes}></RouterView>
          </Provider>
        </div>
      </Router>

    );
  }
}

let getAxiosData=(next)=>{
  axios.get("/test.json").then((res)=>{
      console.log(res.data);
      next({type:"ADD_ALL",data:res.data})
  })
}

let AppmapStateToProps = (state) => {
  return {}
}

let AppmapDispatchToProps = (dispatch) => {
  return {
    saveAll() {
      dispatch(getAxiosData)
    }
  }
}


export default connect(AppmapStateToProps, AppmapDispatchToProps)(App)

// export default App;