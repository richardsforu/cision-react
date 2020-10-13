import React from 'react';
import ColorContext from './ColorContext';

const C = (props) => {
    return (
        <div className="card card-body">
            <pre>

            C Component: 
            
            <span className="badge badge-primary">
            <ColorContext.Consumer>
            {value=>value}
            </ColorContext.Consumer>
            </span>

            </pre>
            
        
        </div>
    );
};

export default C;