import React, { useContext } from 'react'
import { useFetch } from './useFetch'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const { isError, todoData, fetchIsSuccessful, loading, fetchData } =
    useFetch()
  const handleFetch = (e) => {
    e.preventDefault()
    fetchData()
  }
  return (
    <AppContext.Provider
      value={{
        isError,
        todoData,
        fetchIsSuccessful,
        loading,
        handleFetch,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
