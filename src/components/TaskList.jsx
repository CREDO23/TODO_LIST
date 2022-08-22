import React, { useEffect, useState } from 'react';
import Task from './Task';
import './Task.css'

import  tasksList  from '../task'
// 
const TaskList = () => {
	const [task , setTsak] = useState([])
	
	return <div>
		<div >
			{task.map(function (task, index) {
				return <Task task={task} key={index} />;
			})}
		</div>
	</div>;
};

export default TaskList;
