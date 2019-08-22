import React, {
  Component
} from 'react';
import './App.css';

class Welcome extends Component {
  constructor(props) {
    super(props)
     this.state={name:this.props.name}
    //  this.change=this.change.bind(this)
  }

  render() {
    return (
      <div> 
          <h1>{this.state.name}</h1> 
          <button onClick={this.change}>纷繁 </button>
      </div>
      );
    }
  change=()=>{
    this.setState({
      name:'天气'
    })
  }

}

class App extends Component {
    render() {
      return (
          < div className="App" >
          
            < Welcome name={'张三'} />
            < Welcome name={'李四'} />
            < Welcome name={'王五'} />
          </div>
      )
  }
}

export default App;