import React from 'react';
import Box from './Box';
import Greet from './Greet';

const App = (props) => {
  let cities = ['C1', 'C2', 'C3'];


  function f1(event){
    console.log('F1 function called: ');
    console.log(event.target.value);
  }

  function renderCities() {
    console.log('render cities');
    console.log(cities);

    
    return cities.map((city, idx) => {
      return (
        <li key={idx}>{city}</li>
      )
    })
  }
  return (
    <div className="container">
      <div className="card">

        <div className="card-header">{props.title}</div>
        <div className="card-body">
          <h1>App Component</h1> <hr />

          <input type="text" name="t1" onKeyUp={e=>f1(e)}/>
          <button onClick={e=>f1(e)} >Load Cities</button>

        </div>

      </div>
    </div>
  )
}
export default App