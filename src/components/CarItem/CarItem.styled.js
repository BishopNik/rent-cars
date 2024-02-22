/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon';

export const Container = styled.div`
	position: relative;
	width: 274px;
	height: 426px;
`;

export const ImgContainer = styled.div`
	width: 274px;
	height: 268px;
	margin-bottom: 14px;
	border-radius: 14px;
	background: ${({ src }) =>
		`linear-gradient(180deg, rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.071%), url(${src})`};
	background-position: center;
	background-size: cover;
`;

export const TitleContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 4px;
	margin-bottom: 8px;
	padding-right: 10px;
`;

export const TitleCar = styled.p`
	width: fit-content;
	max-width: 220px;
	margin: 0;
	padding: 0;
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	white-space: nowrap;
	overflow: scroll;
`;

export const TitleCarBlue = styled.span`
	color: rgb(52, 112, 255);
`;

export const CarAboutContainer = styled.div`
	padding-right: 10px;
`;

export const CarAbout = styled.div`
	display: flex;
	align-items: center;
	flex-wrap: wrap;
	row-gap: 4px;
	margin: 0 0 28px 0;
	padding: 0;
	color: rgba(18, 20, 23, 0.5);
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
`;

export const CarAboutRow = styled.ul`
	display: flex;
	align-items: center;
	flex-wrap: nowrap;
	margin: 0;
	padding: 0;
	list-style: none;
	overflow: hidden;
`;

export const CarAboutItem = styled.li`
	max-width: 135px;
	white-space: nowrap;
`;

export const ButtonLearnMore = styled.button`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 12px 99px 12px 99px;
	border-radius: 12px;
	border: none;
	background-color: rgb(52, 112, 255);
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	color: rgb(255, 255, 255);
	font-size: 14px;
	font-weight: 600;
	line-height: 20px;
	cursor: pointer;

	&:hover {
		background-color: rgb(11, 68, 205);
	}
`;

export const Separator = styled.span`
	height: 16px;
	margin-left: 6px;
	margin-right: 6px;
	border-right: 1px solid rgba(18, 20, 23, 0.1);
`;

export const LikeButton = styled.button`
	position: absolute;
	top: 14px;
	right: 14px;
	width: 18px;
	height: 18px;
	background-color: transparent;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	padding: 0;
`;

export const IconLike = styled(Icon)`
	position: absolute;
	transform: translate(-50%, -50%);
	width: 24px;
	height: 24px;
	stroke: ${({ liked }) => (liked === 'true' ? 'rgb(52, 112, 255)' : 'rgba(255, 255, 255, 0.8)')};
	fill: ${({ liked }) => (liked === 'true' ? 'rgb(52, 112, 255)' : 'transparent')};
`;
