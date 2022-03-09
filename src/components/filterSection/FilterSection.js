import React from "react";
import SearchBox from '../../commonComponents/SearchBox'
import Checkbox from "../../commonComponents/Checkbox/Checkbox";
import IconWithLabel from '../../commonComponents/IconWithLabel';

import FavouriteIcon from '../../assests/images/favourite.svg'

import './FilterSection.css'

function FilterSection(){

    return (
        <div className="filter-section">
            <SearchBox placeholder="Search for Dishes" />
            <Checkbox label="Veg Only"/>
            <IconWithLabel icon={FavouriteIcon} label="Favourite"/>
        </div>
    )
}

export default FilterSection;