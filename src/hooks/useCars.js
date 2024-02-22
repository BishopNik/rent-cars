/** @format */

import { useSelector } from 'react-redux';
import { allCarsItems, selectIsLoading } from 'redux/cars/selectors';

export const useCars = () => {
	const allCars = useSelector(allCarsItems);
	const isLoading = useSelector(selectIsLoading);

	return {
		allCars,
		isLoading,
	};
};
