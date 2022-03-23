import React from "react";
import Location from "./Location";
import logo from '../../assests/images/swiggy.svg'
import ControlOptionsList from "./ControlOptionsList";
import BreadCrumb from '../breadcrumb'
import breadcrumbData from '../breadcrumb/constants/breadcrumbData'
import { controlOptionsData, locationData } from './constants/headerConfig'
import './Header.css'

function Header(){

    return (
        <>
            <div className="header">
                <img src={logo} className="logo" alt="swiggy" />            
                <Location locationData={locationData} />
                <ControlOptionsList controlOptionsData={controlOptionsData} />
            </div>
            <BreadCrumb breadcrumbData={breadcrumbData}/>
        </>
    )
}

export default Header;