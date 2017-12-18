import React, { Component } from 'react';

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

export default Results;
