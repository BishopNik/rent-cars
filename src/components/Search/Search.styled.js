/** @format */

import styled from 'styled-components';
import { Form, Field } from 'formik';
import Icon from 'components/Icon';

export const FormStyled = styled(Form)`
	display: flex;
	align-items: end;
	gap: 18px;
`;

export const SearchBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
`;

export const Label = styled.label`
	color: rgb(138, 138, 137);
	font-size: 14px;
	font-weight: 500;
	line-height: 18px;
`;

export const Model = styled(Field)`
	width: 224px;
	height: 48px;
	padding: 0 14px;
	border-radius: 18px;
	border: none;
	color: rgb(18, 20, 23);
	background: rgb(247, 247, 251);

	font-size: 18px;
	font-weight: 500;
	line-height: 20px;

	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	-o-appearance: none;
	-ms-appearance: none;
`;

export const PriceInHour = styled(Field)`
	width: 125px;
	height: 48px;
	padding: 0 14px;
	border-radius: 18px;
	border: none;
	color: rgb(18, 20, 23);
	background: rgb(247, 247, 251);

	font-size: 18px;
	font-weight: 500;
	line-height: 20px;

	appearance: none;
	-webkit-appearance: none;
	-moz-appearance: none;
	-o-appearance: none;
	-ms-appearance: none;
`;

export const From = styled(Field)`
	width: 168px;
	height: 48px;
	padding: 0 24px;
	border-radius: 14px 0px 0px 14px;
	border: none;
	border-right: 1px solid rgba(138, 138, 137, 0.2);
	color: rgb(18, 20, 23);
	background: rgb(247, 247, 251);

	font-size: 18px;
	font-weight: 500;
	line-height: 20px;

	&::placeholder {
		color: rgb(18, 20, 23);
	}
`;

export const To = styled(Field)`
	width: 168px;
	height: 48px;
	padding: 0 24px;
	border-radius: 0px 14px 14px 0px;
	border: none;
	color: rgb(18, 20, 23);
	background: rgb(247, 247, 251);

	font-size: 18px;
	font-weight: 500;
	line-height: 20px;

	&::placeholder {
		color: rgb(18, 20, 23);
	}
`;

export const ButtonSearch = styled.button`
	height: 48px;
	border-radius: 12px;
	background-color: rgb(52, 112, 255);
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
	padding: 14px 44px;
	border: none;
	cursor: pointer;

	color: rgb(255, 255, 255);
	font-size: 14px;
	font-weight: 600;
	line-height: 20px;

	&:hover {
		background-color: rgb(11, 68, 205);
	}
`;

export const DivIcon = styled.div`
	position: relative;
`;

export const IconSelect = styled(Icon)`
	position: absolute;
	right: 7px;
	top: 20px;
	width: 20px;
	height: 20px;
	stroke: #121417;
	fill: transparent;
	pointer-events: none;
`;
