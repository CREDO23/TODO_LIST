import React, { useEffect, useState } from 'react';
import Task from './Task';
import './Task.css';
//
const TaskList = ({ tasks }) => {
	console.log(tasks);
	return (
		<div>
			<div>
				{tasks &&
					tasks.map(function (task, index) {
						return <Task task={task} key={index} />;
					})}
			</div>
		</div>
	);
};

export default TaskList;
