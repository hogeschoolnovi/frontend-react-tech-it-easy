import { inventory } from './inventory.js';

function showOutcomeInConsole() {
    const tvTypes = inventory.map((tv) => tv.type);
    console.log('1a:', tvTypes);

    const soldOutTvs = inventory.filter((tv) => tv.sold === tv.originalStock);
    console.log('1b:', soldOutTvs);
    const nikkeiTv = inventory.find((tv) => tv.type === 'NH3216SMART');
    console.log('1c:', nikkeiTv);
    const sportSuitability = inventory.map((tv) => ({
        name: `${tv.brand} ${tv.name}`,
        suitable: tv.refreshRate >= 100,
    }));
    console.log('1d:', sportSuitability);
    const bigScreenTvs = inventory.filter((tv) =>
        tv.availableSizes.some((size) => size >= 65)
    );
    console.log('1e:', bigScreenTvs);
    const ambilightTvs = inventory.filter((tv) =>
        tv.options.some((option) => option.name === 'ambiLight' && option.applicable)
    );
    console.log('1f:', ambilightTvs);
}

export default showOutcomeInConsole;