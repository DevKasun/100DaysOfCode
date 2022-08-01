import React from 'react';

const TodoList = ({ todos }) => {

	return (
		<div className='todo-list pt-8 pl-2 pr-2'>
			{todos.map((todo) => {
				return (
					<div key={todo.id} className='pb-1'>
						{todo.title}
					</div>
				);
			})}
		</div>
	);
};

export default TodoList;
