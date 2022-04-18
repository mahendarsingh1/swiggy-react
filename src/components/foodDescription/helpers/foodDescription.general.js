// lodash
import _keys from "lodash/keys";
import _map from "lodash/map";
import _reduce from "lodash/reduce";
import _omit from "lodash/omit";

// helpers
import findItemById from "../../../utility/findItemById";

const getItem = (foodList, cart) => (id) => {
    const item = findItemById(foodList, id);
    const quantity = cart[id];
    return {
        ...item,
        quantity,
    };
};

export function getCartItems(cart, foodList) {
    const ids = _keys(cart);
    const items = _map(ids, getItem(foodList, cart));
    return items;
}

function addToSum(sum, item) {
    return sum + item.amount * item.quantity;
}

export function getTotalFromCartItems(items) {
    return _reduce(items, addToSum, 0);
}

export function incrementQuantity(cartQuantities, id) {
    const newQuantitiy = cartQuantities[id] + 1;
    return { ...cartQuantities, [id]: newQuantitiy };
}

export function decrementQuantity(cartQuantities, id) {
    const newQuantitiy = cartQuantities[id] - 1;
    if (newQuantitiy === 0) {
        return _omit(cartQuantities, id);
    } else {
        return { ...cartQuantities, [id]: newQuantitiy };
    }
}
