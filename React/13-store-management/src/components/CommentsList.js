import React, { useState, useEffect } from 'react';
import store from '../store';


const CommentsList = () => {

    let [storeData, setComments] = useState(store.getState)

    function renderComments() {
        return storeData.comments['react-js'].map((comment, index) => {
            return <li key={index} className="list-group-item">{comment}</li>
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