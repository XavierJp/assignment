import React, { Component } from 'react';

import algoliasearch from 'algoliasearch';
import algoliasearchHelper from 'algoliasearch-helper';


const applicationID = 'QF683ZB3A2';
const apiKey = 'c03ec07c2f8e419d91f4d5e7281765c7';
const indexName = 'algolia_assignment';

const facets = ['food_type', 'payment_options', 'price', 'stars_count'];

const client = algoliasearch(applicationID, apiKey);
const helper = algoliasearchHelper(client, indexName, {
    facets: facets
});


class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {res: [], facets:[]};

        helper.on('result', (content) => {
            console.log(content.getFacetValues("food_type"))
            this.setState({
                facets:facets.map(el=>content.getFacetValues(el)),
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

const Results = (props) => {
    return (
      <div className="results">
        { props.results &&
            props.results.map((elem, index) => {
                return <ResultItem key={elem.objectID} hit={elem}/>
            })
        }
        { props.results.length === 0 &&
            <div>No results</div>
        }
      </div>
    );
}

const ResultItem = (props) => {
    return (
      <div className="result-item">
        { props.hit._highlightResult.name.value }
      </div>
    );
}


class FacetSelector extends Component {
    constructor(props) {
        super(props);
        this.refineFacet = this.refineFacet.bind(this);
    }

    render() {
        return(
            <div>
                { this.props.facetList &&
                    this.props.facetList.map((facet, index) => {
                        return <FacetSubSelector
                            key={facets[index]}
                            facetType={facets[index]}
                            facetList={facet}
                            facetClick={this.refineFacet}/>
                    })
                }
            </div>
            )
    }

    refineFacet(facetType) {
        return (facetValue)=> {
            this.props.helper.toggleFacetRefinement(facetType, facetValue)
                .search();
        }
    }

}
const FacetSubSelector = (props) => {
    return(
        <div>
            <h1>{ props.facetType}</h1>
            {
                props.facetList.map((facet, index) => {
                    return <FacetItem
                        key={facet.name}
                        data={facet}
                        facetType={props.facetType}
                        onFacetSelected={props.facetClick(props.facetType)}/>
                })
            }
        </div>
        )
}

const FacetItem = (props) => {
    return(
        <div
            style={{ color: props.data.isRefined ? 'red' : 'blue' }}
            onClick={()=>props.onFacetSelected(props.data.name)}>
                {props.data.name}
                <span>({props.data.count})</span>
        </div>
        );
};

export default Search;
