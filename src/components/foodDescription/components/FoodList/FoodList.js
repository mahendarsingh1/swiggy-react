import React from "react";
import PropTypes from 'prop-types'

import FoodListSection from "../FoodListSection";
import './FoodList.css'

function FoodList(props){

    const { foodListData, handleAddToCart } = props;

    const keys = Object.keys(foodListData);
    const listSection = keys.map(category=>{
        return (
            <FoodListSection 
                key={category} 
                category={category}
                items={foodListData[category]}
                handleAddToCart={handleAddToCart} 
            />
        )
    })
    
    return(
        <div className="food-list op-9">
            {listSection.length>0 && listSection}
        </div>
    )
}

FoodList.propTypes = {
    foodListData : PropTypes.object.isRequired
}

export default FoodList;