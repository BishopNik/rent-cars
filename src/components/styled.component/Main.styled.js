/** @format */

import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	margin-left: auto;
	margin-right: auto;
	padding: 30px 128px 150px;
`;

export const ContainerItems = styled.div`
	display: flex;
	flex-wrap: wrap;
	row-gap: 50px;
	column-gap: 29px;
	width: 1185px;
	margin-right: auto;
	margin-left: auto;
`;

export const ButtonLoadMore = styled.button`
	padding-top: 50px;
	border: none;
	background-color: transparent;
	color: rgb(52, 112, 255);
	font-size: 16px;
	font-weight: 500;
	line-height: 24px;
	text-decoration-line: underline;
	cursor: pointer;

	&:hover {
		color: rgb(11, 68, 205);
	}
`;
