import getAmountPurchased from './getAmountPurchased.js';
import getAmountSold from './getAmountSold.js';

function getAmountToSell() {
    return getAmountPurchased() - getAmountSold();
}

export default getAmountToSell;