import { SET_FOOD_LIST } from "../actions/types";

const INITIAL_STATE = null;

const foodListReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;
    switch (type) {
        case SET_FOOD_LIST: {
            const { foodList } = action.payload;
            return foodList;
        }
        default:
            return state;
    }
};

export default foodListReducer;
