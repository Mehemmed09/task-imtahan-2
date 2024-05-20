import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import App from './App.jsx'
import BasketProvider from './context/context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <BrowserRouter>
  <BasketProvider>
    <App />
  </BasketProvider>
  </BrowserRouter>
  </React.StrictMode>,
)
