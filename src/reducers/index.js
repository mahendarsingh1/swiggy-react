import { combineReducers } from "redux";

import restaurantDetailsReducer from "../components/restaurant/reducers/restaurantDetails";
import foodListReducer from "../components/restaurant/reducers/foodList";

const rootReducer = combineReducers({
    restaurantDetails: restaurantDetailsReducer,
    foodList: foodListReducer,
});

export default rootReducer;
