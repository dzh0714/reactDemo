import "../App.css"
import "./Look.css"
import {NavLink, Route, BroeserRouter as Router} from "react-router-dom"
import React, { Component } from 'react';

import Footer from "./Footer"
import {connect} from "react-redux"

class Look extends Component {
  render() {
    return (
      <>
      <div className="Look">
      <header className="header">
        <ul>
          <li>账目</li>
          <li>费用(元)</li>
          <li>日期</li>
          <li>备注</li>
        </ul>
      
      </header>
      <main className="main">
      <ul>
         {
           
          this.props.state.map((item,index)=>{
           return <li key={index}><span>{item.account}</span><span>{item.money}</span><span>{item.timer}</span><span>{item.types}</span><span>{item.cont}</span></li>
          })
        
        
        }
        </ul>
        </main>
      </div>
      <Footer></Footer>
      
      </>
      
    );
  }
}
let LookmapStateToProps=(state)=>{
   return{
     state:state.account

   }
}
let LookmapDispatchToProps=(dispatch)=>{
  return{
    
  }
}
export default connect(LookmapStateToProps, LookmapDispatchToProps)(Look)
