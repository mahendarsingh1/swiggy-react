import React from "react";
import dropDownIcon from '../../assests/images/dropdown.svg'
import './Location.css';

function Location(props){

    const { locationData : {name, address} } = props;

    return <div className="location inline cursor-pointer">
            <ins>{name}</ins> {' '}
            <span>{address}</span>
            <img src={dropDownIcon} alt="Dropdown" />
        </div>
}

export default Location;