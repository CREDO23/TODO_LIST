import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const Task = ({task}) => {
	return (
		<div className='firstTaskdiv'>
			<div className='titleAndDate'>
				<h3 className='taskTitle'>{task.title}</h3>
				<span className='dayTask'>{task.date}</span>
			</div>
			<div className='descriptionAndDelete'>
				<p> {task.description}</p>
				<button className='iconDelete'>
					<FaRegTrashAlt />
				</button>
			</div>
		</div>
	);
};

export default Task;
