import React from "react";
import address from './constants/address'

function DescriptionText(){

    const {name, type, city } = address;
    
    return (
        <>
            <p className="description-heading">{name}</p>
            <p className="description-address">{type}</p>
            <p className="description-address">{city}</p>
        </>
    )
}

export default DescriptionText;