import React,{useEffect,useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from './components/UserList';
import UserForm from './components/UserForm';

const App = () => {
  

  return (
    <div className="container">

     
     <UserForm/>

      <UserList/>
      
    </div>
  );
};

export default App;