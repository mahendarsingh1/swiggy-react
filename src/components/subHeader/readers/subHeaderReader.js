// lodash
import _property from 'lodash/property';

const restaurantImg = _property('restaurantImg');
const address = _property('address')
const restaurantInfo = _property('restaurantInfo')
const offers = _property('offers')


const subHeaderReader = {
    restaurantImg,
    address,
    restaurantInfo,
    offers
}

export default subHeaderReader;