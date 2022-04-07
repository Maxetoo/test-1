import React from 'react'
import './todo-item.css'
import { TODO } from '../../types/todo'

const TodoItem = ({ title, completed }) => {
  return (
    <article>
      <h3 className='title'>{title}</h3>
      <div className={`todo-status ${completed ? 'completed' : 'in-process'}`}>
        {completed ? TODO.STATUS.COMPLETED : TODO.STATUS.IN_PROGRESS}
      </div>
    </article>
  )
}

export default TodoItem
