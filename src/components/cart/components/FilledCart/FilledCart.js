import React from "react";
import CartCheckout from "../CartCheckout";
import CartItemsList from "../../CartItemsList";

import getItemStringUsingCount from "../../../../helpers/getItemStringCount";

function FilledCart(props){

    const { cartData, handleQuantityUpdate, handleClearCart } = props;

    const totalQuantity = cartData.reduce((sum, item) => sum+item.quantity, 0);

    return(
        <>
            <h2>Cart</h2>
            <p className="uppercase">{totalQuantity} {getItemStringUsingCount(cartData)}</p>
            <CartItemsList cartData={cartData} handleQuantityUpdate={handleQuantityUpdate} />
            <CartCheckout cartData={cartData} totalQuantity={totalQuantity} handleClearCart={handleClearCart} />
        </>
    )
}

export default FilledCart;