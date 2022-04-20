import { SET_RESTAURANT_DETAILS } from "./types";

const setRestaurantDetails = (restaurantDetails) => ({
    type: SET_RESTAURANT_DETAILS,
    payload: {
        restaurantDetails,
    },
});

export default setRestaurantDetails;
