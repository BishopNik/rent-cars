/** @format */

import { useSelector } from 'react-redux';
import { allFavorites } from 'redux/favorites/selectors';

export const useFavorites = () => {
	const allFavoritesCars = useSelector(allFavorites);

	return {
		allFavoritesCars,
	};
};
