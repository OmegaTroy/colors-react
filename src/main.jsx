import React from 'react'
import ReactDOM from 'react-dom/client'
import {ColorsContextProvider} from './context/ColorsContext'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ColorsContextProvider>
      <App/>
    </ColorsContextProvider>
  </React.StrictMode>
)
