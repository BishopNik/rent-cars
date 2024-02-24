/** @format */

import React, { useEffect } from 'react';
import { Formik } from 'formik';
import {
	FormStyled,
	Label,
	SearchBox,
	ButtonSearch,
	Model,
	PriceInHour,
	From,
	To,
	IconSelect,
	DivIcon,
} from './Search.styled';
import { useParams } from 'hooks';
import { useDispatch } from 'react-redux';
import { clearState } from 'redux/params/paramsSlice';
import { getParams } from 'redux/params/operations';

export const initialValues = {
	make: '',
	price: '',
	from: '',
	to: '',
};

export const Search = ({ onSearch }) => {
	const dispatch = useDispatch();
	const { makes, min, max } = useParams();

	useEffect(() => {
		dispatch(clearState());
		dispatch(getParams());
	}, [dispatch]);

	return (
		<Formik
			initialValues={initialValues}
			onSubmit={(values, { setSubmitting }) => {
				onSearch(values);
				setSubmitting(false);
			}}
		>
			{({ isSubmitting, handleChange, values }) => (
				<FormStyled>
					<SearchBox>
						<Label htmlFor='make'>Car brand</Label>
						<DivIcon>
							<Model
								as='select'
								name='make'
								value={values.make}
								onChange={handleChange}
							>
								<option value=''>Enter the text</option>
								{makes.map(car => (
									<option key={car} value={car}>
										{car}
									</option>
								))}
							</Model>
							<IconSelect name='chevron-down' />
						</DivIcon>
					</SearchBox>

					<SearchBox>
						<Label htmlFor='price'>Price/ 1 hour</Label>
						<DivIcon>
							<PriceInHour
								as='select'
								name='price'
								value={values.price}
								onChange={handleChange}
							>
								<option value=''>To $</option>
								{Array.from({ length: max - min }, (_, step) => (
									<option key={step} value={(step + min) * 10}>
										To {(step + min) * 10}
									</option>
								))}
							</PriceInHour>
							<IconSelect name='chevron-down' />
						</DivIcon>
					</SearchBox>

					<SearchBox>
						<Label htmlFor='from'>Сar mileage / km</Label>
						<div>
							<From type='text' name='from' placeholder='From' />
							<To type='text' name='to' placeholder='To' />
						</div>
					</SearchBox>

					<ButtonSearch type='submit' disabled={isSubmitting}>
						Submit
					</ButtonSearch>
					<ButtonSearch type='reset' onClick={() => onSearch(initialValues)}>
						X
					</ButtonSearch>
				</FormStyled>
			)}
		</Formik>
	);
};
