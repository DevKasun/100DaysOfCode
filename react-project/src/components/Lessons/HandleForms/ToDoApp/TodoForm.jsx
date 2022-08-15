import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Button from '../../../Button/Button';
import Form from '../../../Form/Form';
import Input from '../../../Input/Input';
import TodoList from './TodoList';

const TodoForm = () => {
	const [newTodo, setNewTodo] = useState('');
	const [todos, setTodos] = useState([]);
	const [errorEnable, isErrorEnable] = useState(false);

	useEffect(() => {
		const storedTodos = JSON.parse(localStorage.getItem('todos'));
		console.log(storedTodos);
		if (storedTodos) setTodos(storedTodos);
	}, []);

	const handleOnChange = (event) => {
		const inputVal = event.target.value;
		setNewTodo(inputVal);
		if (errorEnable) {
			isErrorEnable(false);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		if (newTodo === '') {
			isErrorEnable(true);
		} else {
			const item = [
				{
					id: uuidv4(),
					title: `${newTodo}`,
					complete: false,
				},
			];
			setTodos([...todos, ...item]);
			setNewTodo('');
			localStorage.setItem('todos', JSON.stringify([...todos, ...item]));
		}
	};

	const toggleTodo = (id) => {
		const newTodoList = [...todos];
		const foundItem = newTodoList.find((item) => {
			return item.id == id;
		});
		foundItem.complete = !foundItem.complete;
		setTodos(newTodoList);
		localStorage.setItem('todos', JSON.stringify(newTodoList));
	};

	const deleteTodo = (id) => {
		const newTodoList = [...todos];
		const filteredTodos = newTodoList.filter((item) => {
			return item.id != id;
		});
		setTodos(filteredTodos);
		localStorage.setItem('todos', JSON.stringify(filteredTodos));
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
					{errorEnable ? (
						<p className='text-red-600 text-sm pl-2 pt-2'>
							Field is empty!
						</p>
					) : null}
				</div>
				<div>
					<Button type='submit'>Add</Button>
				</div>
				<TodoList
					todos={todos}
					toggleTodo={toggleTodo}
					deleteTodo={deleteTodo}
				/>
			</Form>
		</>
	);
};

export default TodoForm;
