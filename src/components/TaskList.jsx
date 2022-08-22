import React from 'react';
import Task from './Task';
import './Task.css'

import { tasksList } from '../task'
// 
const TaskList = () => {
	return <div>
		<div >
			{tasksList.map(function (task, index) {
				return <Task task={task} key={index} />;
			})}
		</div>
	</div>;
};

export default TaskList;
