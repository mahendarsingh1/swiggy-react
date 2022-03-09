import React from "react";
import Location from "./Location";
import logo from '../../assests/images/swiggy.svg'
import ControlOptionsList from "./ControlOptionsList";
import './Header.css'

function Header(){

    return (
        <div className="header">
            <img src={logo} className="logo" alt="swiggy" name='swiggy' />            
            <Location/>
            <ControlOptionsList/>
        </div>
    )
}

export default Header;