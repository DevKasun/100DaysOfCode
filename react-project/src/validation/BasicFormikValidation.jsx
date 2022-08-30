import * as yup from 'yup';

export const newUserSchema = yup.object().shape({
	userName: yup.string().required('Name is a required field'),
	userEmail: yup
		.string()
		.email('Invalid email')
		.required('Email is a required field'),
	userPassword: yup
		.string()
		.min(4, 'Too Short!')
		.max(10, 'Too Long!')
		.required('Please enter your password'),
});
