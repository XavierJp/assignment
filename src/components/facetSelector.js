import React, { Component } from 'react';
import './facetSelector.css';
import Stars from './stars';


/**
*   List of used facets
**/

export const FACETS = ['food_type', 'payment_options', 'price_range', 'stars_count'];

const facetLabel = (facet)=>{
    switch (facet) {
        case 'food_type':
            return 'Cuisine/Food Type';
        case 'payment_options':
            return 'Payment Options';
        case 'price_range':
            return 'Price Range';
        case 'stars_count':
            return 'Rating';
        default :
            return 'Other';
    }
}


/**
*   Display the facets to filter resuts
**/

class FacetSelector extends Component {
    constructor(props) {
        super(props);
        this.refineFacet = this.refineFacet.bind(this);
    }

    render() {
        return(
            <div id='facet-container'>
                { this.props.facetList &&
                    this.props.facetList.reduce((acc, facet, index) => {
                        if(facet.length > 0) {
                            acc.push(<FacetSubSelector
                                key={FACETS[index]}
                                facetType={FACETS[index]}
                                facetList={facet}
                                facetClick={this.refineFacet}/>);
                        }

                        return acc;
                    }, [])
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
            <div className="facet-label bold font-dark-gray">{ facetLabel(props.facetType) }</div>
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
            className={ (props.data.isRefined ? 'facet-refined font-white' : '')+' facet-item' }
            onClick={()=>props.onFacetSelected(props.data.name)}>
            { props.facetType !== 'stars_count' &&
                <span>{props.data.name}</span>
            }
            { props.facetType === 'stars_count' &&
                <Stars score={props.data.name} />
            }
                <span
                    className={ (props.data.isRefined ? 'font-white' : '')+' float-right font-light-gray' }
                >{props.data.count}</span>
        </div>
        );
};

export default FacetSelector;
