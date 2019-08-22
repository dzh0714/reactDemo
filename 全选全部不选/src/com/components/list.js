import React, { Component } from 'react'
import Reducr from './reducr'
import CheckBox from './checked'
export class list extends Component {
  render() {
      let {gooditem , shopindex , goodindex} = this.props
    return (
      <div>
          <li><CheckBox checked={gooditem.goodsState} shopindex={shopindex} goodindex={goodindex}/>{gooditem.name}</li>
          <li>{gooditem.price}</li>
          <Reducr num={gooditem.num}  shopindex={ shopindex }  goodindex={ goodindex}/>
      </div>
    )
  }
}

export default list
