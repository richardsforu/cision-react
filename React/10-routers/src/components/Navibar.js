import React from 'react';
import { Link } from 'react-router-dom';
const Navibar = () => {
    return (
        <div>

            <ul className="nav flex-column">
                <li className="nav-item">
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/form">Form</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/find">Find User</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/find-name">Find By Name</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/list">Users</Link>
                </li>

            </ul>

        </div>
    );
};

export default Navibar;