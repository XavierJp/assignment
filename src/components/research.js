import React, { Component } from 'react';

import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';

import FacetSelector, { FACETS } from './facetSelector';
import Results from './results';
import InputBar from './inputBar';

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
        this.state = {res: false, facets:[], apiResponse:{}};

        helper.on('result', (content) => {
            this.setState({
                facets:FACETS.map(el=>content.getFacetValues(el)),
                res:content.hits && content.hits.length > 0,
                apiResponse : content,
            });
        });

        helper.search();
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
          <div id="search-area">
            <InputBar helper={helper} />
            { this.state.res &&
                <div id="display-area">
                    <FacetSelector facetList={this.state.facets} helper={helper}/>
                    <Results results={this.state.apiResponse}/>
                </div>
            }
            { !this.state.res &&
                <Empty/>
            }
          </div>
        );
    }
}

const Empty = () => {
    return(
        <div id="no-results" className="italic">No results</div>
    )
}


export default Search;
