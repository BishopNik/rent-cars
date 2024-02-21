/** @format */

import React, { useContext } from 'react';
import { MainComponent } from 'components/MainComponent';
import { Search } from 'components/Search';
import { Container, ContainerItems } from 'components/MainComponent/MainComponent.styled';
import { MainContext } from 'components/Helpers';
import { DetailsCar } from 'components/DetailsCar';
import ModalWindow from 'components/Modal';

function CatalogPage() {
	const { isOpen, setIsOpen, item } = useContext(MainContext);

	return (
		<Container>
			<Search />
			<ContainerItems>
				<MainComponent />
			</ContainerItems>
			<ModalWindow isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
				<DetailsCar carDetails={item} />
			</ModalWindow>
		</Container>
	);
}

export default CatalogPage;
