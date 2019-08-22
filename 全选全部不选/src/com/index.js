import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import CheckBox from './components/checked'
import List from './components/shoplist'
import {ADD_DATA} from '../store/reducer/storeType'
export class index extends Component {
  constructor(){
    super()
  }
  render() {
    let { content ,pirce,check} = this.props.list
    console.log(this.props)
    return (
      <div className="wrap">
        <header className="header">
            <li><CheckBox checked={check} />全选</li>
        </header>
        <div className="list">
          <List data={content}></List>
        </div>
        <footer className="footer">
            <li>共消费<span>{pirce}</span>元</li>
            <button>结算</button>
        </footer>
      </div>
    )
  }
  componentDidMount(){
    let { getdata } =this.props
    axios.get('/api/list').then(res=>{
        getdata(res.data.data)
    })
  }
}
let initMapStateToProps=(state)=>{
  return {
    list :state.list
  }
}

let initMapDispatchToProps=(dispatch)=>{
  return{
    getdata(data){
      let action ={
        type:ADD_DATA,
        content:data
      }
      dispatch(action)
    }
  }
}
export default connect(initMapStateToProps,initMapDispatchToProps)(index)