/** @format */

import styled from 'styled-components';
import Icon from 'components/Icon';

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

export const Main = styled.div`
	position: relative;
	width: 100vw;
	height: 90vh;
	background-image: linear-gradient(to bottom, rgba(46, 47, 66, 0.7), rgba(46, 47, 66, 0.5)),
		url('https://static.wixstatic.com/media/9230f8_733b705262044e328bfd341a50b23b38~mv2.jpg/v1/crop/x_648,y_346,w_752,h_587,q_85,enc_auto/9230f8_733b705262044e328bfd341a50b23b38~mv2.jpg');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
`;

export const TextContainer = styled.div`
	position: absolute;
	right: 50px;
	top: 100px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 50px;
	width: 900px;
	height: fit-content;
	padding: 45px;
	background-color: white;
	border-radius: 20px;
`;

export const Title = styled.h1`
	padding: 0;
	margin: 0;
	color: rgb(18, 20, 23);
`;

export const Text = styled.p`
	padding: 0;
	margin: 0;
	text-align: justify;
	font-weight: 400;
	font-size: 18px;
	color: rgb(18, 20, 23);
`;

export const IconLogo = styled(Icon)`
	width: 80px;
	height: 80px;
	stroke: rgb(18, 20, 23);
	fill: rgb(18, 20, 23);
`;

export const ImgNotFound = styled.img`
	margin-left: auto;
	margin-right: auto;
`;
