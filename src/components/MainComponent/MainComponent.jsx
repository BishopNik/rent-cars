/** @format */

import React from 'react';
import carDetails from 'data/adsCars.json';
import { CarItem } from 'components/CarItem';

export function MainComponent() {
	return (
		<>
			{carDetails.map((item, i) => (
				<CarItem key={i} carInfo={item} />
			))}
		</>
	);
}
