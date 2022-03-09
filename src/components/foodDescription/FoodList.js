import React from "react";
import FoodListSection from "./FoodListSection";
import './FoodList.css'


function FoodList(props){

    const { foodListData } = props;

    let keys = Object.keys(foodListData);
    let listSection = keys.map(category=>{
        return (
            <FoodListSection 
                key={category} 
                category={category}
                items={foodListData[category]} 
            />
        )
    })
    
    return(
        <div className="food-list op-9">
            {listSection.length>0 && listSection}
        </div>
    )
}

export default FoodList;