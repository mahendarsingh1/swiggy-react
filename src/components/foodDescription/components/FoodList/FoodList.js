import React from "react";
import PropTypes from 'prop-types'

import FoodListSection from "../FoodListSection";
import './FoodList.css'

function getFoodListSection(categories, foodListData){
    const listSection = categories.map(function getFoodListSectionJsxFromCategory(category){
        return (
            <FoodListSection 
                key={category} 
                category={category}
                items={foodListData[category]} 
            />
        )
    })
    return listSection;
}

function FoodList(props){

    const { foodListData } = props;
    const keys = Object.keys(foodListData);
    
    const listSection = getFoodListSection(keys, foodListData);
    
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