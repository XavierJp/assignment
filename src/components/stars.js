import React from 'react';
import './stars.css';

/**
*   Display stars score
**/

const starCount = [0, 1, 2, 3, 4];

const Stars = (props) => {
    return (
        <div className="flex-columns stars-container">
            {
                starCount.map((elem, index) => {
                    return <Star key={index} value={index+1 <= Math.round(props.score)}/>
                })
            }
        </div>
        );
}

const Star = (props) => {
    return (
        <div className={ 'star '+ (props.value === true ? 'star-plain' : '') }></div>
    );
}

export default Stars;
