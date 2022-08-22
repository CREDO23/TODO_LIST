/** @format */

import task from '../task';

export const addTask = (title, description, date, priority) => {
	task.push({
		id: task.length + 1,
		title,
		description,
		date,
		priority,
	});
};

export const removeTask = (id) => {
	task.filter((task) => task.id != id);
};


