import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import FindUser from './FindUser';
import Navibar from './Navibar';
import UserForm from './UserForm';
import UserList from './UserList';
import Welcome from './Welcome';

const Home = () => {
    return (
        <div>
            <Router>
                <div>
                    <div className="row">
                        <div className="col-2">
                            <Navibar />
                        </div>

                        <div className="col-10">
                            <Route path="/" exact component={Welcome}></Route>
                            <Route path="/form" component={UserForm}></Route>
                            <Route path="/find" component={FindUser}></Route>
                            <Route path="/find-name" component={FindUser}></Route>
                            <Route path="/list" component={UserList}></Route>
                            <Route path="/edit/:id" component={UserForm}></Route>
                            <Route path="/delete/:id" component={UserList}></Route>

                        </div>




                    </div>
                </div>

            </Router>


        </div>
    );
};

export default Home;