import { useState } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import credo from '../src/Styles'
function App() {
    const [tasks, setTasks] = useState([]);
			
								const addTask = (task) => {
									task.id = Math.random();
									setTasks([...tasks, task]);
								};

								const deleteTask = (id) => {
									setTasks(tasks.filter((task) => task.id !== id));
								};

    return (
        <div className="App">
            <div className="task-form">
                <TaskForm addTask={addTask} />
            </div>
            <div className="tasks-list">
                <TaskList tasks={tasks} deleteTask={deleteTask} />
            </div>
        </div>
    );
}

export default App;
