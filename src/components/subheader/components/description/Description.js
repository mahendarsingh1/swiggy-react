import React from "react";
import PropTypes from 'prop-types'

import DescriptionBoxList from "../DescriptionBoxList/DescriptionBoxList";
import DescriptionAdress from "../DescriptionAdress/DescriptionAdress";

import './Description.css'


function Description(props){

    const { restaurantInfo, address } = props;

    return (
        <div className="description inline">
            <DescriptionAdress address={address} />
            <DescriptionBoxList restaurantInfo={restaurantInfo}/>
        </div>
    )
}

Description.propTypes = {
    restaurantInfo : PropTypes.array.isRequired,
    address : PropTypes.object.isRequired
}

export default Description;