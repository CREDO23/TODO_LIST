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
                <input type="date" className='inputDate'/>
                <select name="select" onchange="updated(this)" className='selectPriority'>
                    <option >--- Chose Priority ---</option>
                    <option value="1">Elevé</option>
                    <option value="2">Moyen</option>
                    <option value="3">Faible</option>
                </select>
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