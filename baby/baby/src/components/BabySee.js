import React, { Component } from "react"
import { NavLink } from "react-router-dom";
import RouterView from "../router/routerView"



class BabySee extends Component {
    // constructor(props){
    //     super(props)
    // }
    render() {        
        //console.log(this.props.children);
        
        return (
            <div className="con">
                <header>
                    <h2>宝宝看</h2>
                </header>
                <nav>
                    <NavLink to="/look/song">儿歌</NavLink>
                    <NavLink to="/look/story">故事</NavLink>
                    <NavLink to="/look/cartoon">动画</NavLink>
                </nav>
                <section>
                    <RouterView data={this.props.children} props={this.props}></RouterView>
                </section>
            </div>
        )
    }
}
export default BabySee