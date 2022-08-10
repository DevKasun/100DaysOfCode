import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
	const handleToggleTodo = (id) => {
		toggleTodo(id);
	};
	const handleDeleteTodo = (id) => {
		deleteTodo(id);
	};

	return (
		<div className='todo-list pt-8 pl-2 pr-2'>
			{todos.map((todo) => {
				return (
					<div key={todo.id} className='pb-1 flex align-middle'>
						<span
							className='cursor-pointer pr-1 outline-none'
							onClick={(id) => handleToggleTodo(todo.id)}
						>
							{todo.complete ? '✅' : '⭕'}
						</span>
						{todo.title}
						<span
							className='cursor-pointer pl-3'
							onClick={(id) => handleDeleteTodo(todo.id)}
						>
							❌
						</span>
					</div>
				);
			})}
		</div>
	);
};

export default TodoList;
