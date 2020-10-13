import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import TopicList from './components/TopicList';
import CommentsList from './components/CommentsList';

const App = () => {
  return (
    <div className="container">
      <h1>Store Management</h1>
      <hr />

      <div className="row">

        <div className="col-6">
          <TopicList />
        </div>

        <div className="col-6">
          <CommentsList />
        </div>

      </div>


    </div>
  );
};

export default App;