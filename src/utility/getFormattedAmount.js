// constants
const CURRENCY_TO_SYMBOL = {
    INR: "₹",
    USD: "$",
};
Object.freeze(CURRENCY_TO_SYMBOL);

function getFormattedAmount(currency, amount) {
    return `${CURRENCY_TO_SYMBOL[currency]}${amount}`;
}

export default getFormattedAmount;
