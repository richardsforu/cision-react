import React from 'react';
import UserForm from './UserForm';
import UserList from './UserList';

const Welcome = () => {
    return (
        <div>
            <h1>Welcome to my app</h1> <hr />
            <UserForm/>
            <UserList/>
          
        </div>
    );
};

export default Welcome;