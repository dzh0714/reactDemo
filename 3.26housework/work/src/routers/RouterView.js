import {NavLink, Redirect, Route, BrowserRouter as Router, Switch} from "react-router-dom"
import React, { Component } from 'react';

class Shop extends Component {
 
    render() {
      let routes=this.props.data;
      let routerArr=routes.filter((item,index)=>item.redirect)
      let routerDom=routerArr.map((item,i)=>{
        return <Redirect key={i} from={item.path} to={item.redirect}/>
      })
      routes=routes.filter((item)=>{
        return !item.redirect
      })
      
        return (
            <Switch>
              {
                routes.map((item,index)=>{
                  //console.log(item)
                  return <Route key={index}  path={item.path}  render={(props)=>{
                    return <item.component  {...props}></item.component>
                  }}>
                  
                  
                  </Route>
                }).concat(routerDom)
              }
            
            </Switch>
 
        );
    }
}

export default Shop;