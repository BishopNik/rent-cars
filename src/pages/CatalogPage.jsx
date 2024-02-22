/** @format */

import React, { useContext, useState } from 'react';
import { Search } from 'components/Search';
import { Container, ContainerItems, ButtonLoadMore } from 'components/styled.component/Main.styled';
import { MainContext } from 'components/Helpers';
import { CarItem } from 'components/CarItem';
import { DetailsCar } from 'components/DetailsCar';
import ModalWindow from 'components/Modal';
import { useCars } from 'hooks';

function CatalogPage() {
	const { isOpen, setIsOpen, item } = useContext(MainContext);
	const { allCars } = useCars();
	const [searchParams, setSearchParams] = useState({
		make: '',
		price: '',
		from: '',
		to: '',
	});

	const handlerSearch = value => {
		setSearchParams(value);
	};

	const { make, price, from, to } = searchParams;

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
				<ButtonLoadMore type='button'>Load more</ButtonLoadMore>
			</Container>
			<ModalWindow isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
				<DetailsCar carDetails={item} />
			</ModalWindow>
		</>
	);
}

export default CatalogPage;
