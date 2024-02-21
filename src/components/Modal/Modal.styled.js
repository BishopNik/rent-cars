/** @format */

import styled from 'styled-components';
import Modal from 'react-modal';
import Icon from 'components/Icon';

export const ModalMain = styled(Modal)`
	width: fit-content;
	height: fit-content;
	border-radius: 8px;
	border: none;
	outline: none;
	overflow: hidden;
`;

export const customStyles = {
	overlay: {
		position: 'fixed',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		backgroundColor: 'rgba(18, 20, 23, 0.5)',
		zIndex: 999,
	},
	content: {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		padding: 40,
		borderRadius: 24,
		border: 'none',
		backgroundColor: 'rgb(255, 255, 255)',
		boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)',
		overflow: 'hidden',
	},
};

export const CloseButton = styled.button`
	position: absolute;
	top: 16px;
	right: 16px;
	width: 24px;
	height: 24px;
	background-color: transparent;
	border: none;
	border-radius: 4px;
	cursor: pointer;
	padding: 0;
	transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
		border 250ms cubic-bezier(0.4, 0, 0.2, 1);
	&:hover,
	&:focus {
		background-color: rgba(18, 20, 23, 0.1);
		border: 0.1px solid black;
	}
`;

export const IconClose = styled(Icon)`
	position: absolute;
	transform: translate(-50%, -50%);
	width: 24px;
	height: 24px;
	stroke: rgb(18, 20, 23);
	transition: stroke 250ms cubic-bezier(0.4, 0, 0.2, 1);
	&:hover,
	&:focus {
		stroke: blue;
	}
`;
