import React,{useEffect, useState} from 'react';


const UserForm = e => {
    let[user,setUser]=useState({})

    const handleChange = (e) => {
        let{id,value}=e.target;
        setUser({...user,[id]:value})
    }

const handleSubmit = (e) => {
    
    fetch('http://localhost:8080/api/users',{method: 'POST',body: JSON.stringify(user),headers: {'Content-Type':'application/json'}})
    .then(response => response.json())
    .then(savedUser =>{
        console.log(savedUser);
    })
    e.preventDefault();

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
                        onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>User Name</label>
                        <input 
                        type="text"
                        className="form-control"
                        id="userName"
                        onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                        type="password"
                        className="form-control"
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