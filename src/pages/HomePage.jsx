/** @format */

import React from 'react';
import { Main, TextContainer, Title, Text, IconLogo } from 'components/styled.component';

function HomePage() {
	return (
		<Main>
			<TextContainer>
				<Title>Travel your way</Title>
				<Text>
					When we started in 2003, we set out to do things differently. We wanted to show
					travelers all flight options in one place, creating a simple alternative to the
					confusing sites that make travel feel like hard work. Fast forward to today and
					we"re a global leader in travel, with more than 100 million people across the
					world using our app and website every month. We pride ourselves on being
					transparent and unbiased, searching billions of prices for flights, hotels and
					car rentals to help find the best deals available. We"re on a mission to help
					travelers plan and book their trips with ease and confidence. Whether it"s using
					technology to make the complex simple or connecting travelers with trusted
					partners to provide honest and transparent solutions, we"re determined to help
					everyone find the best offer for them.
				</Text>
				<Text>
					Our vision is to help every traveler explore the world effortlessly, for
					generations to come.
				</Text>
				<IconLogo name='logo' />
			</TextContainer>
		</Main>
	);
}

export default HomePage;
