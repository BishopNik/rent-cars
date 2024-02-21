/** @format */

import styled from 'styled-components';

export const ModalContainer = styled.div`
	width: 461px;
	color: rgb(18, 20, 23);
`;

export const ImgBox = styled.div`
	width: 100%;
	height: 248px;
	margin-bottom: 14px;
	border-radius: 14px;
	background: ${({ src }) => (src ? `url(${src})` : 'rgb(243, 243, 242)')};
	background-position: center;
	background-size: cover;
`;

export const TitleCar = styled.h2`
	padding: 0;
	margin: 0 0 8px 0;
	font-size: 18px;
	font-weight: 500;
	line-height: 24px;
	text-align: left;
`;

export const BlueText = styled.span`
	color: rgb(52, 112, 255);
`;

export const BlueTextBold = styled.span`
	color: rgb(52, 112, 255);
	font-weight: 600;
`;

export const DataCar = styled.ul`
	display: flex;
	flex-wrap: wrap;
	row-gap: 4px;
	width: 300px;
	margin: 0 0 14px 0;
	padding: 0;
	color: rgba(18, 20, 23, 0.5);
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	list-style: none;
`;

export const DataCarItem = styled.li`
	display: flex;
	align-items: center;
`;

export const DescriptionCar = styled.p`
	width: 100%;
	padding: 0;
	margin: 0 0 24px 0;
	color: rgb(18, 20, 23);
	font-size: 14px;
	font-weight: 400;
	line-height: 20px;
	text-align: left;
`;

export const BlockCarContainer = styled.div`
	width: 100%;
	margin-bottom: 24px;
`;

export const TitleBlockCar = styled.p`
	width: 100%;
	padding: 0;
	margin: 0 0 8px 0;
	font-size: 14px;
	font-weight: 500;
	line-height: 20px;
	text-align: left;
`;

export const AccessoriesItems = styled.ul`
	display: flex;
	justify-content: start;
	flex-wrap: wrap;
	padding: 0;
	margin: 0 0 8px 0;

	&:last-child {
		margin: 0;
	}
`;

export const AccessoriesItem = styled.li`
	display: flex;
	align-items: center;
	height: 18px;
	color: rgba(18, 20, 23, 0.5);
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	text-align: left;
	list-style: none;
`;

export const ConditionItems = styled.ul`
	display: flex;
	flex-wrap: wrap;
	gap: 8px;
	width: 90%;
	margin: 0;
	padding: 0;
`;

export const ConditionItem = styled.li`
	width: fit-content;
	height: 32px;
	padding: 7px 14px 7px 14px;
	border-radius: 35px;
	background-color: rgb(249, 249, 249);
	color: rgb(54, 53, 53);
	font-size: 12px;
	font-weight: 400;
	line-height: 18px;
	list-style: none;
`;

export const ButtonRentalCar = styled.a`
	width: 168px;
	height: 44px;
	right: 333px;
	bottom: 40px;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 12px 50px 12px 50px;
	border-radius: 12px;
	background-color: rgb(52, 112, 255);
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	color: rgb(255, 255, 255);
	font-size: 14px;
	font-weight: 600;
	line-height: 20px;
	text-decoration: none;

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
