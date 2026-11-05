import { inventory } from '../constants/inventory.js';

function getAmountSold() {
    return inventory.reduce((total, tv) => total + tv.sold, 0);
}

export default getAmountSold;