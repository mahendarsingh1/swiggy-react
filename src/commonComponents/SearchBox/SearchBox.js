import React from "react";
import PropTypes from 'prop-types'

import SearchIcon from '../../assests/images/search.svg'

import './SearchBox.css'

function SearchBox(props){

    const { placeholder } = props;

    return(
        <div className={`inline filter-inputs search-box`}>
            <img src={SearchIcon} alt="search" />
            {" "}
            <input type="text" placeholder={placeholder}/>
        </div>
    )
}

SearchBox.propTypes = {
    placeholder : PropTypes.string
}

SearchBox.defaultProps = {
    placeholder : "Search"
}

export default SearchBox;