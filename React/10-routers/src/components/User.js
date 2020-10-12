import React from 'react';

const User = (props) => {
    let { user } = props;
    return (
        <div>
            <table className="table table-bordered">
                <tbody>
                    <tr>
                        <td>{user.id}</td>
                        <td>{user.userName}</td>
                        <td>{user.password}</td>
                        <td>{user.emailAddress}</td>
                    </tr>
                </tbody>

            </table>
        </div>
    );
};

export default User;