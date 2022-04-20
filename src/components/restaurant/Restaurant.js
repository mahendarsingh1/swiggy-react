// Libraries
import React from "react";
import PropTypes from "prop-types";

// redux
import { connect } from "react-redux";

// lodash
import _isEmpty from "lodash/isEmpty";

// components
import SubHeader from "../subHeader";
import FoodDescription from "../foodDescription";
import Loader from "../../commonComponents/loader";
import ErrorHandler from "../../commonComponents/errorHandler";

// constants
import {
    INITIAL_STATE,
    DEFAULT_RESTAURANT_ID,
    GENERAL_ERROR_MESSAGE,
} from "./constants/restaurant.general";

// actions
import { setRestaurantDetails, setFoodList } from "./actions";

// helpers
import fetchRestaurantData from "../../api/fetchRestaurantData";

// readers
import restaurantReader from "./readers/restaurantReader";

// css
import "./restaurant.css";

class Restaurant extends React.Component {
    state = INITIAL_STATE;

    componentDidMount() {
        this.getRestaurantData();
    }

    getRestaurantData() {
        fetchRestaurantData(DEFAULT_RESTAURANT_ID)
            .then(this.setRestaurantData)
            .catch(this.setErrorMessage)
            .finally(this.setLoaded);
    }

    setRestaurantData = (restaurantData) => {
        const { setRestaurantDetails, setFoodList } = this.props;
        const restaurantDetails = restaurantReader.restaurantDetails(restaurantData);
        const foodList = restaurantReader.foodList(restaurantData);
        setRestaurantDetails(restaurantDetails);
        setFoodList(foodList);
    };

    setErrorMessage = (err) => {
        const { message = GENERAL_ERROR_MESSAGE } = err;
        this.setState({ error: message });
    };

    setLoaded = () => {
        this.setState({ isLoading: false });
    };

    renderSubheaderAndFoodDescription() {
        const { restaurantDetails } = this.props;
        const isRestaurantDetailsEmpty = _isEmpty(restaurantDetails);

        if (isRestaurantDetailsEmpty) {
            return <h2 className="empty-section">No Available Information</h2>;
        }
        return (
            <>
                <SubHeader restaurantDetails={restaurantDetails} />
                {this.renderFoodDescription()}
            </>
        );
    }

    renderFoodDescription() {
        const { foodList } = this.props;
        const isFoodListEmpty = _isEmpty(foodList);

        if (isFoodListEmpty) {
            return <h2 className="empty-section">No Food Items</h2>;
        }
        return <FoodDescription foodList={foodList} />;
    }

    render() {
        const { isLoading, error } = this.state;

        if (isLoading) {
            return <Loader message="Loading..." />;
        }
        if (error) {
            return <ErrorHandler message={error} />;
        }

        return <>{this.renderSubheaderAndFoodDescription()}</>;
    }
}

Restaurant.propTypes = {
    restaurantDetails: PropTypes.shape({
        restaurantImg: PropTypes.string,
        additionalInfo: PropTypes.shape({
            ratingInfo: PropTypes.shape({
                rating: PropTypes.oneOfType([
                    PropTypes.number,
                    PropTypes.string,
                ]),
                ratingCount: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number,
                ]),
            }),
            deliveryTime: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string,
            ]),
            costInfo: PropTypes.shape({
                cost: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
                peopleCount: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number,
                ]),
            }),
        }),
        restaurantInfo: PropTypes.shape({
            name: PropTypes.string,
            type: PropTypes.string,
            city: PropTypes.string,
        }),
        offers: PropTypes.arrayOf(PropTypes.string),
    }),
    foodList: PropTypes.object,
};

const mapStateToProps = (state) => {
    const { restaurantDetails, foodList } = state;
    return { restaurantDetails, foodList };
};

const mapDispatchToProps = {
    setRestaurantDetails,
    setFoodList,
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurant);
