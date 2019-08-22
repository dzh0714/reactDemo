import React, { Component } from "react";
import "./style/checkout.css"
import {connect} from "react-redux"

class Checkout extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <section className="checkoutwrap">
                {
                    this.props.state.map((item,i)=>{
                        return <ul key={i}>
                            <li>{item.account}</li>
                             <li>{item.money}</li>
                            <li>{item.txt}</li>
                        </ul>
                    })
                }
            </section>
        )
    }
}

const mapStateToProps = (state) => {
    return {
       state:state.account
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Checkout)
