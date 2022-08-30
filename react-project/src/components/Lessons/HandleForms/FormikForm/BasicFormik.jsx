import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

import Label from '../../../Label/Label';
import Button from '../../../Button/Button';

const BasicFormik = () => {
	const initialValues = {
		name: '',
		social: {
			instagram: '',
			twitter: '',
		},
		phoneNumbers: ['', ''],
		email: '',
		password: '',
	};
	const onSubmit = (values) => {
		console.log(values);
	};

	const newUserSchema = yup.object().shape({
		name: yup.string().required('Name is a required field'),
		social: yup.object({
			instagram: yup
				.string()
				.required('Please enter your instagram username'),
			twitter: yup
				.string()
				.required('Please enter your twitter username'),
		}),
		email: yup
			.string()
			.email('Invalid email')
			.required('Email is a required field'),
		password: yup
			.string()
			.min(4, 'Too Short!')
			.max(10, 'Too Long!')
			.required('Please enter your password'),
	});

	return (
		<div className='flex items-center justify-center form-wrapper py-12 rounded-lg bg-slate-50'>
			<div className='wrapper text-left w-full max-w-2xl p-8 bg-slate-50 shadow-lg rounded-xl overflow-hidden'>
				<Formik
					initialValues={initialValues}
					validationSchema={newUserSchema}
					onSubmit={onSubmit}
					validateOnMount
				>
					<Form>
						<h3 className='text-xl pb-2'>
							Formik/Yup form validation
						</h3>
						<p className='pb-4'>
							Pops out errors when submitting the form and
							revisited the input fields
						</p>
						<div className='pb-4'>
							<Label htmlFor='name'>Name</Label>
							<Field
								type='text'
								id='name'
								name='name'
								placeholder='John Doe'
								autoComplete='off'
								className='bg-slate-50 w-full border-2 border-solid border-gray-600 rounded-md p-2 focus:border-emerald-400'
							/>
							<ErrorMessage name='name'>
								{(errorMsg) => (
									<div className='pt-2 text-red-600'>
										{errorMsg}
									</div>
								)}
							</ErrorMessage>
						</div>
						<div className='pb-4'>
							<Label htmlFor='name'>Instagram username</Label>
							<Field
								type='text'
								id='instagram'
								name='social.instagram'
								placeholder='Ex: devkasun'
								autoComplete='off'
								className='bg-slate-50 w-full border-2 border-solid border-gray-600 rounded-md p-2 focus:border-emerald-400'
							/>
							<ErrorMessage name='social.instagram'>
								{(errorMsg) => (
									<div className='pt-2 text-red-600'>
										{errorMsg}
									</div>
								)}
							</ErrorMessage>
						</div>
						<div className='pb-4'>
							<Label htmlFor='name'>Twitter username</Label>
							<Field
								type='text'
								id='twitter'
								name='social.twitter'
								placeholder='Ex: devkasun'
								autoComplete='off'
								className='bg-slate-50 w-full border-2 border-solid border-gray-600 rounded-md p-2 focus:border-emerald-400'
							/>
							<ErrorMessage name='social.twitter'>
								{(errorMsg) => (
									<div className='pt-2 text-red-600'>
										{errorMsg}
									</div>
								)}
							</ErrorMessage>
						</div>
						<div className='pb-4'>
							<Label htmlFor='password'>
								Primary telephone number(optional)
							</Label>
							<Field
								type='text'
								id='primaryNumber'
								name='phoneNumbers[0]'
								placeholder='+94 7* *** ***'
								autoComplete='off'
								className='bg-slate-50 w-full border-2 border-solid border-gray-600 rounded-md p-2 focus:border-emerald-400'
							/>
							<ErrorMessage name='phoneNumbers[0]'>
								{(errorMsg) => (
									<div className='pt-2 text-red-600'>
										{errorMsg}
									</div>
								)}
							</ErrorMessage>
						</div>
						<div className='pb-4'>
							<Label htmlFor='password'>
								Secondary telephone number(optional)
							</Label>
							<Field
								type='text'
								id='secondaryNumber'
								name='phoneNumbers[1]'
								placeholder='+94 7* *** ***'
								autoComplete='off'
								className='bg-slate-50 w-full border-2 border-solid border-gray-600 rounded-md p-2 focus:border-emerald-400'
							/>
							<ErrorMessage name='phoneNumbers[1]'>
								{(errorMsg) => (
									<div className='pt-2 text-red-600'>
										{errorMsg}
									</div>
								)}
							</ErrorMessage>
						</div>
						<div className='pb-4'>
							<Label htmlFor='email'>Email</Label>
							<Field
								type='email'
								id='email'
								name='email'
								placeholder='ex: johndoe@mail.com'
								autoComplete='off'
								className='bg-slate-50 w-full border-2 border-solid border-gray-600 rounded-md p-2 focus:border-emerald-400'
							/>
							<ErrorMessage name='email'>
								{(errorMsg) => (
									<div className='pt-2 text-red-600'>
										{errorMsg}
									</div>
								)}
							</ErrorMessage>
						</div>
						<div className='pb-4'>
							<Label htmlFor='password'>Password</Label>
							<Field
								type='password'
								id='password'
								name='password'
								placeholder='password'
								autoComplete='off'
								className='bg-slate-50 w-full border-2 border-solid border-gray-600 rounded-md p-2 focus:border-emerald-400'
							/>
							<ErrorMessage name='password'>
								{(errorMsg) => (
									<div className='pt-2 text-red-600'>
										{errorMsg}
									</div>
								)}
							</ErrorMessage>
						</div>
						<div>
							<Button type='submit'>Submit</Button>
						</div>
					</Form>
				</Formik>
			</div>
		</div>
	);
};

export default BasicFormik;
