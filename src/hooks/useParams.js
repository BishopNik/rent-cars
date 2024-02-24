/** @format */

import { useSelector } from 'react-redux';
import { selectMakes, selectMin, selectMax, selectIsLoading } from 'redux/params/selectors';

export const useParams = () => {
	const makes = useSelector(selectMakes);
	const min = useSelector(selectMin);
	const max = useSelector(selectMax);
	const isLoading = useSelector(selectIsLoading);

	return {
		makes,
		min,
		max,
		isLoading,
	};
};
