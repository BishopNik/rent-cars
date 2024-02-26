/** @format */

import React, { useContext } from 'react';
import { MainContext } from 'components/Helpers';
import { Container, ContainerItems, ImgNotFound } from 'components/styled.component';
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
				{allFavoritesCars.length > 0 ? (
					allFavoritesCars.map((item, i) => <CarItem key={i} carInfo={item} />)
				) : (
					<ImgNotFound
						src='https://i.pinimg.com/564x/ae/8a/c2/ae8ac2fa217d23aadcc913989fcc34a2.jpg'
						alt='Empty Favorites'
						width={700}
					/>
				)}
			</ContainerItems>
			<ModalWindow isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
				<DetailsCar carDetails={item} />
			</ModalWindow>
		</Container>
	);
};

export default FavoritePage;
