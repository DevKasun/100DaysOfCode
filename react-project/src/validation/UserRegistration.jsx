import * as yup from 'yup';

export const userSchema = yup.object().shape({
	name: yup.string().required(),
	email: yup.string().required(),
	password: yup.string().required(),
	confirmPassword: yup
		.string()
		.label('confirm password')
		.required()
		.oneOf([yup.ref('password'), null], 'Passwords must match'),
});
