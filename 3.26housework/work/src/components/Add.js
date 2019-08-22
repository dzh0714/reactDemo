import "../App.css"
import "./Add.css"

import {NavLink, Route, BroeserRouter as Router} from "react-router-dom"
import React, { Component } from 'react';

import Footer from "./Footer"
import {connect} from "react-redux"

class Add extends Component {
  constructor(props) {
    super(props)
    this.state={
      account:"",
      money:"",
      timer:"",
      types:"",
      cont:""
    }
  }
  
  render() {
    let accounts=this.state.account
    let money=this.state.money
    let timer=this.state.timer
    let types=this.state.types
    let cont=this.state.cont
    return (
      <>
      <div className="Add">
        <header className="header">添加账单</header>
        <main className="main">
        
            <div className="account">
               选择账目
              <select value={accounts} onChange={this.accountClick.bind(this)} className="select">
                <option value="请选择" >请选择</option>
                <option value="工资">工资</option>
                <option value="房租">房租</option>
                <option value="车贷">车贷</option>
                <option value="购物">购物</option>
                <option value="娱乐">娱乐</option>
            
            </select>
            </div>
            <div className="div">
              <p>填入费用<input type="text" className="ipt" value={money} onChange={this.money.bind(this)}/>元</p>
            
            </div>
            {/* <div className="center">
              <h1>选择时间</h1>
             <div className="li-ipt">
                <p><input type="text" value={timer} onChange={this.timer.bind(this)}/><span>+</span></p>
                <p><input type="text"/><span>+</span></p>
             
             </div>
           
            </div> */}
            <div className="account">
               选择账目
              <select value={types} onChange={this.type.bind(this)} className="select">
                <option value="请选择" >请选择</option>
                <option value="个人">个人</option>
                <option value="公司">公司</option>
               
            </select>
            </div>
            <textarea name="" id=""className="textarea" value={cont} onChange={this.cont.bind(this)}></textarea>
            <div className="btns">
              <button onClick={this.save.bind(this)}>保存</button> 
              <button>取消</button> 


            </div>
            
        </main>
       
        
         
      </div>
      <Footer></Footer>
      </>
     
    );
  }
  save(){
    this.props.addAccount(this.state.account,this.state.money,this.state.timer,this.state.types,this.state.cont)
    this.setState({
      account:"",
      money:"",
      timer:"",
      types:"",
      cont:""
    })
  }
  accountClick(ev){
    this.setState({
      account:ev.target.value,
       
    })
  }
  money(ev){
    this.setState({
      money:ev.target.value
    })
   
  }
  timer(ev){
    this.setState({
      timer:ev.target.value
    })
    
  }
  type(ev){
    this.setState({
      types:ev.target.value
    })
  
  }
  cont(ev){
    this.setState({
      cont:ev.target.value
    })
   
  }
}
let AddmapStateToProps=(state)=>{
  return{
    
  }
}
let AddmapDispatchToProps=(dispatch)=>{
   return{
     addAccount(account,money,timer,types,cont){
       dispatch({type:"ADD_ACCOUNT",account:account,money:money,timer:timer,types:types,cont:cont})
     }
   }


}
export default connect(AddmapStateToProps, AddmapDispatchToProps)(Add);