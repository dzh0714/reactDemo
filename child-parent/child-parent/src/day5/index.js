import React, { Component } from "react"
import "./css/index.css"
import Header from "./header";
import Section from "./section"
import data from "../mock/emojiList.json"

class Body extends Component{
    constructor(props){
        super()

    }
    render(){
        return(
            <div className="wrap"> 
                <Header />
                <main className="main"> 
                    <Section />
                </main>
                
             </div>
        )
    }

}






export default Body