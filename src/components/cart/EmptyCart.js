import React from "react";

import emptyIcon from '../../assests/images/cart_empty.webp'

function EmptyCart(){
    return (
        <>
            <h2>Cart Empty</h2>
            <img className="empty-cart-img" src={emptyIcon} alt="empty-icon" />
            <p>
                Good food is always cooking! <br/>
                Go ahead, order some yummy items from the menu.
            </p>
        </>
    )
}

export default EmptyCart;