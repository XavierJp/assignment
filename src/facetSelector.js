import React, { Component } from 'react';

/**
*   List of used facets
**/

export const FACETS = ['food_type', 'payment_options', 'price', 'stars_count'];

/**
*   Display the facets to filter resuts
**/

export class FacetSelector extends Component {
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
                            key={FACETS[index]}
                            facetType={FACETS[index]}
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
