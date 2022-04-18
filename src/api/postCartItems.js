// constants
import BASE_URL from "./baseURL";

function handlePostCartItemsSuccess(res){
    return res.json();
}

function postCartItems(cartItems) {
    return fetch(`${BASE_URL}/cart`, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(cartItems),
    })
    .then(handlePostCartItemsSuccess)
}

export default postCartItems;
