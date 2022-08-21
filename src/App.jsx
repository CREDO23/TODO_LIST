import { useState } from 'react'
import './App.css'
import TaskForm from './components/TaskForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TaskForm />
    </div>
  )
}

export default App
