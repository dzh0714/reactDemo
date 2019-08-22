import React, { Component } from 'react'
import {connect} from 'react-redux'
import { CLICK_ADD_RED } from '../../store/reducer/storeType'
export class reducr extends Component {
  render() {
    let { num } = this.props
    return (
      <div className="reducr">
           <p onClick={this.click.bind(this,'add')}>+</p>
           <p>{num}</p>
           <p onClick={this.click.bind(this,'red')}>-</p>
      </div>
    )
  }
  click=(type)=>{
      let {shopindex , goodindex,num,onchange} = this.props
      if(type=='add'){
            num = num + 1
      }else {
          if(num <= 1){
            return 
          }else{
              num = num - 1
          }
      }
      onchange({
        shopindex , goodindex,num
      })
  }
}
let initMapStaetToProps=(state)=>{
    return {

    }
}
let initMapDispatchToProps=(dispatch)=>{
    return {
        onchange(options){
            dispatch({type:CLICK_ADD_RED,...options})
        }
    }
}
export default connect(initMapStaetToProps,initMapDispatchToProps)(reducr)
