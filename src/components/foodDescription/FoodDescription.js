// Libraries
import PropTypes from "prop-types";
import { useMemo } from "react";

// lodash
import _keys from "lodash/keys";

// components
import Sidebar from "./components/sidebar";
import FoodList from "./components/foodList";

// css
import "./foodDescription.css";

function FoodDescription(props) {
    const { foodList } = props;
    const keys = useMemo(() => _keys(foodList), [foodList]);

    return (
        <div className="flex food-description">
            <Sidebar categories={keys} />
            <FoodList foodList={foodList} />
        </div>
    );
}

FoodDescription.propTypes = {
    foodList: PropTypes.object,
};

FoodDescription.defaultProps = {
    foodList: {},
};

export default FoodDescription;
