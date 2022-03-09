// lodash
import _property from 'lodash/property';

const name = _property('name');
const type = _property('type');
const city = _property('city');

const addressReader = {
    name,
    type,
    city
}

export default addressReader;