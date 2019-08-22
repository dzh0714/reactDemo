import React, { Component } from 'react'
import { connect } from 'react-redux'
import { CHECKED } from '../../store/reducer/storeType'
export class checked extends Component {
  render() {
    let { checked,shopindex,goodindex,checkAll } = this.props
    return (
      <input type="checkbox" checked={checked} onChange={()=>{checkAll({shopindex,goodindex,checked:!checked})}} />
    )
  }
}
let initMapStateToProps=(state)=>{
  return {

  }
}
let initMapDispatchToProps=(dispatch)=>{
  return {
    checkAll(obj){
      let action={
        type:CHECKED,
        ...obj
      }
      dispatch(action)
    }
  }
}

export default connect(initMapStateToProps,initMapDispatchToProps)(checked)
