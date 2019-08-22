import React, { Component } from { react };
import store from "./store2"

class Index2 extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="Child">
                <span>Name</span>
                <p>
                    <input type="text" placeholder="Jhon Doe" ref="msg" />
                </p>
                <span>Favourite color</span>
                <p>
                    <input type="text" placeholder="#2e2e2e" ref="color" />
                </p>
                <button className="btns" onClick={this.checkClick.bind(this)}>
                    ADD attendee
                </button>
            </div>
        )
    }
    checkClick() {
        let msg = this.refs.msg.value;
        let color = this.refs.color.value;
        store.dispatch({ type: "ADD-MSG", msg: msg, color: color });
        this.refs.msg.value = "";
        this.refs.color.value = "";
    }
}

class Child1 extends Component {
    constructor(props) {
        super(props)
        store.subscribe(() => {
            this.setState({})
        })
    }
    render() {
        let list = store.getState().list;
        return (
            <div className="Child1" ref="child">
                {
                    list.map((item, i) => {
                        return (
                            <div className="box" ref="box" key={i} style{{ background: item.color }}>
                                <div className="div">
                                    <div>
                                        <h1>Hello</h1>
                                        <p>my name is</p>
                                    </div>
                                </div>
                                <button onClick={this.removeClick.bind(this)}>点击</button>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
    removeClick(){
        let child=this.refs.child;
        let box=this.refs.box;
        child.removeChild(box)
    }
}
class Common extends Component{
    render(){
        return(
            <div>
                <header className="header">Attendes</header>
                <main className="main">
                    <Child />
                    <Child1/>
                </main>
            </div>
        )
    }
}

export default Index2