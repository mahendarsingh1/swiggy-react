import React from "react";
import locationData from './constants/locationData'
import './Location.css';

function Location(){

    const {name, address, img, imgAlt } = locationData;

    return <div className="location inline">
            <ins>{name}</ins> 
            <span>{address}</span>
            <img src={img} alt={imgAlt}/>
        </div>
}

export default Location;