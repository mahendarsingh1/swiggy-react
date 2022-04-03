// Libraries
import PropTypes from "prop-types";

// lodash
import _map from "lodash/map";
import _toLower from "lodash/toLower";
import _noop from "lodash/noop";

// components
import FoodItem from "../foodItem";

// readers
import foodListItemReader from "../../readers/foodListItemReader";

// utility
import getFormattedItemsString from "../../../../utility/getFormattedItemsString";

const renderFoodItem =
    (cartQuantities, onAddToCart, onIncrementClick, onDecrementClick) => (item) => {
        const id = foodListItemReader.id(item);
        return (
            <FoodItem
                key={id}
                item={item}
                cartQuantities={cartQuantities}
                onAddToCart={onAddToCart}
                onIncrementClick={onIncrementClick}
                onDecrementClick={onDecrementClick}
            />
        );
    };

function FoodListSection(props) {
    const {
        heading,
        items,
        setRef,
        cartQuantities,
        onAddToCart,
        onIncrementClick,
        onDecrementClick,
    } = props;

    const subtitle = getFormattedItemsString(items.length);
    const foodItems = _map(
        items,
        renderFoodItem(cartQuantities, onAddToCart, onIncrementClick, onDecrementClick)
    );

    return (
        <>
            <h2 id={_toLower(heading)} ref={setRef}>
                {heading}
            </h2>
            <p className="op-9 upper-case">{subtitle}</p>
            {foodItems}
        </>
    );
}

FoodListSection.propTypes = {
    heading: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.object),
    setRef: PropTypes.func,
    cartQuantities: PropTypes.objectOf(PropTypes.number),
    onAddToCart: PropTypes.func,
    onIncrementClick: PropTypes.func,
    onDecrementClick: PropTypes.func,
};

FoodListSection.defaultProps = {
    heading: "category",
    items: [],
    setRef: _noop,
    cartQuantities: {},
    onAddToCart: _noop,
    onIncrementClick: _noop,
    onDecrementClick: _noop,
};

export default FoodListSection;
