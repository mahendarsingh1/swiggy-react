// Libraries
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// components
import IconWithLabel from "../../../../commonComponents/iconWithLabel";
import PlusMinusButton from "../../../../commonComponents/plusMinusButton/PlusMinusButton";

// helpers
import { getTotalAmountByQuantity } from "../../helpers/cart.general";

// utility
import getFormattedAmount from "../../../../utility/getFormattedAmount";
import getIconByType from "../../../../utility/getIconByType";

// css
import "./cartItem.css";

function CartItem(props) {
    const { item, quantity, onIncrementClick, onDecrementClick } = props;
    const { id, name, type, amount, currency } = item;

    const totalAmount = getTotalAmountByQuantity(amount, quantity);
    return (
        <div className="cartItem flex-space-between">
            <div className="flex">
                <IconWithLabel icon={getIconByType(type)} label={name}/>
            </div>
            <div className="flex align-items-center">
                <PlusMinusButton
                    data-id={id}
                    label={quantity}
                    onIncrement={onIncrementClick}
                    onDecrement={onDecrementClick}
                />
                <p>{getFormattedAmount(currency, totalAmount)}</p>
            </div>
        </div>
    );
}

CartItem.propTypes = {
    item: PropTypes.shape({
        name: PropTypes.string,
        type: PropTypes.string,
        amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        currency: PropTypes.string,
    }),
    quantity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onIncrementClick: PropTypes.func,
    onDecrementClick: PropTypes.func,
};

CartItem.defaultProps = {
    item: {},
    quantity: 0,
    onIncrementClick: _noop,
    onDecrementClick: _noop,
};

export default CartItem;
