import React, { Component } from 'react'
import Gooditem from './gooditem'
export class shopItem extends Component {
  render() {
      let { data } = this.props
    return (
      <div>
        {
           data.common&&data.common.map((item,index)=><Gooditem  key={index} data={data} shopindex={index} shopitem={item}></Gooditem>)
        }
      </div>
    )
  }
}

export default shopItem
