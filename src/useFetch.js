import { useState, useEffect } from 'react'

export const useFetch = () => {
  //check if there is error
  //check if loading is true
  //check if fetch is successful
  //store fetched data in array format
  const [isError, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fetchIsSuccessful, setfetchIsSuccessful] = useState(false)
  const [todoData, setTodoData] = useState([])
  const URL = 'https://jsonplaceholder.typicode.com/todos'

  const fetchData = async () => {
    //set fetch is succesful intitally to false
    //set loading initially to true
    setfetchIsSuccessful(false)
    setLoading(true)
    try {
      //delay load in 1sec
      //delay fetch is successful in 2secs
      //fetch data from api
      //return arrays from array in the api
      //return random todo array of 10 items on load or reload
      //check if returned array ends with a prime number
      //check if there is an error and return error as true
      setTimeout(() => setLoading(false), 1000)
      setTimeout(() => setfetchIsSuccessful(true), 2000)
      const RESP = await fetch(URL)
      const DATA = await RESP.json()
      const newItems = Array.from({ length: 10 }, (_, index) => {
        const start = index * 10
        const newArr = DATA.slice(start, start + 10)
        return newArr
      })
      const random = Math.floor(Math.random() * newItems.length)
      if (newItems[random].length % 2 === 0) {
        return setTodoData(newItems[random])
      } else {
        return setError(true)
      }
    } catch (error) {
      setError(true)
    }
  }

  //handle button disability
  useEffect(() => {
    const btn = document.querySelector('button')
    const btnText = btn.textContent
    switch (btnText) {
      case 'RELOAD':
        btn.disabled = false
        break
      case 'LOADING...':
        btn.disabled = true
        break
      case 'WAIT 2secs':
        btn.disabled = true
        break
      default:
        btn.disabled = false
        break
    }
  }, [loading, fetchIsSuccessful, todoData])

  //handles fetch data on load or reload
  useEffect(() => {
    fetchData()
  }, [])

  return {
    isError,
    todoData,
    setTodoData,
    fetchIsSuccessful,
    loading,
    fetchData,
  }
}
