import React, { Component } from 'react';
import './results.css';
import Stars from './stars';

/**
*   Display algolia API results
**/

class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {res:1};
    }

    componentWillReceiveProps() {
        this.setState({res:1});
    }

    render() {
        return (
            <div id="results-container">
                <div id="results-header">{ this.props.results.nbHits } results found
                <span id="results-perf"> in {this.props.results.processingTimeMS/1000} seconds</span>
                </div>
                <div id= "results-area">
                    { this.props.results &&
                        this.props.results.hits.slice(0, this.state.res*3).map((elem, index) => {
                            return <ResultItem key={elem.objectID} hit={elem}/>
                        })
                    }
                    { this.props.results.hits.length > this.state.res*3 &&
                        <div id="show-more" onClick={()=>this.setState({res:this.state.res+1})}>More</div>
                    }
                </div>
            </div>
        );
    }
}

const ResultItem = (props) => {
    return (
        <div className="result-item flex-columns">
            <img className="restaurant-picture" src={props.hit.image_url} alt="no data"/>
            <div className="restaurant-description">
                <div className="font-black bold">
                    { props.hit.name }
                </div>
                <div className="flex-columns">
                    <div className="restaurant-score">{ props.hit.stars_count }</div>
                    <Stars score={ props.hit.stars_count }/>
                    <div className="font-light-gray restaurant-review">({ props.hit.reviews_count } reviews)</div>
                </div>
                <div className="font-light-gray">
                    { props.hit.food_type } | { props.hit.neighborhood } | { props.hit.price_range }
                </div>
            </div>
        </div>
    );
}

export default Results;
