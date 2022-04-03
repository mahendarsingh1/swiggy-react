import _property from 'lodash/property'

const name  = _property("name");
const amount = _property("amount");
const description = _property("description");
const type = _property("type");
const currency = _property("currency");

const foodListItemReader = {
    name,
    amount,
    description,
    type,
    currency
}

export default foodListItemReader;