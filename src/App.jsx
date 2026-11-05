import outOfStockIcon from './assets/out-of-stock.png';
import { useState } from 'react';
import checkIcon from './assets/check.png';
import minusIcon from './assets/minus.png';
import './App.css';
import { bestSellingTv, inventory } from './constants/inventory.js';
import getAmountSold from './helpers/getAmountSold.js';
import getAmountPurchased from './helpers/getAmountPurchased.js';
import getAmountToSell from './helpers/getAmountToSell.js';
import getTvName from './helpers/getTvName.js';
import getTvPrice from './helpers/getTvPrice.js';
import getAvailableSizes from './helpers/getAvailableSizes.js';

function App() {
    const [sortedTvs, setSortedTvs] = useState(inventory);
    const amountSold = getAmountSold();
    const amountPurchased = getAmountPurchased();
    const amountToSell = getAmountToSell();
    function sortBySoldDesc() {
        const sorted = [...sortedTvs].sort((a, b) => b.sold - a.sold);
        console.log('3a:', sorted);
        setSortedTvs(sorted);
    }
    function sortByPriceAsc() {
        const sorted = [...sortedTvs].sort((a, b) => a.price - b.price);
        console.log('3b:', sorted);
        setSortedTvs(sorted);
    }

    function sortByRefreshRateDesc() {
        const sorted = [...sortedTvs].sort((a, b) => b.refreshRate - a.refreshRate);
        console.log('3c:', sorted);
        setSortedTvs(sorted);
    }

    function sortByBiggestScreenDesc() {
        const sorted = [...sortedTvs].sort(
            (a, b) => Math.max(...b.availableSizes) - Math.max(...a.availableSizes)
        );
        console.log('Bonus 1:', sorted);
        setSortedTvs(sorted);
    }
    return (
        <main>
            <h1>Tech it easy dashboard</h1>
            <p className="sold">Aantal verkochte producten: {amountSold}</p>
            <p className="purchased">Aantal ingekochte producten: {amountPurchased}</p>
            <p className="toSell">Aantal te verkopen producten: {amountToSell}</p>

            <h2>Best verkochte tv</h2>
            <article className="tv-card">
                <img src={bestSellingTv.sourceImg} alt={getTvName(bestSellingTv)} />
                <p>{getTvName(bestSellingTv)}</p>
                <p>{getTvPrice(bestSellingTv.price)}</p>
                <p>{getAvailableSizes(bestSellingTv.availableSizes)}</p>
                <div className="options">
                    <img src={checkIcon} alt="check" /> wifi
                    <img src={minusIcon} alt="minus" /> speech
                    <img src={checkIcon} alt="check" /> hdr
                    <img src={checkIcon} alt="check" /> bluetooth
                    <img src={minusIcon} alt="minus" /> ambilight
                </div>
            </article>
            <h2>Merken</h2>
            <ul>
                {inventory.map((tv) => (
                    <li key={tv.type}>{tv.brand}</li>
                ))}
            </ul>
                <h2>Alle tv's</h2>
                <button onClick={sortBySoldDesc}>Meest verkocht eerst</button>
    <button onClick={sortByPriceAsc}>Goedkoopste eerst</button>
    <button onClick={sortByRefreshRateDesc}>Meest geschikt voor sport eerst</button>
    <button onClick={sortByBiggestScreenDesc}>Grootste schermgroottes eerst</button>
    {sortedTvs.map((tv) => (
                <article className="tv-card" key={tv.type}>
                    <img src={tv.sourceImg} alt={getTvName(tv)} />
                    {tv.sold === tv.originalStock && (
                        <img src={outOfStockIcon} alt="uitverkocht" className="out-of-stock" />
                    )}
                    <p>{getTvName(tv)}</p>
                    <p>{getTvPrice(tv.price)}</p>
                    <p>{getAvailableSizes(tv.availableSizes)}</p>
                    <ul>
                        {tv.options.map((option) => (
                            <li key={option.name}>
                                <img src={option.applicable ? checkIcon : minusIcon} alt={option.applicable ? 'check' : 'minus'} />
                                {option.name}
                            </li>
                        ))}
                    </ul>
                </article>
            ))}

        </main>
    )
}

export default App;
