import React from "react";
import currencySymbol from "../../constants/currency";
import { saveItem as saveItemToLocalStorage } from '../../helpers/localStorage'
import localStorageCartKey from '../../constants/localStorageCartKey'
import './CartCheckout.css';

function CartCheckout(props){
    
    const { cartData, handleClearCart, totalQuantity } = props;

    function clickHandler(){
        const data = {
            amount,
            totalQuantity,
            items:cartData
        }
        saveItemToLocalStorage(localStorageCartKey, data);
        alert('Data Added to Local Storage');
        handleClearCart();
    }

    const amount = cartData.reduce((sum, item)=> sum + (item.quantity*item.amount), 0);

    return (
        <>
            <div id="totalAmount" className="flex-space-between">
                <h4>SubTotal</h4>
                <h4>{`${currencySymbol['INR']}${amount}`}</h4>
            </div>
            <button className="checkout-button" onClick={clickHandler} >CHECKOUT →</button>
        </>
    )
}

export default CartCheckout;