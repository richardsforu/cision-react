import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Greet from './components/Greet';
class App extends Component {
  constructor() {
    super()
    console.log("APP:: constructor");
      this.state = { msg: '...Loading' }
  }

  greet(msg) {
    this.setState({ msg: msg })
  }
  componentDidMount(){
    console.log("APP:: componentDidMount");
    setTimeout(() => {
      let response ='Hello React';
     // this.setState({ msg: response})
    },2000)
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log("APP::componentDidUpdate");
  }
  render() {
    console.log("APP::render");
    let{msg}=this.state;
    return (
      <div className="container">

        <div className="card">
          <div className="card-header">APP Component</div>
          <div className="card-body text-center">
            <button onClick={e=>this.greet('Good Morning')} className="btn btn-primary" style={{ margin: '5px' }}>Good Morming</button>
            <button onClick={e=>this.greet('Good Afternoon')} className="btn btn-primary" style={{ margin: '5px' }}>Good Afternoon</button>
            <button onClick={e=>this.greet('Good Evening')} className="btn btn-primary" style={{ margin: '5px' }}>Good Evening</button>
          </div>
        </div>
        <hr />

        <Greet msg={msg} />

      </div>
    );
  }
}

export default App;