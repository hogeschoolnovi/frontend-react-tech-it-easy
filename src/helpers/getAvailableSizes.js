function getAvailableSizes(sizes) {
    return sizes
        .map((size) => `${size} inch (${Math.round(size * 2.54)} cm)`)
        .join(' | ');
}

export default getAvailableSizes;