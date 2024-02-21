/** @format */

export function changeFormatPrice(currency) {
	const [value, symbol] = currency.split('$').filter(Boolean);
	return `${value}${symbol ? symbol.trim() : ''}$`;
}
