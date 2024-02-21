/** @format */

import React from 'react';
import { changeFormatPrice } from 'components/Helpers';
import {
	ModalContainer,
	ImgBox,
	TitleCar,
	BlueText,
	BlueTextBold,
	DataCar,
	DataCarItem,
	DescriptionCar,
	BlockCarContainer,
	TitleBlockCar,
	AccessoriesItems,
	AccessoriesItem,
	ConditionItems,
	ConditionItem,
	ButtonRentalCar,
	Separator,
} from 'components/DetailsCar/DetailsCar.styled';

export const DetailsCar = ({ carDetails }) => {
	const address = carDetails?.address.split(', ');
	const rentalConditions = carDetails?.rentalConditions.split('\n');
	const ageArray = rentalConditions[0].split(':');
	const age = parseInt(ageArray[1], 10);
	const license = rentalConditions[1];
	const security = rentalConditions[2];
	const mileage = carDetails.mileage.toLocaleString('en-US');
	const price = changeFormatPrice(carDetails.rentalPrice);

	return (
		<ModalContainer>
			<ImgBox src={carDetails.img} />
			<TitleCar>
				{carDetails.make} <BlueText>{carDetails.model}</BlueText>, {carDetails.year}
			</TitleCar>
			<DataCar>
				<DataCarItem>
					{address[1]}
					<Separator />
				</DataCarItem>
				<DataCarItem>
					{address[2]}
					<Separator />
				</DataCarItem>
				<DataCarItem>
					Id: {carDetails.id}
					<Separator />
				</DataCarItem>
				<DataCarItem>
					Year: {carDetails.year}
					<Separator />
				</DataCarItem>
				<DataCarItem>Type: {carDetails.type}</DataCarItem>
				<DataCarItem>
					Fuel Consumption: {carDetails.fuelConsumption}
					<Separator />
				</DataCarItem>
				<DataCarItem>Engine Size: {carDetails.engineSize}</DataCarItem>
			</DataCar>
			<DescriptionCar>{carDetails.description}</DescriptionCar>
			<BlockCarContainer>
				<TitleBlockCar>Accessories and functionalities:</TitleBlockCar>
				<AccessoriesItems>
					{carDetails?.accessories?.map((i, index) => (
						<AccessoriesItem key={i}>
							{i}
							{index !== carDetails.accessories.length - 1 && <Separator />}
						</AccessoriesItem>
					))}
				</AccessoriesItems>
				<AccessoriesItems>
					{carDetails?.functionalities?.map((i, index) => (
						<AccessoriesItem key={i}>
							{i}
							{index !== carDetails.accessories.length - 1 && <Separator />}
						</AccessoriesItem>
					))}
				</AccessoriesItems>
			</BlockCarContainer>
			<BlockCarContainer>
				<TitleBlockCar>Rental Conditions: </TitleBlockCar>
				<ConditionItems>
					<ConditionItem>
						Minimum age: <BlueTextBold>{age}</BlueTextBold>
					</ConditionItem>
					<ConditionItem>{license}</ConditionItem>
					<ConditionItem>{security}</ConditionItem>
					<ConditionItem>
						Mileage: <BlueTextBold>{mileage}</BlueTextBold>
					</ConditionItem>
					<ConditionItem>
						Price: <BlueTextBold>{price}</BlueTextBold>
					</ConditionItem>
				</ConditionItems>
			</BlockCarContainer>
			<ButtonRentalCar href='tel:+380730000000'>Rental car</ButtonRentalCar>
		</ModalContainer>
	);
};
