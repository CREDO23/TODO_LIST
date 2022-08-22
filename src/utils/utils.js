/** @format */

import task from '../task';

const addTask = (title, description, date, priority) => {
	task.push({
		id: task.length + 1,
		title,
		description,
		date,
		priority,
	});
};

const removeTask = (id) => {
	task.filter((task) => task.id != id);
};

module.exports = {
	addTask,
	removeTask,
};
