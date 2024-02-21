/** @format */

import { useContext } from 'react';
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

export const CarItem = ({ carInfo }) => {
	const { setIsOpen, setItem } = useContext(MainContext);
	const liked = 'false';
	const address = carInfo?.address.split(', ');

	return (
		<Container
			onClick={() => {
				setItem(carInfo);
				setIsOpen(true);
			}}
		>
			<LikeButton onClick={() => console.log('run')}>
				<IconLike name='like-car' liked={liked} />
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
			<ButtonLearnMore>Learn more</ButtonLearnMore>
		</Container>
	);
};
