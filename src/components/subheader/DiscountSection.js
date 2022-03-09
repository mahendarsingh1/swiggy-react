import React from "react";
import OfferIcon from '../../assests/images/offers.svg'
import './DiscountSection.css'

function DiscountSection(){
    return(
        <div className="inline">
            <h3 className="offer-heading inline">OFFER</h3>
            <div className="offer-section">
                <img src={OfferIcon} alt="offers" className="invert"/>
                20% off up to ₹125 | Use KOTAK125 Above ₹500
                <br/>
                <img src={OfferIcon} alt="offers" className="invert"/>
                20% off up to ₹150 | Use PAYTMBANK150 Above ₹450
            </div>
        </div>
    )
}

export default DiscountSection;