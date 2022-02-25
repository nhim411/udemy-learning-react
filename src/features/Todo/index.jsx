import React, { useState } from 'react';
import TodoList from './components/TodoList';

function TodoFeature(props) {
	const initTodoList = [
		{ id: 1, title: 'clean kitchen', status: 'new' },
		{ id: 2, title: 'cook dinner', status: 'completed' },
		{ id: 3, title: 'do homework', status: 'new' },
	];
	const [todoList, setTodoList] = useState(initTodoList);
	const handleTodoClick = (todo, index) => {
		const newTodoList = [...todoList];
		newTodoList[index] = {
			...newTodoList[index],
			status: newTodoList[index].status === 'completed' ? 'new' : 'completed',
		};
		setTodoList(newTodoList);
	};

	return (
		<>
			<h3>Todo List</h3>
			<TodoList todoList={todoList} onTodoClick={handleTodoClick} />
		</>
	);
}

TodoFeature.propTypes = {};

export default TodoFeature;
