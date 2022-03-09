// lodash
import _property from 'lodash/property'

const rating = _property('ratingInfo.rating')
const ratingCount = _property('ratingInfo.ratingCount')
const deliveryTime =  _property('deliveryTime')
const cost = _property('costInfo.cost')
const peopleCount = _property('costInfo.peopleCount')

const descriptionReader = {
    rating,
    ratingCount,
    deliveryTime,
    cost,
    peopleCount,
}

export default descriptionReader;