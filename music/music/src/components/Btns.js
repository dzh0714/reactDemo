import React, { Component } from "react"

class Btns extends Component {
    constructor(props) {
        super(props)
        this.playSound = this.playSound.bind(this);
        this.state={
            isClick:false
        }
        this.styleClick={
            width: "28%",
            height: "100px",
            fontSize: "20px",
            lineHeight: "100px",
            textAlign: "center",
            borderRadius: "20px"
        }
        this.styleUnClick={
            width:"100px",
            height:"100px",
            fontSize:"60px",
            lineHeight:"100px",
            textAlign:"center",
            borderRadius:"20px",
            boxShadow:"10px 10px #000"
        }
    }
    render() {
        return (
            <li style={this.state.isClick ? this.styleUnClick : this.styleClick} onClick={this.playSound} >
                {this.props.keyTrigger}
                <audio src={this.props.url} ref={this.props.keyTrigger}></audio>
            </li>
        )
    }
    playSound() {
        this.refs[this.props.keyTrigger].currentTime = 0
        this.refs[this.props.keyTrigger].play();

        this.setState({
            isClick: true
        })
        setTimeout(()=>{
            this.setState({
                isClick: false
            })
        },300)
    }
}


export default Btns