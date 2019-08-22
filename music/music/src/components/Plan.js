import React, { Component } from "react"
import Btns from "./Btns";

class Plan extends Component {
    constructor(props) {
        super()
    }
    render() {
        let { bankTwo}=this.props
        return (
            <ul className={'plan'}>
                {bankTwo.map((item, i) => {
                    return <Btns key={i} {...item}>
                        
                    </Btns>
                })}
            </ul>
        )
    }
}

export default Plan