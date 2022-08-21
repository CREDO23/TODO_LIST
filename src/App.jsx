import { useState } from 'react'
import './App.css'
import Task from './component/Task'

const tasks = [
	{
		topic: 'Tools',
		para: 'On demand file serving over native ESM, no bundling required!',
		butn: <button> <img src="./supr.png" alt="" /> </button>,
		date:'date'
	},
	{
		topic: 'Tools',
		para: 'On demand file serving over native ESM, no bundling required!',
		butn: <button></button>,
		date:'date'
	},
	{
		topic: 'Tools',
		para: 'On demand file serving over native ESM, no bundling required!',
		butn: <button></button>,
		date:'date'
	},
	{
		topic: 'Tools',
		para: 'On demand file serving over native ESM, no bundling required!',
		butn: <button></button>,
		date:'date'
	},
	{
		topic: 'Tools',
		para: 'On demand file serving over native ESM, no bundling required!',
		butn: <button></button>,
		date:'date'
	},
	{
		topic: 'Tools',
		para: 'On demand file serving over native ESM, no bundling required!',
		butn: <button></button>,
		date:'date'
	},
	{
		topic: 'Tools',
		para: 'On demand file serving over native ESM, no bundling required!',
		butn: <button></button>,
		date:'date'
	},
];


function App() {

  return (
    <div className="App">
		<div className='date'>La date </div>
			<div className='tasks'>
				{tasks.map(function (tasks, index) {
					return <Task topic={tasks.topic} para={tasks.para} butn={tasks.butn} date={tasks.date} key={index} />;
				})}
			</div>
    </div>
  )
}

export default App
