import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa';

const Task = ({ task, onDelete }) => {
    let borderColor;
    if (task.priority == 1) borderColor = 'red';
    else if (task.priority == 2) borderColor = ' yellow';
    else borderColor = ' green';
    return (
        <div className="firstTaskdiv" style={{ borderLeftColor: borderColor }}>
            <div className="titleAndDate">
                <h3 className="taskTitle">{task.title}</h3>
                <span className="dayTask">{task.date}</span>
            </div>
            <div className="descriptionAndDelete">
                <p> {task.description}</p>
                <button
                    className="iconDelete"
                    onClick={() => onDelete(task.id)}
                >
                    <FaRegTrashAlt />
                </button>
            </div>
        </div>
    );
};

export default Task;
