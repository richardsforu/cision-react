import React, { useState, useEffect } from 'react';
import store from '../store';


const TopicList = () => {

    let [storeData, setTopics] = useState(store.getState)

    useEffect(() => {
        store.subscribe(()=>{
            //.....
            console.log(' subscribed');
        })
    })

    function renderTopics() {
        console.log(storeData.topics);
        return storeData.topics.map((topic, index) => {
            return <li key={index} className="list-group-item">{topic}</li>
        })
    }

    return (
        <div>
            <ul className="list-group">
                {renderTopics()}
            </ul>

        </div>
    );
};

export default TopicList;