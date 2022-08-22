import React from 'react'
import '../Styles/taskForm.css'
import {AiOutlinePlusCircle} from 'react-icons/ai'
import { useState } from 'react'
import {addTask} from '../utils/utils'


const TaskForm = () => {
    const [title , setTitle] = useState('')
    const [description , setDesription] = useState('')
    const [priority , setPriority] = useState('')
    const [date , setDate] = useState('')
   

    

  return (
    <div className='container'>
        <div className="form">
            <div className="inputs">
                <input type="text" name='title' onChange={(e)=>setTitle(e.target.value)} placeholder='Title' value = {title}className='input title' />
                <input type="text" name='descrption' onChange={(e)=>setDesription(e.target.value)} value = {description} placeholder='Description' className='input description'/>
            </div>
            <div className="buttons">   
                <input type="date" name='date' onChange={(e)=>setDate(e.target.value)} value = {date} className='inputDate'/>
                <select name="priority" value = {priority} onChange={(e)=>setPriority(e.target.value)} className='selectPriority'>
                    <option >--- Chose Priority ---</option>
                    <option value="1">Elevé</option>
                    <option value="2">Moyen</option>
                    <option value="3">Faible</option>
                </select>
                </div>
               
            <div className="add-task">
                <button onClick={()=> addTask(title , description , date , priority)} className='addtask-button'>
                    <AiOutlinePlusCircle/> Add a task
                </button>
            </div>
        </div>
    </div>
  )
}

export default TaskForm