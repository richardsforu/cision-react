import React from 'react';
import NonVeg from './NonVeg';
import Veg from './Veg';

const FoodBox = (props) => {

    function renderChildren() {
        return props.children.map((child, index) => {
            return (

                <li className="list-group-item">{child}</li>

            )
        })
    }
    return (
        <div className="card card-body">
            <ul className="list-group">
                {renderChildren()}
            </ul>

        </div>
    );
};

export default FoodBox;