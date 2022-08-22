import React from 'react'
import '../Styles/taskForm.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'


const TaskForm = () => {
  return (
    <div className='container'>
        <div className="form">
            <div className="inputs">
                <input type="text" placeholder='Title' className='input title' />
                <input type="text" placeholder='Description' className='input description'/>
            </div>
            <div className="buttons">
                <button className='button date'>Date</button>
                <button className='button priority'>Priority</button>
            </div>
            <div className="add-task">
                <button className='addtask-button'>
                    <AiOutlinePlusCircle/> Add a task
                </button>
            </div>
        </div>
    </div>
  )
}

export default TaskForm