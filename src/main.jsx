import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // sacando StrictMode ya no imprime dos veces todos, pero baja las comprobaciones del codigo
  // <React.StrictMode>
    <App />
  //</React.StrictMode>
  ,
)
