function getFormattedItemsString(length) {
    if (length === 1) {
        return "1 item";
    }
    return `${length} items`;
}

export default getFormattedItemsString;
