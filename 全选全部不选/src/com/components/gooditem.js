import React, { Component } from 'react'
import ChexkBox from './checked'
import List from './list' 
// import Reducr from './reducr'
export class gooditem extends Component {
  render() {
      let { shopitem ,shopindex} = this.props
    return (
      <div>
          <h3>
            <ChexkBox checked={shopitem.shopState} shopindex={shopindex} />
            <span>{shopitem.shopname}</span>
          </h3>
          {
            shopitem.goods.map((item,index)=><List key={index} gooditem={item} shopindex={shopindex} goodindex={index}/>)
          }
      </div>
    )
  }
}

export default gooditem
