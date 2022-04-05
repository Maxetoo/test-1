import React from 'react'
import './todos.css'
import TodoButton from '../todo-button/todo-button'
import TodoItem from '../todo-item/todo-item'
import { useGlobalContext } from '../../useContext'

const Todos = () => {
  const { isError, todoData, fetchIsSuccessful, loading } = useGlobalContext()
  return (
    <section>
      <header>
        <h3 className='todo-name'>TODO APP</h3>
        <TodoButton />
      </header>

      <div className='todo-container'>
        {!isError &&
          !loading &&
          fetchIsSuccessful &&
          todoData.map((value) => {
            return <TodoItem {...value} key={value.id} />
          })}
      </div>
    </section>
  )
}

export default Todos
