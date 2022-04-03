// Libraries
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";
import _has from "lodash/has";

// readers
import foodListItemReader from "../../readers/foodListItemReader";

// utility
import getIconByType from "../../../../utility/getIconByType";
import getFormattedAmount from "../../../../utility/getFormattedAmount";

// components
import Button, { TYPES } from "../../../../commonComponents/button/Button";
import PlusMinusButton from "../../../../commonComponents/plusMinusButton/PlusMinusButton";

// css
import "./foodItem.css";

function renderButton(
    id,
    cartQuantities,
    onAddToCart,
    onIncrementClick,
    onDecrementClick
) {
    const isItemPresentInCartQuantities = _has(cartQuantities, id);
    if (isItemPresentInCartQuantities) {
        const quantity = cartQuantities[id];
        return (
            <PlusMinusButton
                data-id={id}
                label={quantity}
                onIncrement={onIncrementClick}
                onDecrement={onDecrementClick}
            />
        );
    } else {
        return (
            <Button
                data-id={id}
                type={TYPES.SECONDARY}
                className="upper-case"
                label="add"
                onClick={onAddToCart}
            />
        );
    }
}

function FoodItem(props) {
    const { item, cartQuantities, onAddToCart, onIncrementClick, onDecrementClick } =
        props;

    const id = foodListItemReader.id(item);
    const name = foodListItemReader.name(item);
    const amount = foodListItemReader.amount(item);
    const description = foodListItemReader.description(item);
    const type = foodListItemReader.type(item);
    const currency = foodListItemReader.currency(item);

    return (
        <>
            <div className="food-list-item">
                <img
                    src={getIconByType(type)}
                    className="m-tb-0-5 h-1"
                    alt={type}
                />
                <div className="flex-space-between p-r-2">
                    <div>
                        <h3 className="m-tb-0-5">{name}</h3>
                        <p className="m-tb-0-5">
                            {getFormattedAmount(currency, amount)}
                        </p>
                    </div>
                    {renderButton(
                        id,
                        cartQuantities,
                        onAddToCart,
                        onIncrementClick,
                        onDecrementClick
                    )}
                </div>
                <p className="m-tb-0-5 op-6">{description}</p>
            </div>
            <hr />
        </>
    );
}

FoodItem.defaultProps = {
    item: {},
    cartQuantities: {},
    onAddToCart: _noop,
    onIncrementClick: _noop,
    onDecrementClick: _noop,
};

FoodItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        description: PropTypes.string,
        type: PropTypes.string,
        currency: PropTypes.string,
    }),
    onAddToCart: PropTypes.func,
    onIncrementClick: PropTypes.func,
    onDecrementClick: PropTypes.func,
};

export default FoodItem;
