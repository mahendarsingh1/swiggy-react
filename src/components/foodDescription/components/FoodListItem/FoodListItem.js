import React from "react";
import PropTypes from 'prop-types'

import foodListItemReader from "../../readers/foodListItemReader";

import currencySymbol from "../../../../constants/currency";
import img from '../../../../assests/images/symbol.svg'

import './FoodListItem.css'

function FoodListItem(props) {

    const { category, item, handleAddToCart } = props;

    const id = foodListItemReader.id(item);
    const name = foodListItemReader.name(item);
    const amount = foodListItemReader.amount(item);
    const description = foodListItemReader.description(item);
    const type = foodListItemReader.type(item);
    const currency = foodListItemReader.currency(item);

    function handleClick(){
        handleAddToCart(id, category);
    }

    return (
        <>
            <div className="food-list-item">
                <img src={img} className={`margin-tb-8 h-15 ${type}` } alt={type}/>
                <div className="flex-space-between w-90-percent">
                    <div>
                        <h3 className="margin-tb-8">{name}</h3>
                        <p className="margin-tb-8">{`${currencySymbol[currency]}${amount}`}</p>
                    </div>
                    <button className="food-list-item-button uppercase" onClick={handleClick}>add</button>
                </div>
                <p className="margin-tb-8 op-6">{description}</p>
            </div>
            <hr/>
        </>
    )
}

FoodListItem.propTypes = {
    item : PropTypes.object
}

FoodListItem.defaultProps = {
    item : {
        name : 'name',
        amount : 'amount',
        description : 'description',
        type : 'veg',
        currency : 'INR'
    }
}

export default FoodListItem;