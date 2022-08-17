import React from 'react';
import { Formik, Field, Form } from 'formik';

import Label from '../../../Label/Label';
import Button from '../../../Button/Button';

const BasicFormik = () => {
	return (
		<div className='flex items-center justify-center form-wrapper py-12 bg-green-300 rounded-lg bg-slate-50'>
			<div className='wrapper text-left w-full max-w-2xl p-8 bg-slate-50 shadow-lg rounded-xl overflow-hidden'>
				<Formik
					initialValues={{
						name: '',
						email: '',
						password: '',
					}}
					onSubmit={async (values) => {
						await new Promise((r) => {
							setTimeout(r, 500);
						});
						alert(JSON.stringify(values, null, 2));
					}}
				>
					<Form>
						<h3 className='text-xl'>Basic Formik form</h3>
						<div className='pb-4'>
							<Label htmlFor='name'>Name</Label>
							<Field
								type='text'
								id='name'
								name='name'
								placeholder='John Doe'
								className='bg-slate-50 w-full border-2 border-solid border-gray-600 rounded-md p-2 focus:border-emerald-400'
							/>
						</div>
						<div className='pb-4'>
							<Label htmlFor='email'>Email</Label>
							<Field
								type='email'
								id='email'
								name='email'
								placeholder='ex: johndoe@mail.com'
								className='bg-slate-50 w-full border-2 border-solid border-gray-600 rounded-md p-2 focus:border-emerald-400'
							/>
						</div>
						<div className='pb-4'>
							<Label htmlFor='password'>Password</Label>
							<Field
								type='password'
								id='password'
								name='password'
								placeholder='password'
								className='bg-slate-50 w-full border-2 border-solid border-gray-600 rounded-md p-2 focus:border-emerald-400'
							/>
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
