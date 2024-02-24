/** @format */

import React, { useContext, useState, useEffect } from 'react';
import { Search } from 'components/Search';
import {
	Container,
	ContainerItems,
	ButtonLoadMore,
	ImgNotFound,
} from 'components/styled.component';
import { MainContext, toastError } from 'components/Helpers';
import { CarItem } from 'components/CarItem';
import { DetailsCar } from 'components/DetailsCar';
import ModalWindow from 'components/Modal';
import { useCars } from 'hooks';
import { useDispatch } from 'react-redux';
import { getCars } from 'redux/cars/operations';
import { clearState } from 'redux/cars/carsSlice';
import { initialValues } from 'components/Search';

function CatalogPage() {
	const dispatch = useDispatch();
	const { isOpen, setIsOpen, item } = useContext(MainContext);
	const { allCars, isLoading, currentPage, totalItems } = useCars();
	const [searchParams, setSearchParams] = useState(initialValues);

	const visibleButton = Math.floor(totalItems / 12) >= currentPage;

	const handlerSearch = value => {
		setSearchParams(value);
		dispatch(clearState());
		dispatch(
			getCars({
				page: 1,
				...value,
			})
		);
	};

	const handlerFetchingCar = () => {
		if (isLoading) {
			toastError('Please waiting, fetching...');
			return;
		}
		dispatch(
			getCars({
				page: currentPage + 1,
				...searchParams,
			})
		);
	};

	useEffect(() => {
		dispatch(clearState());
		dispatch(
			getCars({
				page: 1,
			})
		);

		return () => {
			dispatch(clearState());
		};
	}, [dispatch]);

	return (
		<>
			<Container>
				<Search onSearch={handlerSearch} />
				<ContainerItems>
					{allCars.length > 0 ? (
						allCars.map((item, i) => <CarItem key={i} carInfo={item} />)
					) : !isLoading ? (
						<ImgNotFound
							src='https://cdn.dribbble.com/users/2382015/screenshots/6065978/no_result.gif'
							alt='Not Found'
						/>
					) : null}
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
