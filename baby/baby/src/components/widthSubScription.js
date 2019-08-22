import React, { Component } from "react"
import DataSource from "../db/DataSource"

export default function widthSubScription(WrapperComponent, fn) {
    return class extends Component {
        constructor(props) {
            super(props)
            this.state = {
                data: fn(DataSource)
            }
            this.handle = this.handle.bind(this)
        }
        render() {
            return (
                <WrapperComponent data={this.state.data} {...this.props}/>
            )
        }
        handle() {
            this.setState({
                data: fn(DataSource)
            })
        }
        componentDidMount() {
            DataSource.addChangeListener(this.handle);
        }
        componentWillUnmount() {
            DataSource.removeChangeListener(this.handle)
        }
    }
}



