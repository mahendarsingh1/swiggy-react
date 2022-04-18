// Libraries
import PropTypes from "prop-types";

// lodash
import _map from "lodash/map";
import _keys from "lodash/keys";
import _noop from "lodash/noop";

// components
import CartItem from "../cartItem";

// helpers
import findItemById from "../../../../utility/findItemById";

const renderCartItem =
    (cartQuantities, foodList, onIncrementClick, onDecrementClick) => (id) => {
        const item = findItemById(foodList, id);
        return (
            <CartItem
                key={id}
                quantity={cartQuantities[id]}
                item={item}
                onIncrementClick={onIncrementClick}
                onDecrementClick={onDecrementClick}
            />
        );
    };

function CartItemsList(props) {
    const { cartQuantities, foodList, onIncrementClick, onDecrementClick } = props;
    const cartItemsIds = _keys(cartQuantities);

    const cartItems = _map(
        cartItemsIds,
        renderCartItem(cartQuantities, foodList, onIncrementClick, onDecrementClick)
    );

    return <>{cartItems}</>;
}

CartItemsList.propTypes = {
    cartQuantities: PropTypes.objectOf(PropTypes.number),
    foodList: PropTypes.object,
    onIncrementClick: PropTypes.func,
    onDecrementClick: PropTypes.func,
};

CartItemsList.defaultProps = {
    cartQuantities: {},
    foodList: {},
    onIncrementClick: _noop,
    onDecrementClick: _noop,
};

export default CartItemsList;
