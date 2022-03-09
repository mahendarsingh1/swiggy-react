import React from "react";
import Description from "./Description";
import DiscountSection from './DiscountSection'
import restaurantImg from '../../assests/images/restaurant.webp'
import './SubHeader.css'

function SubHeader(){
    return (
      <div id="subheader">
        <img src={restaurantImg} alt="Reataurant"/>
        <Description/>
        <DiscountSection/>
      </div>  
    );
}

export default SubHeader;