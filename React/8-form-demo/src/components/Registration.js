import React, { useState, useEffect } from 'react';

const Registration = ({submitForm}) => {
    const [user, setUser] = useState(
        {
            firstName: '',
            lastName: '',
            userName: '',
            gender: '',
            phoneNumber: '',
            emailAddress: ''
        }
    );

    const [errors, setError] = useState(false);
    const[isSubmited,setSubmitted]=useState(false);


    function validateForm(user) {
        console.log('-- validate form');
        let errors = {};
        if (!user.firstName.trim()) {
            errors.firstName = "First name is required"
        } else if (user.firstName.length < 3) {
            errors.firstName="First name length should be at least 3 characters"
        }

        if (!user.lastName.trim()) {
            errors.lastName = "Last name is required"
        } else if (user.lastName.length < 3) {
            errors.lastName="Last name length should be at least 3 characters"
        }


        return errors;
    }
    function handleSubmit(e) {
        e.preventDefault();
        console.log(user);
        // validations  -> all are validated, save data to database/server
        setError(validateForm(user))
        // save to server logic
        setSubmitted(true);
    }

    useEffect(() => {
        console.log(">>>> useEffect <<<<<");
        if (Object.keys(errors).length === 0 && isSubmited) {
            console.log('logic to submit form to database /server');
            submitForm(user);
        }

    }, [errors])
    function handleChange(e) {
        let { name, value } = e.target;
        setUser(
            {
                ...user,
                [name]: value
            }
        )
    }

    return (
        <div>
            <h1>User Registration</h1>  <hr />
            <div className="col-6">
                <div className="card">
                    <div className="card-header">Registration Form</div>
                    <div className="card-body">
                        <form onSubmit={e => handleSubmit(e)}>
                            <div className="form-group">
                                <input
                                    placeholder="First Name"
                                    name="firstName"
                                    className="form-control"
                                    onChange={e => { handleChange(e) }}
                                />
                                <span className="text-danger">{errors.firstName}</span>
                            </div>

                            <div className="form-group">
                                <input
                                    placeholder="Last Name"
                                    name="lastName"
                                    className="form-control"
                                    onChange={e => { handleChange(e) }}
                                />
                                 <span className="text-danger">{errors.lastName}</span>
                            </div>

                            <div className="form-group">
                                <input
                                    placeholder="User Name"
                                    name="userName"
                                    className="form-control"
                                    onChange={e => { handleChange(e) }}
                                />
                            </div>

                            <div className="form-group">

                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" value="Male" onChange={e => { handleChange(e) }} />
                                    <label className="form-check-label" >Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gender" value="Female" onChange={e => { handleChange(e) }} />
                                    <label className="form-check-label">Female</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder="Mobile Number"
                                    name="phoneNumber"
                                    className="form-control"
                                    onChange={e => { handleChange(e) }}
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    placeholder="Email Address"
                                    name="emailAddress"
                                    className="form-control"
                                    onChange={e => { handleChange(e) }}
                                />
                            </div>



                            <div className="form-group text-center">
                                <button className="btn btn-primary" style={{ margin: '5px' }}>Submit</button>
                                <button type="reset" className="btn btn-primary" style={{ margin: '5px' }}>Reset</button>
                                <button type="button" className="btn btn-danger" style={{ margin: '5px' }}>Cancel</button>


                            </div>




                        </form>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Registration;