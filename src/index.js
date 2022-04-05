import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import { AppProvider } from './useContext'

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
