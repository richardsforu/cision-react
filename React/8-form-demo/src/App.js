import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Registration from './components/Registration';
import Success from './components/Success';

const App = () => {

  const[isSubmited,setSubmitted]=useState(false);
  const[user,setUser]=useState();

  function submitForm(user){
    setSubmitted(true);
    console.log(">>> APP:: Form is Submited <<<<");
    console.log(user);
    setUser(user);

  }
  
  return (
    <div className="container">


       {isSubmited?<Success user={user}/>:<Registration  submitForm={submitForm}/>} 

      
    </div>
  );
};

export default App;