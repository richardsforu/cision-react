import React,{useEffect,useState} from 'react';

const UserList = () => {
    let [users, setUsers] = useState([]);

    useEffect(() => {

        fetch('http://localhost:8080/api/users')
            .then((response) => response.json())
            .then(users => {
                setUsers(users)
            })
        //....
    }, [])

    const renderUsers = () => {
        console.log(">>> render user");
        return users.map((user, idx) => {
            return (
                <tr key={idx}>
                    <td>{user.id}</td>
                    <td>{user.userName}</td>
                    <td>{user.password}</td>
                    <td>{user.emailAddress}</td>
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