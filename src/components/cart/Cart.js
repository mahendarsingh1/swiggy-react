// Libraries
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// components
import CartItemsList from "./components/cartItemsList";
import Button from "../../commonComponents/button";

// utility
import getFormattedAmount from "../../utility/getFormattedAmount";
import getFormattedItemsString from "../../utility/getFormattedItemsString";

// helpers
import { sumOfValues, getTotalAmount } from "./helpers/cart.general";

// css
import "./cart.css";

function Cart(props) {
    const {
        cartQuantities,
        foodList,
        onCheckoutClick,
        onIncrementClick,
        onDecrementClick,
    } = props;

    const totalQuantity = sumOfValues(cartQuantities);
    const totalAmount = getTotalAmount(cartQuantities, foodList);

    return (
        <>
            <h2>Cart</h2>
            <p className="uppercase">
                {getFormattedItemsString(totalQuantity)}
            </p>
            <CartItemsList
                cartQuantities={cartQuantities}
                foodList={foodList}
                onIncrementClick={onIncrementClick}
                onDecrementClick={onDecrementClick}
            />
            <div className="flex-space-between totalAmount">
                <h4>SubTotal</h4>
                <h4>{getFormattedAmount("INR", totalAmount)}</h4>
            </div>
            <Button
                label="CHECKOUT →"
                className="checkout-button"
                onClick={onCheckoutClick}
            />
        </>
    );
}

Cart.propTypes = {
    cartQuantities: PropTypes.objectOf(PropTypes.number),
    foodList: PropTypes.object,
    onCheckoutClick: PropTypes.func,
    onIncrementClick: PropTypes.func,
    onDecrementClick: PropTypes.func,
};

Cart.defaultProps = {
    cartQuantities: {},
    foodList: {},
    onCheckoutClick: _noop,
    onIncrementClick: _noop,
    onDecrementClick: _noop,
};

export default Cart;
