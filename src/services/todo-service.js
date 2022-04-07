import { useState, useEffect } from 'react'
import { config } from '../data/config'

export const useService = () => {
  const [isError, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const [fetchIsSuccessful, setfetchIsSuccessful] = useState(false)
  const [todoData, setTodoData] = useState([])
  const URL = 'https://jsonplaceholder.typicode.com/todos'

  const checkForPrime = (num) => {
    if (num <= 1) {
      return true
    } else if (num > 1) {
      for (let i = 2; i < num; i++) {
        if (num % i === 0) {
          return false
        } else {
          return true
        }
      }
    }
  }

  const fetchData = async () => {
    //get epoch time in milli secs
    //get last digit of epoch time
    //check if last digit of epoch time is not prime
    //set loading to be true at every fetch if epochtime lastdigit is not prime
    //set fetch is successful to be false at initial fetch if epochtime last digit is not prime
    //set loading as false if epochtime last digit is prime
    const epochMillis = Date.now()
    const lastDigit = epochMillis % 10

    if (!checkForPrime(lastDigit)) {
      setError(false)
      setLoading(true)
      setfetchIsSuccessful(false)
    } else {
      setError(true)
      setLoading(false)
      setfetchIsSuccessful(false)
    }
    try {
      const RESP = await fetch(URL)
      const DATA = await RESP.json()
      const newItems = Array.from(
        { length: config.todos.fetch.count },
        (_, index) => {
          const start = index * config.todos.fetch.count
          const newArr = DATA.slice(start, start + config.todos.fetch.count)
          return newArr
        }
      )
      const random = Math.floor(Math.random() * newItems.length)
      //if fetch is successful
      //check if last digit of epoch time is not prime
      //if not, delay and set loading to be false in secs
      //if not, delay and set fetch is successful to be true in secs
      //if not, set check error to be false

      if (!checkForPrime(lastDigit)) {
        setError(false)
        setTodoData(newItems[random])
        setTimeout(
          () => setLoading(false),
          `${config.todos.delayWhileLoading * 1000}`
        )
        setTimeout(
          () => setfetchIsSuccessful(true),
          `${config.todos.loadedAndDelaying * 1000}`
        )
      } else {
        //if last digit of epoch time is prime
        //set error to be true
        //then set loading to be false
        //then, set fetch is successful to be false
        setLoading(false)
        setfetchIsSuccessful(false)
        setError(true)
      }
    } catch (error) {
      console.log(error)
      setError(true)
      setLoading(false)
      setfetchIsSuccessful(false)
    }
  }

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
