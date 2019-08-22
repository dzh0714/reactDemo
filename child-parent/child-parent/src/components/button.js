import React, { Component } from 'react';
import SmallBtn from "./SmallBtn";
import './button.css'

class Child extends Component {
    render() {
        return (
            <div className="button">
                <div className="tag">
                    <SmallBtn name="AC"/>
                    <SmallBtn name="+/-"/>
                    <SmallBtn name="%"/>
                    <SmallBtn name="÷"/>  
                </div>
                <div className="tag">
                    <SmallBtn name="7"/>
                    <SmallBtn name="8"/>
                    <SmallBtn name="9"/>
                    <SmallBtn name="×"/>  
                </div>
                <div className="tag">
                    <SmallBtn name="4" />
                    <SmallBtn name="5" />
                    <SmallBtn name="6" />
                    <SmallBtn name="-" />
                </div>
                <div className="tag">
                    <SmallBtn name="1" />
                    <SmallBtn name="2" />
                    <SmallBtn name="3" />
                    <SmallBtn name="+" />
                </div>
                <div className="tag">
                    <SmallBtn name="0" />
                    <SmallBtn name="" />
                    <SmallBtn name="." />
                    <SmallBtn name="=" />
                </div>
            </div>
        );
    }
}

export default Child;


