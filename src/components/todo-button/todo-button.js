import React from 'react'
import './todo-button.css'
import { useGlobalContext } from '../../useContext'

const TodoButton = () => {
  const { isError, fetchIsSuccessful, loading, handleFetch } =
    useGlobalContext()
  return (
    <button onClick={handleFetch}>
      {isError
        ? 'LOAD ERROR.RETRY'
        : loading
        ? 'LOADING...'
        : !fetchIsSuccessful
        ? 'WAIT 2secs'
        : 'RELOAD'}
    </button>
  )
}

export default TodoButton
