import React from 'react';

import TodoApp from './ToDoApp/TodoForm';

const HandleForm = () => {
	return (
		<div className='grid grid-cols-3 gap-4'>
			<div className='todo-app'>
				<TodoApp />
			</div>
		</div>
	);
};

export default HandleForm;
