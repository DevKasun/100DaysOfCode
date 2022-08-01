import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../../Button/Button';
import Form from '../../../Form/Form';
import Input from '../../../Input/Input';
import TodoList from './TodoList';

const TodoForm = () => {

	const [newTodo, setNewTodo] = useState('');
	const [todos, setTodos] = useState([
		{
			id: uuidv4(),
			title: 'Read the book',
		},
		{
			id: uuidv4(),
			title: 'UI/UX for the website',
		},
	]);
	const [errorEnable, isErrorEnable] = useState(false);

	const handleOnChange = (event) => {
		const inputVal = event.target.value
		setNewTodo(inputVal);
		if(errorEnable) {
			isErrorEnable(false)
		}
	}


	const handleSubmit = (event) => {
		event.preventDefault();
		if(newTodo === '') {
			isErrorEnable(true);
		} else {
			const item = [
				{
					id: uuidv4(),
					title: `${newTodo}`
				}	
			]
			console.log(item)
			setTodos([...todos, ...item])
			setNewTodo('');
		}
	};
	return (
		<>
			<Form onSubmit={handleSubmit} className='bg-slate-50' title='ToDos'>
				<div className='pb-4'>
					<Input
						type='text'
						value={newTodo}
						onChange={handleOnChange}
						placeholder='Add to todo list'
					/>
					{ errorEnable ? <p className='text-red-600 text-sm pl-2 pt-2'>Field is empty!</p> : null }
				</div>
				<div>
					<Button type='submit' >Add</Button>
				</div>
				<TodoList todos={todos} />
			</Form>
		</>
	);
};

export default TodoForm;
