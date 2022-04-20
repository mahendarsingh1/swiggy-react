import { SET_FOOD_LIST } from "./types";

const setFoodList = (foodList) => ({
    type: SET_FOOD_LIST,
    payload: {
        foodList,
    },
});

export default setFoodList;
