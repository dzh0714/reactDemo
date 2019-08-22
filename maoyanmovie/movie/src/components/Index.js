import React, { Component } from "react";
import { BrowserRouter as Router, Link, Route, Redirect, Switch } from "react-router-dom";
import Home from "./Home"
import Search from "./Search"
import Detail from "./Detail"
import {connect} from "react-redux"
import axios from "axios"

class Index extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    
                    <Route path="/home"
                        render={(props) => {
                            return <Home history={props.history}></Home>
                        }}
                    ></Route>

                    <Route path="/search"
                        render={(props) => {
                            return <Search history={props.history}></Search>
                        }}
                    ></Route>

                    <Route path="/detail/:id"
                        render={(props) => {
                            return <Detail history={props.history}></Detail>
                        }}
                    ></Route>
                    <Redirect from="/" to="/home" />
                </Switch>
            </Router>
        )
    }
    componentDidMount(){
            this.props.getData()
    }
    
}

let IndexmapStateToProps=(state)=>{
    return{

    }
}
let getList=(next)=>{
    axios.get("/data.json").then((res) => {
      let data=res.data.movieList
      next({type:"ADD_DATA",data})
    })
   
}

let IndexmapDispatchToProps = (dispatch) => {
    return {
        getData(){
            dispatch(getList)
        }
    }
}

export default connect(IndexmapStateToProps, IndexmapDispatchToProps,)(Index)

