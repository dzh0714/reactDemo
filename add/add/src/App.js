import React, { Component } from 'react';

import './App.css';
import A from "./components/a";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{
        title: "标题一",
        content: "内容一"
      }, {
        title: "标题二",
        content: "内容二"
      }, {
        title: "标题s",
        content: "内容s"
      }]
    }
  }
  render() {
    let {
      list
    } = this.state
    return (
      <div className="App" >
        <A />
        <ul>
          {
            list.map((item, i) => {
              return <li key={i}>
                <img src="" alt="" />
                <div>
                  <Title title={item.title} />
                  <Content content={item.content}/>
                  <Zan/>
                 
                </div>
              </li>
            })
          }

        </ul>
      </div>
    );
  }
}

//标题组件
class Title extends Component {
  render() {
    const {title}=this.props;
    return (
      <h3>{title}</h3>
    )
  }
}

//内容组件
class Content extends Component {
  render(){
    return(
      <p>{this.props.content}</p>
    )
  }
}

//点赞
class Zan extends Component{
  state={
    num:0
  }
  constructor(props){
    super(props)
    this.change=this.change.bind(this)
  }
  render(){
    let { num } = this.state
    return(
        <div>
           <span onClick={this.change}>点赞</span> 
           <span>{num}</span>
        </div>
      
    )
  }
  change(){
    let {num}=this.state
        num++
    this.setState({
      num
    })
  }

}


export default App;