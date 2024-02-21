/** @format */

import React from 'react';
import Modal from 'react-modal';
import { customStyles, ModalMain, CloseButton, IconClose } from './Modal.styled';

Modal.setAppElement('#modal-root');

const ModalWindow = ({ children, isOpen, onRequestClose }) => {
	isOpen ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');

	return (
		<ModalMain
			isOpen={isOpen}
			onRequestClose={onRequestClose}
			style={customStyles}
			contentLabel='onRequestClose'
		>
			<CloseButton onClick={onRequestClose}>
				<IconClose name='close-modal' />
			</CloseButton>
			{children}
		</ModalMain>
	);
};

export default ModalWindow;
