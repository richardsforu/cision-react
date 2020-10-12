import React,{useEffect,useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom'
const UserList = ({history,match}) => {
    let [users, setUsers] = useState([]);
    let { id } = match.params;
    useEffect(() => {
        if(id){
            console.log("Delete: "+id);
            axios.delete(`http://localhost:8080/api/users/${id}`)
            history.push("/list")
        }
       /* fetch('http://localhost:8080/api/users')
            .then((response) => response.json())
            .then(users => {
                setUsers(users)
            }) */
        //....

        axios.get('http://localhost:8080/api/users')
        .then(response =>response.data)
        .then(users =>{
           // console.log(users);
           setUsers(users)
        })

    }, [])

    function deleteUser(){
       


    }
    const renderUsers = () => {
        console.log(">>> render user");
        return users.map((user, idx) => {
            return (
                <tr key={idx}>
                    <td>{user.id}</td>
                    <td>{user.userName}</td>
                    <td>{user.password}</td>
                    <td>{user.emailAddress}</td>
            <td>{<Link to={`/edit/${user.id}`}><button className="btn btn-warning">Edit</button></Link>}</td>
            <td>{<Link to={`/delete/${user.id}`}><button className="btn btn-danger">Delete</button></Link>}</td>


                </tr>
            )
        })
    }
    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                    {renderUsers()}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;