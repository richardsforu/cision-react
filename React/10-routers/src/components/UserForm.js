import React, { useEffect, useState } from 'react';
import axios from 'axios';


const UserForm = ({ history, match }) => {
    let [user, setUser] = useState({})
    let [editFlag, setEditFlag] = useState(false)
    let { id } = match.params;


    useEffect(() => {
        if (id) {
            axios.get(`http://localhost:8080/api/users/${id}`)
                .then(response => response.data)
                .then(user => {
                    setUser(user)
                    setEditFlag(true);
                    console.log(user);
                })
        }
    }, [id])


    const handleChange = (e) => {
        let { id, value } = e.target;
        setUser({ ...user, [id]: value })
    }


    const handleSubmit = (e) => {


        /*
          fetch('http://localhost:8080/api/users',{method: 'POST',body: JSON.stringify(user),headers: {'Content-Type':'application/json'}})
          .then(response => response.json())
          .then(savedUser =>{
              console.log(savedUser);
          }) */

        e.preventDefault();
        if (!editFlag) {
            axios.post('http://localhost:8080/api/users', user)
                .then(response => console.log(response.data) > {
                })
        } else {

            axios.put('http://localhost:8080/api/users', user)
                .then(response => console.log(response.data) > {
                })

        }

        history.push("/list")
    }

    return (
        <div>

            <div className="col-6">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label>ID</label>
                        <input
                            type="text"
                            className="form-control"
                            id="id"
                            name="id"
                            value={user.id}
                            onChange={handleChange}
                            readOnly={editFlag}
                        />
                    </div>

                    <div className="form-group">
                        <label>User Name</label>
                        <input
                            type="text"
                            className="form-control"
                            id="userName"
                            value={user.userName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={user.password}
                            id="password"
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Email Address</label>
                        <input
                            type="text"
                            className="form-control"
                            id="emailAddress"
                            value={user.emailAddress}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-primary">Submit</button>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default UserForm;