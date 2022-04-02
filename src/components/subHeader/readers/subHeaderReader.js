// lodash
import _property from 'lodash/property';

const restaurantImg = _property('restaurantImg');
const additionalInfo = _property('additionalInfo')
const restaurantInfo = _property('restaurantInfo')
const offers = _property('offers')


const subHeaderReader = {
    restaurantImg,
    additionalInfo,
    restaurantInfo,
    offers
}

export default subHeaderReader;