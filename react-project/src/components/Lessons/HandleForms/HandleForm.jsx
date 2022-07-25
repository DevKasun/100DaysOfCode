import React, { useState } from 'react';

import Grid from '../../Layout/Grid/Grid';
import TodoApp from './ToDoApp/TodoForm';

const HandleForm = () => {
	return (
		<Grid>
			<div className='todo-app'>
				<TodoApp />
			</div>
		</Grid>
	);
};

export default HandleForm;
