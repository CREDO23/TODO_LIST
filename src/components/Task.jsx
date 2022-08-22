import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";

const Task = () => {
    return (
        <div className='firstTaskdiv'>
            <div className='titleAndDate'>
                <h3 className='taskTitle'> Reviser React</h3>
                <span className='dayTask'>Monday, 10h15</span>
            </div>
            <div className='descriptionAndDelete'>
                <p> Dom virtuel, React Router, les props et States </p>
                <button className='iconDelete'>
                    <FaRegTrashAlt  />
                </button>
            </div>
        </div>
    )
}


export default Task;
