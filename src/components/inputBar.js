import React from 'react';
import './inputBar.css';

/*
* Search input bar
*/
const InputBar = (props) => {
    return(
        <div id="input-bar-container">
            <input
                type="text"
                ref={(input) => { this.textInput = input; }}
                autoComplete="off"
                id="search-box"
                placeholder="Search for restaurants by Name, Cuisine, Location"/>
        </div>
        )
}

export default InputBar;

