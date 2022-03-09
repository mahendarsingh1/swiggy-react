import React from "react";
import CartItem from "./CartItem";

function CartItemsList(props){

    const { cartData, handleQuantityUpdate } = props;
    
    const cartItems = cartData.map( item => {
        return <CartItem item={item} key={item.id} handleQuantityUpdate={handleQuantityUpdate}/>
    })

    return (
        <>
            {cartItems}
        </>
    )

}

export default CartItemsList;