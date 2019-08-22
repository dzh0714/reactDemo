import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import './App.css';
import Home from "./components/home"
import Mine from "./components/mine"

class App extends Component {
    render() {
        return (<div className="App" >
            < Router >
                <div >
                    <Link to="/home" > 首页 </Link> <Link to="/mine" > 我的 </Link>
                    <Route path="/home" component={Home} /> <Route path="/mine" component={Mine} />
                </div>
            </Router>
        </div>
        );
    }
}

export default App;