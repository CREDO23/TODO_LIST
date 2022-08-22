import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

function App() {
	const [count, setCount] = useState(0);

	return (
		<div className='App'>
			<div className='task-form'>
				<TaskForm />
			</div>
			<div className='tasks-list'>
				<TaskList />
			</div>
		</div>
	);
}

export default App;
