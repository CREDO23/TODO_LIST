import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import tasksList from './task';

function App() {
	const [tasks, setTasks] = useState(tasksList);
	console.log(tasks);

	const addTask = (task) => {
		console.log('new task ' , task);
		task.id = Math.random();
		setTasks([...tasks, task]);
	};

	return (
		<div className='App'>
			<div className='task-form'>
				<TaskForm addTask={addTask} />
			</div>
			<div className='tasks-list'>
				<TaskList tasks={tasks} />
			</div>
		</div>
	);
}

export default App;
