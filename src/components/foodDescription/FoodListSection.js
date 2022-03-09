import React from "react";
import FoodListItem from "./FoodListItem";

function FoodListSection(props){

    const { items, category } = props;

    return (
        <>
            <h2 id={category}>{category}</h2>
            <p className="op-9">{items.length} ITEMS</p>

            {items.map(item => {
                return (
                    <FoodListItem key={item.id} item={item} />
                );
            })}
        </>
    )
}

export default FoodListSection;