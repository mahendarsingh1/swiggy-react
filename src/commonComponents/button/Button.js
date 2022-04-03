// prop-types
import Proptypes from "prop-types";

// classnames
import cx from "classnames";

// css
import "./button.css";

const TYPES = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
};

function Button(props) {
    const { type = TYPES.PRIMARY, className, label, ...rest } = props;

    const btnClass = cx({
        [TYPES.PRIMARY]: type === TYPES.PRIMARY,
        [TYPES.SECONDARY]: type === TYPES.SECONDARY,
    });

    return (
        <button className={`btn ${btnClass} ${className}`} {...rest}>
            {label}
        </button>
    );
}

Button.defaultProps = {
    label: "Add",
    className: "",
    type: TYPES.PRIMARY,
};

Button.propTypes = {
    label: Proptypes.string,
    className: Proptypes.string,
    type: Proptypes.oneOf(Object.values(TYPES)),
};

export default Button;
export { TYPES };
