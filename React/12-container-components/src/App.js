import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Veg from './components/Veg';
import FoodBox from './components/FoodBox';
import NonVeg from './components/NonVeg';

const App = () => {
  return (
    <div className="container">
      <h1>Container Components</h1> <hr />

      <Veg>
        <h1>Poori</h1>
      </Veg>
      <hr/>

      <FoodBox>
        <Veg />
        <Veg />
        <Veg />
        <Veg />
      </FoodBox>

      <FoodBox>
        <NonVeg />
        <NonVeg />
        <NonVeg />
      </FoodBox>
    </div>
  );
};

export default App;