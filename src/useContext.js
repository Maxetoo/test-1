import React, { useContext } from 'react'
import { useService } from './services/todo-service'

const AppContext = React.createContext()

const AppProvider = ({ children }) => {
  const {
    isError,
    todoData,
    fetchIsSuccessful,
    loading,
    fetchData,
    setLoading,
  } = useService()

  return (
    <AppContext.Provider
      value={{
        isError,
        todoData,
        fetchIsSuccessful,
        loading,
        fetchData,
        setLoading,
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
