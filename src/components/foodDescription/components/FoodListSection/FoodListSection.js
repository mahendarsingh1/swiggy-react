import React from "react";
import PropTypes from 'prop-types'

import getItemStringUsingCount from '../../../../helpers/getItemStringCount'

import FoodListItem from "../FoodListItem";

function FoodListSection(props){

    const { items, category, handleAddToCart } = props;

    const list = items.map(function getFoodListItemJsxFromItem(item){
                    return <FoodListItem key={item.id} item={item} category={category} handleAddToCart={handleAddToCart} /> 
                })

    return (
        <>
            <h2 id={category}>{category}</h2>
            <p className="op-9 uppercase">{items.length} {getItemStringUsingCount(items)}</p>
            {list}
        </>
    )
}

FoodListSection.propTypes = {
    items : PropTypes.array.isRequired,
    category : PropTypes.string.isRequired
}

export default FoodListSection;