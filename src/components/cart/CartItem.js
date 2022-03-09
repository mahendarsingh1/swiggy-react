import React from "react";
import currencySymbol from "../../constants/currency";
import './CartItem.css'

import img from '../../assests/images/symbol.svg'

function CartItem(props){

    const { item, handleQuantityUpdate } = props;
    const { id, name, type, quantity, amount, currency } = item;

    return (
        <div className="cartItem flex-space-between">
            <div className="flex">
                <img src={img} alt={type} className={`h-15 ${type}`}/>
                <p>{name}</p>
            </div>
            <div className="flex align-items-center">
                <div className="quantityControllers flex-space-around align-items-center">
                    <span onClick={()=>handleQuantityUpdate(id,-1)}>-</span>
                    {quantity}
                    <span onClick={()=>handleQuantityUpdate(id,1)}>+</span>
                </div>
                <p>{`${currencySymbol[currency]}${amount*quantity}`}</p>
            </div>
        </div>
    )
}

export default CartItem;