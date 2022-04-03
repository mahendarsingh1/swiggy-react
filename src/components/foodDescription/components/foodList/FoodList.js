// Libraries
import PropTypes from "prop-types";

// components
import FoodListSection from "../foodListSection";

// lodash
import _map from "lodash/map";
import _startCase from "lodash/startCase";

// css
import "./foodList.css";

function renderFoodListSection(items, category) {
    return (
        <FoodListSection
            key={category}
            heading={_startCase(category)}
            items={items}
        />
    );
}

function FoodList(props) {
    const { foodList } = props;

    const foodListSections = _map(foodList, renderFoodListSection);

    return <div className="food-list op-9">{foodListSections}</div>;
}

FoodList.propTypes = {
    foodList: PropTypes.object,
};

FoodList.deaultProps = {
    foodList: {},
};

export default FoodList;
