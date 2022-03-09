import React from "react";
import './Breadcrumb.css';
import breadcrumbData from './constants/breadcrumbData'

function Breadcrumb(){

    const {home, city, layout, shop} = breadcrumbData;

    return (
        <div className="breadcrumb">
            <span>{home} </span> /
            <span>{city} </span> /
            <span>{layout} </span> /
            {shop}
        </div>
    )
}

export default Breadcrumb;