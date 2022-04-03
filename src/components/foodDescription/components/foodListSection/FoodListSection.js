// Libraries
import PropTypes from "prop-types";

// lodash
import _map from "lodash/map";
import _toLower from "lodash/toLower";

// components
import FoodItem from "../foodItem";

// utility
import getFormattedItemsString from "../../../../utility/getFormattedItemsString";

function renderFoodItem(item) {
    return <FoodItem key={item.id} item={item} />;
}

function FoodListSection(props) {
    const { items, heading } = props;

    const foodItems = _map(items, renderFoodItem);

    return (
        <>
            <h2 id={_toLower(heading)}>{heading}</h2>
            <p className="op-9 upper-case">
                {getFormattedItemsString(items.length)}
            </p>
            {foodItems}
        </>
    );
}

FoodListSection.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    category: PropTypes.string,
};

FoodListSection.defaultProps = {
    items: [],
    category: "category",
};

export default FoodListSection;
