import React, { useEffect } from 'react'
import './todo-button.css'
import { useGlobalContext } from '../../useContext'
import { BUTTON_STATE } from '../../types/btn-state'

const TodoButton = () => {
  const { isError, fetchIsSuccessful, loading, fetchData, todoData } =
    useGlobalContext()
  useEffect(() => {
    const btn = document.querySelector('button')
    const btnText = btn.textContent
    switch (btnText) {
      case BUTTON_STATE.LOADED:
        btn.disabled = false
        break
      case BUTTON_STATE.LOADING:
        btn.disabled = true
        break
      case BUTTON_STATE.LOADED_AND_DELAYING:
        btn.disabled = true
        break
      default:
        btn.disabled = false
        break
    }
  }, [loading, fetchIsSuccessful, todoData, isError])

  const handleFetch = (e) => {
    e.preventDefault()
    fetchData()
  }
  return (
    <button onClick={handleFetch}>
      {isError
        ? BUTTON_STATE.ERROR
        : loading
        ? BUTTON_STATE.LOADING
        : !fetchIsSuccessful
        ? BUTTON_STATE.LOADED_AND_DELAYING
        : BUTTON_STATE.LOADED}
    </button>
  )
}

export default TodoButton
