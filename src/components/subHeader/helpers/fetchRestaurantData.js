// api
import fetchData from "../../../api/fetch";

// constants
import baseUrl from "../../../constants/baseUrlForData";
import { RESTAURANT_DATA_END_POINT } from "../constants/subheader.general";

function fetchRestaurantData(restaurantId){
    return fetchData(`${baseUrl}/${RESTAURANT_DATA_END_POINT}/${restaurantId}`)
}

export default fetchRestaurantData;