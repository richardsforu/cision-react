import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useDispatch, useSelector } from 'react-redux'

const App = () => {

  const items = useSelector(state => state.items);
  const dispatch = useDispatch()

  function loadItems() {

    return items.map((item, idx) => {
      return (
        <tr>
          <td>{item.id}</td>
          <td>{item.name}</td>
          <td>{item.price}</td>
          <td>{item.description}</td>
          <td><button class="btn btn-primary">Buy</button></td>
        </tr>
      )
    })

  }


  return (
    <div className="container">
      <h1>React e-shop redux app</h1>

      <table className="table table-bordered">
        <tbody>
          {loadItems()}
        </tbody>
      </table>





    </div>
  );
};

export default App;