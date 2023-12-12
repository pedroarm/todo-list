import React, { useState } from 'react';
import plus from '../../assets/plus.svg'

import styles from './styles.module.css';

interface NewTaskProps {
  onAddTask: (value: string) => void
}

const NewTask: React.FC<NewTaskProps> = ({
  onAddTask
}) => {
  const [newTaskText, setNewTaskText] = useState<string>('')

  const handleAddTask = () => {
    if (newTaskText.length) {
      onAddTask(newTaskText)
      setNewTaskText('')
    }
  }

  return (
    <div className={styles.container}>
      <input type="text" value={newTaskText} onChange={(e) => setNewTaskText(e.target.value)} placeholder='Adicione uma nova tarefa' />
      <button onClick={handleAddTask}>
        Criar
        <img src={plus} alt="Plus icon" />
      </button>
    </div>
  );
}

export default NewTask