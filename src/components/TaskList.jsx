import React, { useEffect, useState } from 'react';
import Task from './Task';
import './Task.css';
//
const TaskList = ({ tasks, deleteTask }) => {
	console.log(tasks);
	return (
		<div>
			<div>
				{tasks &&
					tasks.map(function (task, index) {
						return <Task task={task} key={index} onDelete={deleteTask} />;
					})}
			</div>
		</div>
	);
};

export default TaskList;
