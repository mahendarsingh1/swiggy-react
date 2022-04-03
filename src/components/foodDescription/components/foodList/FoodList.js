// Libraries
import PropTypes from "prop-types";

// components
import FoodListSection from "../foodListSection";

// lodash
import _map from "lodash/map";
import _startCase from "lodash/startCase";
import _noop from "lodash/noop";

// css
import "./foodList.css";

const renderFoodListSection =
    (cartQuantities, onAddToCart, onIncrementClick, onDecrementClick, setRef) =>
    (items, category) => {
        return (
            <FoodListSection
                key={category}
                heading={_startCase(category)}
                items={items}
                cartQuantities={cartQuantities}
                onAddToCart={onAddToCart}
                onIncrementClick={onIncrementClick}
                onDecrementClick={onDecrementClick}
                setRef={setRef}
            />
        );
    };

function FoodList(props) {
    const {
        foodList,
        cartQuantities,
        onAddToCart,
        onIncrementClick,
        onDecrementClick,
        setRef,
    } = props;

    const foodListSections = _map(
        foodList,
        renderFoodListSection(
            cartQuantities,
            onAddToCart,
            onIncrementClick,
            onDecrementClick,
            setRef
        )
    );

    return <div className="food-list op-9">{foodListSections}</div>;
}

FoodList.propTypes = {
    foodList: PropTypes.object,
    cartQuantities: PropTypes.objectOf(PropTypes.number),
    onAddToCart: PropTypes.func,
    onIncrementClick: PropTypes.func,
    onDecrementClick: PropTypes.func,
    setRef: PropTypes.func,
};

FoodList.deaultProps = {
    foodList: {},
    cartQuantities: {},
    onAddToCart: _noop,
    onIncrementClick: _noop,
    onDecrementClick: _noop,
    setRef: _noop,
};

export default FoodList;
