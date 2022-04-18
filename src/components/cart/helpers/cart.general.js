// lodash
import _reduce from "lodash/reduce";
import _flowRight from "lodash/flowRight";
import _sum from "lodash/sum";
import _values from "lodash/values";

// helpers
import findItemById from "../../../utility/findItemById";

export const sumOfValues = _flowRight(_sum, _values);

const addAmountToSum = (foodList) => (sum, quantity, id) => {
    const item = findItemById(foodList, id);
    const { amount } = item;
    return sum + amount * quantity;
};

export function getTotalAmount(cart, foodList) {
    return _reduce(cart, addAmountToSum(foodList), 0);
}

export function getTotalAmountByQuantity(amount, quantity){
    return amount * quantity;
}