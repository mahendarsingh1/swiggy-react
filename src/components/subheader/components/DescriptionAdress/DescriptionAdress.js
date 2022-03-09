import React from "react";
import PropTypes from 'prop-types'

import addressReader from "../../readers/addressReader";

function DescriptionAdress(props){

    const { address } = props;

    const name = addressReader.name(address);
    const type = addressReader.type(address);
    const city = addressReader.city(address);
    
    return (
        <>
            <p className="description-heading">{name}</p>
            <p className="description-address">{type}</p>
            <p className="description-address">{city}</p>
        </>
    )
}

DescriptionAdress.propTypes = {
    address : PropTypes.shape({
        name : PropTypes.string,
        type : PropTypes.string,
        city : PropTypes.string
    })
}

DescriptionAdress.defaultProps = {
    address : {
        name : "Restaurant Name",
        type : "Restaurant Type",
        city : "city"
    }
}

export default DescriptionAdress;