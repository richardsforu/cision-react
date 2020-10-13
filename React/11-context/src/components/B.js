import React from 'react';
import C from './C';
import ColorContext from './ColorContext';

const B = (props) => {
    return (
        <div className="card card-body">
            <pre>
                <span>B Component</span>
            </pre>

            <C />

        </div>
    );
};

export default B;