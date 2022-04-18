import _find from "lodash/find";
import _findKey from "lodash/findKey"

const isIdPresentInItems = (id) => (items) => {
    return _find(items, { id: id });
};

function findItemById(foodList, id) {
    id = Number(id);
    const category = _findKey(foodList, isIdPresentInItems(id));
    if (category) {
        const items = foodList[category];
        return _find(items, { id: id });
    }
    return null;
}

export default findItemById;
