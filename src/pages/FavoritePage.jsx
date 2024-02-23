/** @format */

import React, { useContext } from 'react';
import { MainContext } from 'components/Helpers';
import { Container, ContainerItems } from 'components/styled.component';
import { DetailsCar } from 'components/DetailsCar';
import { CarItem } from 'components/CarItem';
import ModalWindow from 'components/Modal';
import { useFavorites } from 'hooks';

const FavoritePage = () => {
	const { isOpen, setIsOpen, item } = useContext(MainContext);
	const { allFavoritesCars } = useFavorites();

	return (
		<Container>
			<ContainerItems>
				{allFavoritesCars.map((item, i) => (
					<CarItem key={i} carInfo={item} />
				))}
			</ContainerItems>
			<ModalWindow isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
				<DetailsCar carDetails={item} />
			</ModalWindow>
		</Container>
	);
};

export default FavoritePage;
