import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {
    let [counter, setCounter] = useState(0);
    let [even, setEven] = useState(0);

    useEffect(() => {
        console.log("-- useEffect");
    }, [])

    useEffect(() => {
        console.log('UseEffect.... for Counter');
    }, [counter])

    useEffect(() => {
        console.log('UseEffect.... for Even');
    }, [even])

    function test() {
        console.log("Test....");
    }

    return (

        <div>
            <h1>UseEffect Demo</h1>  <hr />
            <button onClick={() => setCounter(counter + 1)} className="btn btn-primary">Counter</button>
            <button onClick={() => setEven(even + 2)} className="btn btn-primary">Even Number</button>
            <button onClick={() => test()} className="btn btn-primary">Test</button>
            <h1>Counter: {counter}</h1>
            <h1>Even: {even}</h1>
        </div>
    );
};

export default UseEffectHook;