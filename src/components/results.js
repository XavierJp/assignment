import React, { Component } from 'react';
import './results.css';
import Stars from './stars';

/**
*   Display algolia API results
**/

const Results = (props) => {
    return (
        <div id="results-container">
        <div>{ props.results.nbHits } results founds
        in {props.results.processingTimeMS/1000} seconds
        </div>
        { props.results &&
            props.results.hits.map((elem, index) => {
                return <ResultItem key={elem.objectID} hit={elem}/>
            })
        }
        </div>
        );
}

const ResultItem = (props) => {
    return (
        <div className="result-item flex-columns">
            <img className="restaurant-picture" src={props.hit.image_url} alt="NO PICTURE AVAILABLE"/>
            <div className="restaurant-description">
                <div className="font-black bold">
                    { props.hit._highlightResult.name.value }
                </div>
                <div className="flex-columns">
                    <div>{ props.hit.stars_count }</div>
                    <Stars score={ props.hit.stars_count }/>
                    <div className="font-light-gray">({ props.hit.reviews_count } reviews)</div>
                </div>
                <div className="font-light-gray">
                    { props.hit.food_type } | { props.hit.neighborhood } | { props.hit.price_range }

                </div>
            </div>
        </div>
    );
}

export default Results;
