import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../../Button/Button';
import Form from '../../../Form/Form';
import Input from '../../../Input/Input';
import TodoList from './TodoList';

const TodoForm = () => {
	const uuid = uuidv4();

	const { title, setTitle } = useState('');
	const [todos, setTodos] = useState([
		{
			id: uuid,
			title: 'Read the book',
		},
		{
			id: uuid,
			title: 'UI/UX for the website',
		},
	]);

	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<>
			<Form onSubmit={handleSubmit} className='bg-slate-50' title='ToDos'>
				<div className='pb-4'>
					<Input
						type='text'
						name='todo'
						value={title}
						onChange={(e) => setTitle(e.target.value)}
						placeholder='Add to todo list'
					/>
				</div>
				<div>
					<Button type='submit'>Add</Button>
				</div>
				<TodoList todos={todos} />
			</Form>
		</>
	);
};

export default TodoForm;
