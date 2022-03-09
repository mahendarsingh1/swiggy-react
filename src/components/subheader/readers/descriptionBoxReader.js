import _property from 'lodash/property'

const heading = _property("heading");
const paragraph = _property("paragraph");
const img = _property("img");
const classes = _property("classes");

const descriptionBoxReader = {
    heading,
    paragraph,
    img,
    classes
}

export default descriptionBoxReader;