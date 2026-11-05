import { inventory } from '../constants/inventory.js';

function getAmountPurchased() {
    return inventory.reduce((total, tv) => total + tv.originalStock, 0);
}

export default getAmountPurchased;