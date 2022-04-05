import React from 'react'
import './todo-item.css'

const TodoItem = ({ title, completed }) => {
  return (
    <article>
      <h3 className='title'>{title}</h3>
      <div className={`todo-status ${completed ? 'completed' : 'in-process'}`}>
        {completed ? 'completed' : 'in-process'}
      </div>
    </article>
  )
}

export default TodoItem
