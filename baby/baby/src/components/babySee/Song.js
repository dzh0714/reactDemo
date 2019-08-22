import React, { Component } from "react"
import {DataSource} from "../../db/DataSource";
import WidthSubScription from "../widthSubScription";
import {BrowserRouter as Router,Route,NavLink} from "react-router-dom"
import widthSubScription from "../widthSubScription";



class Song extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="song">
               {
                   this.props.data.map((item,i)=>{
                       return <dl key={i} onClick={()=>{this.play(item)}}>
                           <dt>
                               <img src={item.pic} alt=""/>
                           </dt>
                           <dd>
                               {item.name}
                           </dd>
                       </dl>
                   })
               }
            </div>
        )
    }
    play=(item)=>{
       // console.log(item);
        this.props.history.push({
            pathname:'/look/play',
            state:item
        })
    }
}

export default widthSubScription(Song,(ds)=>ds.getData("/song"))