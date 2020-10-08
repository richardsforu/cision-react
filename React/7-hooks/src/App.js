import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClassCounter from './components/ClassCounter';
import HookCounter from './components/HookCounter';
import UseEffectHook from './components/UseEffectHook';
const App = () => {
  return (
    <div className="container">
      <h1>React Hooks</h1>
      <hr/>
      <ClassCounter/>
      <hr/>
      <HookCounter/>

      <hr/>
      <UseEffectHook/>
    </div>
  );
};

export default App;