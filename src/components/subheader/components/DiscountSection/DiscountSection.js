import React from "react";
import PropTypes from 'prop-types'

import OfferIcon from '../../../../assests/images/offers.svg'
import './DiscountSection.css'

function DiscountSection(props){

    const { offers } = props;

    const offersList = offers.map(function getOfferJsxFromOfferText(offer) {
        return (
            <div key={offer}>
                <img src={OfferIcon} alt="offers" className="invert"/> {" "}
                {offer} 
                <br/>
            </div>
        )
    })

    return(
        <div className="inline">
            <h3 className="offer-heading inline">offer</h3>
            <div className="offer-section">
                {offersList}
            </div>
        </div>
    )
}

DiscountSection.propTypes = {
    offers : PropTypes.array
}

DiscountSection.defaultProps = {
    offers : ["No Offer at this time"]
}

export default DiscountSection;