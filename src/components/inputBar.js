import React, { Component } from 'react';
import './inputBar.css';

const InputBar = (props) => {
    return(
        <div id="input-bar-container">
            <input
                type="text"
                ref={(input) => { this.textInput = input; }}
                autoComplete="off"
                id="search-box"
                defaultValue="Search for restaurants by Name, Cuisine, Location"/>
        </div>
        )
}

export default InputBar;

