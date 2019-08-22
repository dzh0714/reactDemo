import React, { Component } from "react";

import DataSource from "../db/DataSource";

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: DataSource.getComments()
        }
        this.addItem = this.addItem.bind(this);
        this.handle = this.handle.bind(this)
    }
    render(){
        return(
            <div>
                <input type="text" ref="input"/>
                <button onClick={this.addItem}>添加数据</button>
                <ul>
                    {
                        this.state.list.map((item,i)=>{
                            return <li key={i}>{item.msg}</li>
                        })
                    }
                </ul>
            </div>
        )
    }
    addItem(){
        DataSource.addComment({id:Date.now(),msg:this.refs.input.value})
        this.refs.input.value="";
    }
    componentDisMount(){
        DataSource.addChangeListener(this.handle);
    }
    handle(){
        this.setState({
            list:DataSource.getComments()
        })
    }
    componentWillMount(){
        DataSource.removeChangeListener(this.handle);
    }

}

export default App