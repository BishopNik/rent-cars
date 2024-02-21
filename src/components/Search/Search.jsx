/** @format */

import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
	text: Yup.string().required('Required'),
	price: Yup.number().required('Required'),
	number1: Yup.number().required('Required'),
	number2: Yup.number().required('Required'),
});

const initialValues = {
	text: '',
	price: '',
	number1: '',
	number2: '',
};

export const Search = () => (
	<Formik
		initialValues={initialValues}
		validationSchema={validationSchema}
		onSubmit={(values, { setSubmitting }) => {
			setTimeout(() => {
				alert(JSON.stringify(values, null, 2));
				setSubmitting(false);
			}, 400);
		}}
	>
		{({ isSubmitting }) => (
			<Form>
				<div>
					<label htmlFor='text'>Text</label>
					<Field type='text' name='text' />
					<ErrorMessage name='text' component='div' />
				</div>

				<div>
					<label htmlFor='price'>Price</label>
					<Field type='number' name='price' />
					<ErrorMessage name='price' component='div' />
				</div>

				<div>
					<label htmlFor='number1'>Number 1</label>
					<Field type='number' name='number1' />
					<ErrorMessage name='number1' component='div' />
				</div>

				<div>
					<label htmlFor='number2'>Number 2</label>
					<Field type='number' name='number2' />
					<ErrorMessage name='number2' component='div' />
				</div>

				<button type='submit' disabled={isSubmitting}>
					Submit
				</button>
			</Form>
		)}
	</Formik>
);
