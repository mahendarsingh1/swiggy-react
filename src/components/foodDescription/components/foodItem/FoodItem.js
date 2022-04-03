// Libraries
import PropTypes from "prop-types";

// readers
import foodListItemReader from "../../readers/foodListItemReader";

// utility
import getIconByType from "../../../../utility/getIconByType";
import getFormattedAmount from "../../../../utility/getFormattedAmount";

// components
import Button, { TYPES } from "../../../../commonComponents/button/Button";

// css
import "./foodItem.css";

function FoodListItem(props) {
    const { item } = props;

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
                    <Button
                        type={TYPES.SECONDARY}
                        className="upper-case"
                        label="add"
                    />
                </div>
                <p className="m-tb-0-5 op-6">{description}</p>
            </div>
            <hr />
        </>
    );
}

FoodListItem.propTypes = {
    item: PropTypes.shape({
        id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        name: PropTypes.string,
        amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
        description: PropTypes.string,
        type: PropTypes.string,
        currency: PropTypes.string,
    }),
};

FoodListItem.defaultProps = {
    item: {},
};

export default FoodListItem;
