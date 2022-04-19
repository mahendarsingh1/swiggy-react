import { SET_RESTAURANT_DETAILS } from "./types";

const setRestaurantDetails = (restaurantDetails) => ({
        type: SET_RESTAURANT_DETAILS,
        restaurantDetails,
});

export default setRestaurantDetails;
