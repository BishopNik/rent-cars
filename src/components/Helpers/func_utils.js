/** @format */

export function changeFormatPrice(currency) {
	const [value, symbol] = currency.split('$').filter(Boolean);
	return `${value}${symbol ? symbol.trim() : ''}$`;
}

export function searchMinMax(array) {
	const price = new Set();

	array.forEach(car => {
		const priceNum = parseFloat(car.rentalPrice.replace('$', ''));
		if (priceNum) price.add(priceNum);
	});

	const priceArray = Array.from(price);
	const minPrice = Math.min(...priceArray);
	const maxPrice = Math.max(...priceArray);

	const start = Math.floor(minPrice / 10);
	const finish = Math.floor(maxPrice / 10) + 1;

	return { start, finish };
}

export function searchModel(array) {
	const make = new Set();

	array.forEach(car => {
		make.add(car.make);
	});

	return Array.from(make).sort((a, b) => a.localeCompare(b));
}
