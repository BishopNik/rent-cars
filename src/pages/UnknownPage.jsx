/** @format */

import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const UnknownPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate('/');
	}, [navigate]);

	return null;
};

export default UnknownPage;
