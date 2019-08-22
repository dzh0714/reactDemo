import React from "react";
import widthScription from "../withScription";

class Child1 extends React.Component{
    render(){
        return (
                <ul>
                
                    {this.props.list&&this.props.list.map((item,i)=>{
                        return <li key={i}>{item.name}
                        {this.props.children}
                        </li>
                    })}
                </ul>
        )
    }
}


export default widthScription(Child1)