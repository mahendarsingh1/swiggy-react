// constants
const BASE_URL = 'https://json-server-swiggy.herokuapp.com';

function handleRestaurantDataSuccess(res){
    return res.json();
}

function fetchRestaurantData(restaurantId){
    return fetch(`${BASE_URL}/restaurants/${restaurantId}`)
        .then(handleRestaurantDataSuccess);
}

export default fetchRestaurantData;