import React, { Component } from 'react';

import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

import {FACETS, FacetSelector } from './facetSelector';
import Results from './results';

const applicationID = 'QF683ZB3A2';
const apiKey = 'c03ec07c2f8e419d91f4d5e7281765c7';
const indexName = 'algolia_assignment';

const client = algoliasearch(applicationID, apiKey);
const helper = algoliasearchHelper(client, indexName, {
    facets: FACETS
});

/**
*   Manage search
**/

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {res: [], facets:[]};

        helper.on('result', (content) => {
            console.log(content.getFacetValues("food_type"))
            this.setState({
                facets:FACETS.map(el=>content.getFacetValues(el)),
                res:content.hits
            });
        });

        helper.search()
    }

    componentDidMount () {
        const searchInput = document.getElementById('search-box')

        searchInput.addEventListener('keyup', function() {
          helper.setQuery(searchInput.value)
                .search();
        });
    }

    render() {
        return (
          <div className="app">
            <input
                type="text"
                ref={(input) => { this.textInput = input; }}
                autoComplete="off"
                id="search-box"
                defaultValue="Search for restaurants by Name, Cuisine, Location"/>
            <FacetSelector facetList={this.state.facets} helper={helper}/>
            <Results results={this.state.res}/>
          </div>
        );
    }
}

export default Search;
