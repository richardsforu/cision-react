import React, { useState } from 'react';

const Registration = () => {
    const [user, setUser] = useState({});
    return (
        <div>
            <h1>User Registration</h1>  <hr />

            <div className="col-6">
                <div className="card">
                    <div className="card-header">Registration Form</div>
                    <div className="card-body">

                        <form autoComplete="false">
                            <div className="form-group">
                                <input
                                    placeholder="First Name"
                                    name="firstName"
                                    className="form-control" />
                            </div>

                            <div className="form-group">
                                <input
                                    placeholder="Last Name"
                                    name="lastName"
                                    className="form-control" />
                            </div>

                            <div className="form-group">
                                <input
                                    placeholder="User Name"
                                    name="userName"
                                    className="form-control" />
                            </div>

                            <div className="form-group">
                                <input
                                    placeholder="Email Address"
                                    name="emailAddress"
                                    className="form-control" />
                            </div>



                            <div className="form-group text-center">
                                <button className="btn btn-primary" style={{ margin: '5px' }}>Submit</button>
                                <button type="reset" className="btn btn-primary" style={{ margin: '5px' }}>Reset</button>
                                <button className="btn btn-danger" style={{ margin: '5px' }}>Cancel</button>


                            </div>



                        </form>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Registration;