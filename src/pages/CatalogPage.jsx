/** @format */

import React, { useContext, useState, useEffect } from 'react';
import { Search } from 'components/Search';
import { Container, ContainerItems, ButtonLoadMore } from 'components/styled.component';
import { MainContext, toastError } from 'components/Helpers';
import { CarItem } from 'components/CarItem';
import { DetailsCar } from 'components/DetailsCar';
import ModalWindow from 'components/Modal';
import { useCars } from 'hooks';
import { useDispatch } from 'react-redux';
import { downloadCars } from 'redux/cars/operations';
import { clearState } from 'redux/cars/carsSlice';

function CatalogPage() {
	const dispatch = useDispatch();
	const { isOpen, setIsOpen, item } = useContext(MainContext);
	const { allCars, isLoading, currentPage, totalItems } = useCars();
	const [searchParams, setSearchParams] = useState({
		make: '',
		price: '',
		from: '',
		to: '',
	});

	const { make, price, from, to } = searchParams || {};
	const visibleButton = Math.floor(totalItems / 12) >= currentPage;

	const handlerSearch = value => {
		setSearchParams(value);
	};

	const handlerFetchingCar = () => {
		if (isLoading) {
			toastError('Please waiting, fetching...');
			return;
		}
		dispatch(downloadCars({ page: currentPage + 1 }));
	};

	useEffect(() => {
		dispatch(clearState());
		dispatch(downloadCars());

		return () => {
			dispatch(clearState());
		};
	}, [dispatch]);

	const filtredCars =
		make !== '' || price !== '' || from !== '' || to !== ''
			? allCars.filter(
					car =>
						(car.make === make || make === '') &&
						(parseFloat(car.rentalPrice.replace('$', '')) >= parseFloat(price) ||
							price === '') &&
						(car.mileage >= parseFloat(from) || from === '') &&
						(car.mileage <= parseFloat(to) || to === '')
			  )
			: allCars;

	return (
		<>
			<Container>
				<Search onSearch={handlerSearch} />
				<ContainerItems>
					{filtredCars.map((item, i) => (
						<CarItem key={i} carInfo={item} />
					))}
				</ContainerItems>
				{visibleButton && totalItems > 12 && (
					<ButtonLoadMore type='button' onClick={handlerFetchingCar}>
						Load more
					</ButtonLoadMore>
				)}
			</Container>
			<ModalWindow isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
				<DetailsCar carDetails={item} />
			</ModalWindow>
		</>
	);
}

export default CatalogPage;
