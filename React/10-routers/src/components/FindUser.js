import React,{useState} from 'react';
import axios from 'axios'
import User from './User';

const FindUser = () => {
    let[user,setUser]=useState()

    function handleChange(e){
      let{name,value}=e.target;
      axios.get(`http://localhost:8080/api/users/${value}`)
      .then(response => response.data)
      .then(user=>{
          setUser(user)
          console.log(user);
      })
    }
    return (
        <div>

            <div className="col-6">
                <div className="card">
                    <div className="card-header">User Find Form</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>User Id</label>

                                <input type="text"
                                    name="id"
                                    className="form-control"
                                    onChange={e=>handleChange(e)}
                                />
                            </div>

                            <div className="form-group text-center">
                                <button type="submit" className="btn btn-primary">Find</button>
                            </div>
                        </form>
                    </div>
                </div>

                <hr/>
                {user?<User user={user}/>:null}
            </div>
        </div>
    );
};

export default FindUser;