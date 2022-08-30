import React, { useState } from 'react';
import Button from '../../../Button/Button';
import Form from '../../../Form/Form';
import Input from '../../../Input/Input';

import { userSchema } from './../../../../validation/UserRegistration';

const UserRegistration = () => {
	const [isUserRegistered, setUserRegistered] = useState(false);

	const createUser = async (event) => {
		event.preventDefault();
		let formData = {
			name: event.target[0].value,
			email: event.target[1].value,
			password: event.target[2].value,
			confirmPassword: event.target[3].value,
		};
		const checkIsValid = await userSchema.isValid(formData);
		setUserRegistered(checkIsValid);
		setTimeout(() => {
			if (checkIsValid) {
				event.target[0].value = '';
				event.target[1].value = '';
				event.target[2].value = '';
				event.target[3].value = '';
			}
			setUserRegistered(false);
		}, 5000);
	};

	return (
		<>
			<Form
				onSubmit={createUser}
				className='bg-slate-50'
				title='YUP validation'
			>
				<div className='pb-4'>
					<Input type='text' placeholder='Name' />
				</div>
				<div className='pb-4'>
					<Input type='text' placeholder='Email' />
				</div>
				<div className='pb-4'>
					<Input type='password' placeholder='Password' />
				</div>
				<div className='pb-4'>
					<Input type='password' placeholder='Confirm password' />
				</div>
				<div>
					<Button type='submit'>Register</Button>
				</div>
				<div>
					<p className='pt-4 text-green-500'>
						{isUserRegistered ? 'Registered successfully!' : null}
					</p>
				</div>
			</Form>
		</>
	);
};

export default UserRegistration;
