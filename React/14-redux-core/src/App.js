import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { store } from './store'
const App = () => {

  store.subscribe(() => {
    let count = store.getState().counter.count;
    console.log("APP: " + count);
  })

  return (
    <div className="container">
      <h1>Redux Core Demo</h1>v <hr />

      <button
        className="btn btn-primary"
        onClick={() => store.dispatch({ type: 'INCREMENT' })}

      >Increment</button>

      <button
        className="btn btn-primary"
        onClick={() => store.dispatch({ type: 'DECREMENT' })}

      >Decrement</button>

      <hr/>

      <button
        className="btn btn-primary"
        onClick={() => store.dispatch({ type: 'INCREMENT',value:5 })}

      >Increment by 5</button>

      <button
        className="btn btn-primary"
        onClick={() => store.dispatch({ type: 'DECREMENT',value:5 })}

      >Decrement by 5</button>





    </div>
  );
};

export default App;