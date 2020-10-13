import React, { useState, useEffect } from 'react';
import store from '../store';


const CommentsList = () => {

    let [storeData, setTopics] = useState(store.getState)

    function renderComments() {
        console.log(storeData.topics);
        return storeData.comments['react-js'].map((topic, index) => {
            return <li key={index} className="list-group-item">{topic}</li>
        })
    }

    return (
        <div>
            <ul className="list-group">
                {renderComments()}
            </ul>

        </div>
    );
};

export default CommentsList;