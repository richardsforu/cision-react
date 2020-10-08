import React,{useState} from 'react';

const HookCounter = () => {
  let[counter,setCounter]=useState(0)  
  let [person,setPerson]=useState({});
  
    return (
        <div>
              <div className="card">
                    <div className="card-header">Hook Counter</div>
                    <div className="card-body text-center">
                        <button onClick={()=>setCounter(counter+1)} className="btn btn-primary">Hit - {counter}</button>
                    </div>
                </div>
        </div>
    );
};

export default HookCounter;