import React, { Component } from "react";
import PropTypes from "prop-types"

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list :[{
                con: "第一条数据"
            }, {
                con: "第二条数据"
            }, {
                con: "第三条数据"
            }, {
                con: "第四条数据"
            }]
        }
    }
    render() {
        return (
            <div className="child">
                {   
                    this.state.list.map((item, i) => {
                        return <p key={i}>{item.con}</p>
                    })
                }
            </div>
        )
    }
    componentDidMount(){
        
        
    }
}
Child.propTypes={
    status:PropTypes.string
}

export default Child