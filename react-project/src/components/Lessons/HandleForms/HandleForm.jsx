import React from 'react';

import TodoApp from './ToDoApp/TodoForm';
import YupFormValidation from './FormValidationWithYup/YupFormValidation';
import BasicFormik from './FormikForm/BasicFormik';

const HandleForm = () => {
	return (
		<div className='grid grid-cols-3 gap-4'>
			<div className='todo-app'>
				<TodoApp />
			</div>
			<div className='yup-form'>
				<YupFormValidation />
			</div>
			<div className='formik-form-basic'>
				<BasicFormik />
			</div>
		</div>
	);
};

export default HandleForm;
