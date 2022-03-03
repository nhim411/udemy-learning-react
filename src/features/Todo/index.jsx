import React, { useState } from 'react';
import TodoList from './components/TodoList';

function TodoFeature(props) {
	const initTodoList = [
		{ id: 1, title: 'clean kitchen', status: 'new' },
		{ id: 2, title: 'cook dinner', status: 'completed' },
		{ id: 3, title: 'do homework', status: 'new' },
	];
	const [todoList, setTodoList] = useState(initTodoList);
	const [FilterStatus, setFilterStatus] = useState('all');
	const handleTodoClick = (todo, index) => {
		const newTodoList = [...todoList];
		newTodoList[index] = {
			...newTodoList[index],
			status: newTodoList[index].status === 'completed' ? 'new' : 'completed',
		};
		setTodoList(newTodoList);
	};

	const handleShowAllClick = () => {
		setFilterStatus('all');
	};
	const handleShowCompletedClick = () => {
		setFilterStatus('completed');
	};
	const handleShownNewClick = () => {
		setFilterStatus('new');
	};

	const renderedTodoList = todoList.filter((todo) => FilterStatus === 'all' || FilterStatus === todo.status);

	return (
		<div className='todo'>
			<h2>Todo List</h2>
			<TodoList todoList={renderedTodoList} onTodoClick={handleTodoClick} />
			<button onClick={handleShowAllClick} disabled={FilterStatus === 'all'}>
				Show All
			</button>
			<button onClick={handleShowCompletedClick} disabled={FilterStatus === 'completed'}>
				Show Completed
			</button>
			<button onClick={handleShownNewClick} disabled={FilterStatus === 'new'}>
				Show New
			</button>
		</div>
	);
}

TodoFeature.propTypes = {};

export default TodoFeature;
