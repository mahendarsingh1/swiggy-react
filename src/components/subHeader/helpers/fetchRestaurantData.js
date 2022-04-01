// api
import fetchData from "../../../api/fetch";

// constants
import baseUrl from "../../../constants/baseUrlForData";
import { RESTAURANT_DATA_END_POINT } from "../../../api/endPoint";

function fetchRestaurantData(restaurantId){
    return fetchData("https://json-server-swiggy.herokuapp.com/restaurants/1")
}

export default fetchRestaurantData;