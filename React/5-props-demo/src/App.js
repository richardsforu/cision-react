import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BtnGen from './BtnGen';

const App = () => {

  let btnLables=[5,10,20,-5,-10,-20,30]
  return (
    <div className="container">

      <h1>Welcome to APP</h1>
      <hr />

      <button className="btn btn-primary">Btn1</button>
      <button className="btn btn-primary">Btn2</button>
      <button className="btn btn-primary">Btn3</button>
      <button className="btn btn-primary">Btn4</button>
      <button className="btn btn-primary">Btn5</button>

      <hr />

      <div className="card">
        <div className="card-header">Counter APP</div>
        <div className="card-body text-center">
         {/*  <BtnGen btnLbl="5" />
          <BtnGen btnLbl="10" />
          <BtnGen btnLbl="20" />
          <BtnGen btnLbl="-5" />
          <BtnGen btnLbl="-10" />
          <BtnGen btnLbl="-20" /> */}

          <BtnGen btnLables={btnLables}/>

          <hr/>
        </div>

      </div>



    </div>
  );
};

export default App;