// constants
import BASE_URL from "./baseURL";

function handleRestaurantDataSuccess(res){
    return res.json();
}

function fetchRestaurantData(restaurantId){
    return fetch(`${BASE_URL}/restaurants/${restaurantId}`)
        .then(handleRestaurantDataSuccess);
}

export default fetchRestaurantData;