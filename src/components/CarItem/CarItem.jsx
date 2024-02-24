/** @format */

import { useContext, useState } from 'react';
import { MainContext } from 'components/Helpers';
import {
	Container,
	ImgContainer,
	ButtonLearnMore,
	TitleCar,
	TitleCarBlue,
	TitleContainer,
	CarAbout,
	CarAboutRow,
	CarAboutContainer,
	CarAboutItem,
	Separator,
	LikeButton,
	IconLike,
} from './CarItem.styled';
import { useDispatch } from 'react-redux';
import { useFavorites } from 'hooks';
import { addFavorite, removeFavorite } from 'redux/favorites/favotiresSlice';

export const CarItem = ({ carInfo }) => {
	const dispatch = useDispatch();
	const { setIsOpen, setItem } = useContext(MainContext);
	const { allFavoritesCars } = useFavorites();
	const [liked, setLiked] = useState(
		allFavoritesCars.filter(item => item._id === carInfo._id).length > 0
	);

	const address = carInfo?.address.split(', ');

	const addFavoriteCar = item => {
		if (liked) {
			dispatch(removeFavorite(item));
			setLiked(false);
		} else {
			dispatch(addFavorite(item));
			setLiked(true);
		}
	};

	const handlerOpenModal = () => {
		setItem(carInfo);
		setIsOpen(true);
	};

	return (
		<Container>
			<LikeButton onClick={() => addFavoriteCar(carInfo)}>
				<IconLike name='like-car' liked={liked.toString()} />
			</LikeButton>
			<ImgContainer src={carInfo.img} />
			<TitleContainer>
				<TitleCar>
					{carInfo.make} <TitleCarBlue>{carInfo.model}</TitleCarBlue>, {carInfo.year}
				</TitleCar>
				<TitleCar>{carInfo.rentalPrice}</TitleCar>
			</TitleContainer>
			<CarAboutContainer>
				<CarAbout>
					<CarAboutRow>
						<CarAboutItem>
							{address[1]}
							<Separator />
						</CarAboutItem>
						<CarAboutItem>
							{address[2]}
							<Separator />
						</CarAboutItem>
						<CarAboutItem>{carInfo.rentalCompany}</CarAboutItem>
					</CarAboutRow>
					<CarAboutRow>
						<CarAboutItem>
							{carInfo.type}
							<Separator />
						</CarAboutItem>
						<CarAboutItem>
							{carInfo.model}
							<Separator />
						</CarAboutItem>
						<CarAboutItem>
							{carInfo.mileage}
							<Separator />
						</CarAboutItem>
						<CarAboutItem>{carInfo.functionalities[0]}</CarAboutItem>
					</CarAboutRow>
				</CarAbout>
			</CarAboutContainer>
			<ButtonLearnMore onClick={handlerOpenModal}>Learn more</ButtonLearnMore>
		</Container>
	);
};
