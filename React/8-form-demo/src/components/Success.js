import React from 'react';

const Success = (props) => {
    return (
        <div>
            <h1>Form Submited Successfully</h1><hr />
            <h2>First Name: {props.user.firstName}</h2>
        </div>
    );
};

export default Success;