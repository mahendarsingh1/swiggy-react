import { SET_RESTAURANT_DETAILS } from "../actions/types";

const INITIAL_STATE = null;

const restaurantDetailsReducer = (state = INITIAL_STATE, action) => {
    const { type } = action;
    switch (type) {
        case SET_RESTAURANT_DETAILS: {
            const { restaurantDetails } = action.payload;
            return restaurantDetails;
        }
        default:
            return state;
    }
};

export default restaurantDetailsReducer;
