import React from "react";
import EmptyCart from './EmptyCart'
import FilledCart from "./components/FilledCart";
import './Cart.css'

function Cart(props){

    const { cartData, handleQuantityUpdate, handleClearCart } = props;

    return(
        <div className="cart">
            {cartData.length === 0 ? 
                <EmptyCart/>
            :
                <FilledCart 
                    cartData={cartData}
                    handleQuantityUpdate={handleQuantityUpdate} 
                    handleClearCart={handleClearCart}
                />
            }
        </div>
    )
}

export default Cart;