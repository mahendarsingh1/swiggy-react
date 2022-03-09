import React from "react";
import CartCheckout from "./CartCheckout";
import CartItemsList from "./CartItemsList";


function FilledCart(props){

    const { cartData, handleQuantityUpdate, handleClearCart } = props;

    const totalQuantity = cartData.reduce((sum, item) => sum+item.quantity, 0)

    function getItemStringUsingCount(data){
        return data.length===1 ? 'item' : 'items';
    }
    
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