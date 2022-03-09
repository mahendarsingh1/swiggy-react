import React from "react";
import PropTypes from 'prop-types'

import FoodListItem from "../FoodListItem";

function FoodListSection(props){

    const { items, category } = props;

    const list = items.map(function getFoodListItemJsxFromItem(item){
                    return <FoodListItem key={item.id} item={item} /> 
                })

    return (
        <>
            <h2 id={category}>{category}</h2>
            <p className="op-9">{items.length} {items.length===1 ? "ITEM" : "ITEM"}</p>
            {list}
        </>
    )
}

FoodListSection.propTypes = {
    items : PropTypes.array.isRequired,
    category : PropTypes.string.isRequired
}

export default FoodListSection;