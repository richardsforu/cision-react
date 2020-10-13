import React from 'react';
import B from './B';
import ColorContext from './ColorContext';

const A = (props) => {
    return (
        <div className="card card-body">
            <pre>
                <span>A Component: <span className="badge badge-primary">{props.color}</span></span>
            </pre>

            <ColorContext.Provider value={props.color} >
                <B  />
            </ColorContext.Provider>


        </div>
    );
};

export default A;