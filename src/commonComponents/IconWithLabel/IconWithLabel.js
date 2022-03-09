import React from "react";
import PropTypes from 'prop-types'

import favouriteIcon from '../../assests/images/favourite.svg'

import './IconWithLabel.css'

function FavouriteFilter(props){

    const { icon, label } = props;

    return(
        <div className="inline filter-inputs favourite-filter cursor-pointer">
            <img src={icon} alt={label} />
            {" "}
            {label}
        </div>
    )
}

FavouriteFilter.propTypes = {
    icon : PropTypes.string,
    label : PropTypes.string
}

FavouriteFilter.defaultProps = {
    icon : favouriteIcon,
    label : "label"
}

export default FavouriteFilter;