/** @format */

import { useSelector } from 'react-redux';
import {
	allCarsItems,
	selectIsLoading,
	selectCurrentPage,
	selectTotalItems,
} from 'redux/cars/selectors';

export const useCars = () => {
	const allCars = useSelector(allCarsItems);
	const isLoading = useSelector(selectIsLoading);
	const currentPage = useSelector(selectCurrentPage);
	const totalItems = useSelector(selectTotalItems);

	return {
		allCars,
		isLoading,
		currentPage,
		totalItems,
	};
};
