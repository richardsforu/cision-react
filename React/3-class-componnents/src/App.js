//import React from 'react'
/*
//function App(){
  const App=() => {
  return(
    <div className="container">
      <h1>Welcome to React JS</h1>
    </div>
  )
}

export default App
*/

import React, { Component } from 'react';
import Hello from './Hello';
import Test from './Test';
import {emps,prods} from './emp'

class App extends Component {

  f1(){
    console.log("f1 function");
  }

  f2(lable){
    return(
      <span>
        <button type="button" className="btn btn-primary" style={{margin:'5px'}}> {lable}</button>
      </span>
    )
  }

  cities=['c1','c2']
  renderEmployees(){
    return(
      <div>
    
      </div>
    )
  }


  render() {
    this.f1();
   
    return (
      <div className="container">
        <h1>My Class Component</h1> <hr/>
        {this.f2('Btn1')}
        {this.f2('Btn2')}
        {this.f2('Btn3')}
        <hr/>
        <Hello p1="App Data" p2="App data1"/>
        <Hello/>
        <Hello/>
        <Test/>
        <Test/>
        <Test/>

        <hr/>
        {this.renderEmployees()}
        
        
        

      </div>
    );
  }
}

export default App;

