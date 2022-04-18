// Libraries
import PropTypes from "prop-types";

// lodash
import _noop from "lodash/noop";

// css
import "./plusMinusButton.css";

function PlusMinusButton(props) {
    const { label, onIncrement, onDecrement, ...rest } = props;

    return (
        <div
            className="quantity-controllers flex-space-around align-items-center"
            {...rest}
        >
            <span onClick={onDecrement}>-</span>
            {label}
            <span onClick={onIncrement}>+</span>
        </div>
    );
}

PlusMinusButton.proptype = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onIncrement: PropTypes.func,
    onDecrement: PropTypes.func,
};

PlusMinusButton.defaultProps = {
    label: 0,
    onDecrement: _noop,
    onIncrement: _noop,
};

export default PlusMinusButton;
