import { useState } from 'react'
import {v4 as uuidv4} from 'uuid';
import { TaskProps } from './shared/typing/Task'

import './globals.css'
import styles from './App.module.css'
import { Header, NewTask, TasksContainer } from './components';

function App() {
  const [tasks, setTasks] = useState<TaskProps[]>([])

  const handleAddTask = (content: string) => {
    setTasks((prevState) => {
      const newTask = {
        id: uuidv4(),
        createdAt: new Date(),
        content,
        done: false
      }

      return [...prevState, newTask]
    })
  }

  const handleUpdateTask = (id: string) => {
    setTasks((prevState) => {
      const spredPrevState = [...prevState]
      const taskIndex = spredPrevState.findIndex((task) => task.id === id)
      const updatedTask = {...spredPrevState[taskIndex]}

      if (updatedTask) {
        updatedTask.done = !updatedTask?.done
        
        spredPrevState[taskIndex] = updatedTask
      }

      return spredPrevState
    })
  }

  const handleDeleteTask = (id: string) => {
    setTasks((prevState) => {
      const updatedTasks = prevState.filter((task) => task.id !== id)

      return updatedTasks
    })
  }

  return (
    <div className={styles.wrapper}>
      <Header />

      <NewTask onAddTask={handleAddTask} />

      <TasksContainer
        tasks={tasks} 
        handleUpdateTask={handleUpdateTask} 
        handleDeleteTask={handleDeleteTask} 
      />
    </div>
  )
}

export default App
